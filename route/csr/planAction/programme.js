// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/planAction/programme');
const planActionHandler = require('../../../handler/csr/planAction/planAction');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// ADD PROGRAMME
router
	.route('/:id/add-programme')
	.get(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addProgramme,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.addProgrammeData,
		planActionHandler.addDataToPlanAction,
		errorHandler.throwError
	);

// DELETE PROGRAMME
router
	.route('/:id/add-programme/delete/:pid')
	.post(
		authHandler.protector,
		planActionHandler.planActionDead,
		planActionHandler.planActionSubmited,
		handler.deleteProgramme,
		planActionHandler.addDataToPlanAction,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
