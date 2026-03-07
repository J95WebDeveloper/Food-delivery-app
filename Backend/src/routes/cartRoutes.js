import express from "express";
import cartController from "../controller/cartController.js";
import { cartMiddleware } from "../middleware/cartMiddleware.js";


const routes = express.Router();

routes.post("/addcart", cartMiddleware, cartController.AddToCart);
routes.post("/removecart", cartMiddleware, cartController.RemoveFormCart);
routes.get("/getcart", cartMiddleware, cartController.getCart);

export default routes;
