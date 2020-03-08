const express = require('express');
const router = express.Router();

// GET all orders
router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Orders were fetched',
	});
});

// POST an order
router.post('/', (req, res, next) => {
	const order = {
		productId: req.body.productId,
		quantity: req.body.quantity,
	};
	res.status(201).json({
		message: 'An order was created',
		createdOrder: order,
	});
});

// GET an order
router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Order details',
		orderId: req.params.orderId, // Extract order ID from request
	});
});

// DELETE an order
router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Order deleted',
		orderId: req.params.orderId,
	});
});

module.exports = router;
