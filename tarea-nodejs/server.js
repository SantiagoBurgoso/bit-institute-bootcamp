const express = require ('express');

const productRoutes = require('./routes/productRoutes.js');
const logger = require('./middleware/logger.js');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send ('Servidor de la tarea Node.js funcionando');
});

app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});