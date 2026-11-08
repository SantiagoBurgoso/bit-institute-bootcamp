const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const authMiddleware = require ("../middleware/authMiddleware");

const productValidation = require("../validators/productValidators");

const {
    handleValidation
} = require("../validators/authValidators");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post(
    "/",
    authMiddleware,
    productValidation,
    handleValidation,
    createProduct
);

router.put(
    "/:id",
    authMiddleware,
    productValidation,
    handleValidation,
    updateProduct
);

router.delete(
    "/:id",
    authMiddleware,
    deleteProduct
);

module.exports = router;