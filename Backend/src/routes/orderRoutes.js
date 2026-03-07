import express from "express";
import orderController from "../controller/orderController.js";
import { cartMiddleware }  from '../middleware/cartMiddleware.js'

const routes = express.Router();

routes.post('/placeorder',cartMiddleware, orderController.placeOrder)
routes.post("/userorders", cartMiddleware,  orderController.userOrder);
routes.get("/listorders",  orderController.listOrders);
routes.post("/status",  orderController.updateStatus);

export default routes;
