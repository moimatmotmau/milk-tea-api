import { ordersModel } from '../models/ordersModel.js'

export const getOrders = async(req, res) => {
    try {
        const orders = await ordersModel.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const getOrderById = async(req, res) => {
    try {
        const findOrder = req.params.id;
        const Order = await ordersModel.findById(findOrder);
        console.log(Order)
        res.status(200).json(Order);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const createOrder = async(req, res) => {
    try {
        const newOrder = {...req.body };
        const Order = new ordersModel(newOrder);
        await Order.save();
        res.status(200).json(Order)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const updateOrder = async(req, res) => {
    try {
        const updateOrder = req.body;
        const Order = await ordersModel.findOneAndUpdate({ _id: updateOrder._id },
            updateOrder, { new: true }
        );
        res.status(200).json(Order)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const deleteOrder = async(req, res) => {
    try {
        const Order = await ordersModel.deleteOne({ _id: req.params.id });
        res.status(200).json(Order)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};