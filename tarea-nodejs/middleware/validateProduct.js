const validateProduct = (req, res, nexxt) => {
    const {name, price} = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({
            message: 'El nombre y el precio son obligatorios'
        });
    }

    next();
};

module.exports = validateProduct;