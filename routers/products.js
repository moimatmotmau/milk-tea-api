import express from "express";
import { getProducts, getProductById, getProductByName, createProduct, updateProduct, deleteProduct } from '../controllers/products.js'

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/?name', getProductByName);
router.post('/', createProduct);
router.put('/update/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;