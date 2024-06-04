import type { Express } from 'express';
import paymentController from '../controllers/paymentController';
import express, { Router } from 'express';

const routes = express.Router();

routes.post('/create-subscription', paymentController.createSubscription);
routes.get('/success', paymentController.successTtransaction);
routes.get('/cancel', paymentController.canceledTRansaction);
routes.get('/check-suscription', paymentController.checkIfSuscribtionIsCompleted);

export default routes;