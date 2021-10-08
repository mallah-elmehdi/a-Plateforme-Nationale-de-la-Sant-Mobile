// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/maladieDepiste');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD MALADIE DEPISTE
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/maladie-depiste')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.maladieDepiste,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addMaladieDepiste,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);
	
// EDIT MALADIE DEPISTE
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/maladie-depiste/:maladieDepiste'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getMaladieDepiste,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editMaladieDepiste,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
