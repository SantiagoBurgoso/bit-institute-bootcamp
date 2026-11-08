const express = require("express");

const router = express.Router();

const {
    register,
    login,
    getMe
} = require("../controllers/authController");

const {
    registerValidation,
    loginValidation,
    handleValidation
} = require("../validators/authValidators");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/register",
    registerValidation,
    handleValidation,
    register
);

router.post(
    "/login",
    loginValidation,
    handleValidation,
    login
);

router.get("/me", authMiddleware, getMe);

module.exports = router;