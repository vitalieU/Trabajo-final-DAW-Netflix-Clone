import authController from "../controllers/authController";
import express from "express";

const routes = express.Router();

routes.post('/register', authController.registration);
routes.post('/login', authController.login);

export default routes;