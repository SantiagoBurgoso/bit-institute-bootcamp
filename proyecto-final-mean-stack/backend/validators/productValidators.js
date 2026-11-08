const { body } = require("express-validator");

const productValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),

    body("price")
        .isFloat({ min:0 })
        .withMessage("Price must be zero or greater"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required"),

    body("imageUrl")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Invalid image URL") 
];

module.exports = productValidation;