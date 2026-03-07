import express from "express";
import authController from "../controller/authController.js";

const routes = express.Router();

routes.post("/register", authController.Register);
routes.post("/login", authController.Login);

export default routes;
