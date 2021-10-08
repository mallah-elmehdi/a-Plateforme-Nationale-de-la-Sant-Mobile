// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/planificationFamiliale');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD MALADIE DEPISTE
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/planification-familiale')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.planificationFamiliale,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addPlanificationFamiliale,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);
	
// EDIT MALADIE DEPISTE
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/planification-familiale/:planificationFamiliale'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getPlanificationFamiliale,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editPlanificationFamiliale,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
