// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/pdrVisite');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD MALADIE DEPISTE
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/pdr-visite')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.pdrVisite,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addPdrVisite,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);
	
// EDIT 
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/pdr-visite/:pdrVisite'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getPdrVisite,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editPdrVisite,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
