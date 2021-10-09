// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../handler/csr/general');
const utilHandler = require('../../handler/util');
const authHandler = require('../../handler/auth');
const errorHandler = require('../../handler/error');

// REDIRECT TO PROFILE
router.route('/').get(utilHandler.redirect, errorHandler.throwError);

// REDIRECT TO PLAN ACTION
router
	.route('/:id')
	.get(authHandler.protector, handler.redirection, errorHandler.throwError);

// SETTINGS
router
	.route('/:id/changer-le-mot-de-passe')
	.get(authHandler.protector, handler.changePassword, errorHandler.throwError)
	.post(
		authHandler.protector,
		handler.checkOldPassword,
		handler.updatePassword,
		errorHandler.throwError
	);

// OUTPUT
module.exports = router;
