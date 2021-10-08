// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/detectionPrecoceCancer');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD 
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/detection-precoce-cancer')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.detectionPrecoceCancer,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addDetectionPrecoceCancer,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);
	
// EDIT 
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/detection-precoce-cancer/:detectionPrecoceCancer'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getDetectionPrecoceCancer,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editDetectionPrecoceCancer,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
