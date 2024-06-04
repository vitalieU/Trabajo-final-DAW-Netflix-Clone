//main config for the routes
import type { Express, NextFunction } from 'express';
import mediaRoutes from './mediaRoutes';
import authRoutes from './authRoutes';
import paymentRoutes from './paymentRoutes';
import type{ Request, Response } from 'express';
var jwt = require('jsonwebtoken');


/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 * @description check if the jwt token is valid, if not redirects to root directory in the client
 */
async function checkJwt(req:Request , res: Response, next:NextFunction) {
    const token = req.cookies.token;
    if (!token) {
        
    }
    try {
        const decoded = jwt.verify(token, Bun.env.JWT_SECRET);
        req.body.payload = decoded;
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
    next();

}
export default (app: Express) => {
    //media routes config
    app.use('/api/media', mediaRoutes);
    //auth routes config
    app.use('/api/auth', authRoutes);
    //payment routes config
    app.use('/api/payment', paymentRoutes);
    //test endpoint
    app.get('/test', (req, res) => {
        res.send('api is running');
    });
   //error handling
    app.use((req, res) => {
        res.status(404).send('Endpoint not found');
    });
    app.use((err: any, req: any, res: any, next: any) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    
};

