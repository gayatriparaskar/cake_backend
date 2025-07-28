const express = require("express");


const {createOrder, getAllOrder ,updateOrder,deleteOrder } = require("../controllers/orederController");
const orderRouter = express.Router();

orderRouter.post("/registerOrder",createOrder);
orderRouter.get("/getOrderAll",getAllOrder);
orderRouter.get("/updateOrder/:id",updateOrder);
orderRouter.get("/deleteOrder/:id",deleteOrder);

module.exports = orderRouter;
