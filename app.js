const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Import routes
const productRoutes = require('./api/v1/routes/products');
const orderRoutes = require('./api/v1/routes/orders');

// Funnel all requests through morgan logger
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Handle CORS errors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Headers', 'PUT,POST,PATCH,DELETE,GET');
		res.status(200).json({});
	}
	next();
});

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
