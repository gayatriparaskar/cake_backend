const express = require("express");


const {createOrder, getAllOrder ,updateOrder,deleteOrder } = require("../controllers/orederController");
const orderRouter = express.Router();

orderRouter.post("/registerOrder",createOrder);
orderRouter.get("/getOrderAll",getAllOrder);
orderRouter.put("/updateOrder/:id",updateOrder);
orderRouter.delete("/deleteOrder/:id",deleteOrder);

module.exports = orderRouter;
