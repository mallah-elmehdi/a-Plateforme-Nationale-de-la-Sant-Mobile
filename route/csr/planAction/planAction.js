// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/planAction/planAction');
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// VIEW
router
	.route('/:id/plan-action')
	.get(authHandler.protector, handler.planAction, errorHandler.throwError);

// SUBMIT
router.route('/:id/plan-action/submit').post(
	authHandler.protector,
	handler.planActionDead,
	handler.planActionReadySubmit,
	handler.planActionSubmited,
	handler.submitPlanAction,
	errorHandler.throwError
);

// OUTPUT
module.exports = router;
