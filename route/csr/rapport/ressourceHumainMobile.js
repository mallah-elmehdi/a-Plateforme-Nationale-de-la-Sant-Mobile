// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/ressourceHumainMobile');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD MALADIE DEPISTE
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/ressource-humain-mobile')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.ressourceHumainMobile,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addRessourceHumainMobile,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);
	
// EDIT MALADIE DEPISTE
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/ressource-humain-mobile/:ressourceHumainMobile'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getRessourceHumainMobile,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editRessourceHumainMobile,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
