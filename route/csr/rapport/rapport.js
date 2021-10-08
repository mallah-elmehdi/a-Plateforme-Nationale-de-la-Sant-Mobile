// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/rapport');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// GET
router
	.route('/:id/rapport')
	.get(authHandler.protector, handler.rapport, errorHandler.throwError);

// OUTPUT
module.exports = router;
