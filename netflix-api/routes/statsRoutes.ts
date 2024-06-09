import express, { Router } from 'express';
import type { Express } from 'express';
import statsController from '../controllers/statsController';

const routes = express.Router();

routes.get('/users', statsController.getAllUsers);
routes.get('/movies', statsController.getAllMovies);
routes.get('/tvshows', statsController.getAllTvShows);

export default routes;

