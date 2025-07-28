const userOrderModel = require("../models/order");
const {successResponse , errorResponse } =require("../helper/successAndError");
module.exports.createOrder = async(req,res) =>{
    try {
        const data = req.body;
        const newOrder = await userOrderModel(data);
    newOrder.save()
    res.status(200).json(successResponse(200,"oreder is submited",newOrder));
    } catch (error) {
        res.status(500).json(errorResponse(500,"order is not submited",error.message));
    }
}

module.exports.getAllOrder = async(req,res) =>{
    try {
        const data = req.body;
        const getOrder = await userOrderModel.find();

    res.status(200).json(successResponse(200,"all orders are fetched",getOrder));
    } catch (error) {
        res.status(500).json(errorResponse(500,"orders are not found ",error.message));
    }
}

module.exports.updateOrder= async (req,res)=>{
    try {
        const id = req.params.id;
    const updateOrder = await userOrderModel.findByIdAndUpdate(id,{
        runValidators:true,
        new:true
    })
    res.status(200).json(successResponse(200,"Order is updated sucessfully",updateOrder))
    } catch (error) {
        res.status(500).json(errorResponse(500,"order is not updated",error.message));
    }
}

module.exports.deleteOrder= async (req,res)=>{
    try {
        const id = req.params.id;
    const deleteOrder = await userOrderModel.findByIdAndDelete(id);
    res.status(200).json(successResponse(200,"Order is updated sucessfully",deleteOrder))
    } catch (error) {
        res.status(500).json(errorResponse(500,"order is not updated",error.message));
    }
}
