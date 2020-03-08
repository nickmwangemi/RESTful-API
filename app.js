const express = require('express');
const app = express();

// Import routes
const productRoutes = require('./api/v1/routes/products');
const orderRoutes = require('./api/v1/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
