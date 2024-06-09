//main config for the routes
import type { Express, NextFunction } from 'express';
import mediaRoutes from './mediaRoutes';
import authRoutes from './authRoutes';
import paymentRoutes from './paymentRoutes';
import statsRoutes from './statsRoutes';
import type{ Request, Response } from 'express';



export default (app: Express) => {
    //media routes config
    app.use('/api/media', mediaRoutes);
    //auth routes config
    app.use('/api/auth', authRoutes);
    //payment routes config
    app.use('/api/payment', paymentRoutes);
    //stats routes config
    app.use('/api/stats', statsRoutes);
    //test endpoint
    app.get('/test', (req, res) => {
        res.send('api is running');
    });

    app.use((err: any, req: any, res: any, next: any) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    
};

