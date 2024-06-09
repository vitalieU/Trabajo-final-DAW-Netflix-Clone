import authController from "../controllers/authController";
import express from "express";
import * as verify from "jsonwebtoken";
const routes = express.Router();
import * as jwt from 'jsonwebtoken'


function checkUser(req: any, res: any, next: any) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, email: string, suscribed: boolean };
        req.body.user = decoded;
        next();
    }
    catch (error: any) {
        res.status(401).json({ message: error.message });
    }
    next();
}

routes.post('/register', authController.registration);
routes.post('/login', authController.login);
routes.get('/check-user',authController.checkUser);
routes.post('/add-movie-to-watchlist',checkUser,authController.addMovieToWatchlist);
routes.delete('/remove-movie-from-watchlist',checkUser,authController.removeMovieFromWatchlist);
routes.get('/watchlist',checkUser,authController.getWatchlist);

export default routes;