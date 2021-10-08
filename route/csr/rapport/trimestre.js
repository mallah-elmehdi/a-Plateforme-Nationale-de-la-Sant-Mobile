// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// GET
router
	.route('/:id/trimestre/:trimestre')
	.get(
		authHandler.protector,
		handler.trimestreUrl,
		handler.trimestre,
		errorHandler.throwError
	);
// // SUBMIT
// router
// 	.route('/:id/trimestre/:trimestre/submit')
// 	.post(
// 		authHandler.protector,
// 		handler.trimestreUrl,
// 		handler.trimestreDead,
// 		handler.submitedTrimestre,
// 		handler.readySubmitTrimestre,
// 		handler.submitTrimestre,
// 		errorHandler.throwError
// 	);

// OUTPUT
module.exports = router;
