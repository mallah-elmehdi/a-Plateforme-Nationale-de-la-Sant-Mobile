// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/planAction/ressource');
const planActionHandler = require('../../../handler/csr/planAction/planAction');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD RESSOURCE FORM
router
	.route('/:id/add-ressource')
	.get(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addRessource,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addRessourceData,
		planActionHandler.addDataToPlanAction,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
