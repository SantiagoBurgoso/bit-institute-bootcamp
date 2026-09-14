let products = [
    {
        id: 1,
        name: 'Cuadro personalizado',
        price: 50000
    },
    {
        id: 2,
        name: 'Poster personalizado',
        price: 30000
    }
];

const getProducts =(req, res) => {
    res.json(products);
};

const createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

if (!product) {
    return res.status (404).json({
        message: 'Producto no encontrado'
    });
}

product.name = req.body.name;
product.price = req.body.price;

res.json(product);
};

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return res.status (404).json({
            message: 'Producto no encontrado'
        });
    }

    products.splice(index, 1);

    res.json({
        message:  'Producto eliminado correctamente'
    });
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};