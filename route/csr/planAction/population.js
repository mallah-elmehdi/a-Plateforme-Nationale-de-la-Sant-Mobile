// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/planAction/population');
const planActionHandler = require('../../../handler/csr/planAction/planAction');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// POPULATION
router
	.route('/:id/add-population')
	.get(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addPopulation,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addPopulationData,
		planActionHandler.addDataToPlanAction,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router