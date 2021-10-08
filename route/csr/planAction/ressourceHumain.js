// --- SET UP
const express = require('express');
const router = express.Router();

// --- HANDLER
const handler = require('../../../handler/csr/planAction/ressourceHumain');
const planActionHandler = require('../../../handler/csr/planAction/planAction');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// RESSOURCE HUMAINE
router
	.route('/:id/add-ressource-humain')
	.get(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addRessourceHumain,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addRessourceHumainData,
		planActionHandler.addDataToPlanAction,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
