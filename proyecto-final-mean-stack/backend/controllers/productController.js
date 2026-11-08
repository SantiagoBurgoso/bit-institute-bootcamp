const mongoose = require("mongoose");
const Product = require("../models/Product");

const productFields = (body) => {
    const {
        name,
        description,
        price,
        category,
        imageUrl
    } = body;

    return {
        name,
        description,
        price,
        category,
        imageUrl: imageUrl || ""
    };
};

const getProducts = async (req,res) => {
    try {
        const products = await Product.find()
        .sort({ createdAt: -1 });

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};

const getProduct = async (req,res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(
            productFields(req.body)
        );

        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            productFields(req.body),
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                message: "Invalid product ID"
            });
        }

        const product = await Product.findByIdAndDelete(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};