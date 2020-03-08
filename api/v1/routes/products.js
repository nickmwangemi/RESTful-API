const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests to /products',
	});
});

// POST a product
router.post('/', (req, res, next) => {
	const product = {
		name: req.body.name,
		price: req.body.price,
	};
	res.status(201).json({
		message: 'Handling POST requests to /products',
		createdProduct: product,
	});
});

// GET a product
router.get('/:productId', (req, res, next) => {
	// Extract product ID from request
	const id = req.params.productId;
	if (id === 'special') {
		res.status(200).json({
			message: "Here's the product with the special ID",
			id: id,
		});
	} else {
		res.status(200).json({
			message: 'You passed an ID',
		});
	}
});

// PATCH (Update) a product
router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated Product!',
	});
});

// DELETE a product
router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'Deleted product',
	});
});

module.exports = router;
