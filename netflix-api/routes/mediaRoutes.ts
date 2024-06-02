import type { Express } from 'express';
import mediaController from '../controllers/mediaController';
import express, { Router } from 'express';

const routes = express.Router();

routes.get('/movies', mediaController.getMovies);
routes.get('/video', mediaController.getVideo);
routes.get('/genre', mediaController.getGenre);
routes.get('/stream', mediaController.streamVideo);

export default routes;