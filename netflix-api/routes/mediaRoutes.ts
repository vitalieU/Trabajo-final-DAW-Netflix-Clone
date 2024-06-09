import type { Express } from 'express';
import mediaController from '../controllers/mediaController';
import express, { Router } from 'express';
import * as jwt from 'jsonwebtoken';

const routes = express.Router();


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
    finally{
        next();
    }
}

routes.get('/movies', mediaController.getMovies);
routes.get('/video', mediaController.getVideo);
routes.get('/genre', mediaController.getGenre);
routes.get('/stream', mediaController.streamVideo);
routes.get('/search', mediaController.searchQuery);
routes.get('/watchlist',checkUser, mediaController.getWatchlist);

export default routes;