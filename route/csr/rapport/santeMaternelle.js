// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/santeMaternelle');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD MALADIE DEPISTE
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/sante-maternelle')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.santeMaternelle,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addSanteMaternelle,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);
	
// EDIT MALADIE DEPISTE
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/sante-maternelle/:santeMaternelle'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getSanteMaternelle,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editSanteMaternelle,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
