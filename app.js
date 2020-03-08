const express = require('express');
const app = express();
const morgan = require('morgan');

// Import routes
const productRoutes = require('./api/v1/routes/products');
const orderRoutes = require('./api/v1/routes/orders');

// Funnel all requests through morgan logger
app.use(morgan('dev'));
// Request handlers
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
