import { productModel } from '../models/productModel.js'

export const getProducts = async(req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const getProductById = async(req, res) => {
    try {
        const findProduct = req.params.id;
        const product = await productModel.findById(findProduct);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const getProductByName = async(req, res) => {
    try {
        const findProducts = req.params.name;
        const products = await productModel.find({ name: findProducts });
        console.log('found by name');
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const createProduct = async(req, res) => {
    try {
        const newProduct = req.body;
        const product = new productModel(newProduct);
        await product.save();

        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const updateProduct = async(req, res) => {
    try {
        const updateProduct = req.body;
        const product = await productModel.findOneAndUpdate({ _id: updateProduct._id },
            updateProduct, { new: true }
        );
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const deleteProduct = async(req, res) => {
    try {
        const product = await productModel.deleteOne({ _id: req.params.id });
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};