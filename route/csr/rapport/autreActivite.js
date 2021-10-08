// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/autreActivite');
const sortieHandler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// GET
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/autre-activite')
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.autreActivite,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.redirectTodata,
		handler.addAutreActivite,
		sortieHandler.addDataToSortie,
		errorHandler.throwError
	);

// IGNORE
router
	.route('/:id/trimestre/:trimestre/sortie/:sortie/autre-activite/ignore')
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.ignoreAutreActivite,
		errorHandler.throwError
	);

// ADD
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/autre-activite/:autreActivite'
	)
	.get(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.getAutreActivite,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.addActivity,
		handler.editAutreActivite,
		errorHandler.throwError
	);

// ---------------- ACTIVITY

// EDIT
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/autre-activite/:autreActivite/edit'
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.editActivity,
		errorHandler.throwError
	);

// DELETE
router
	.route(
		'/:id/trimestre/:trimestre/sortie/:sortie/autre-activite/:autreActivite/delete'
	)
	.post(
		authHandler.protector,
		trimestreHandler.trimestreUrl,
		// trimestreHandler.trimestreDead,
		sortieHandler.sortieSubmited,
		handler.deleteActivity,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;