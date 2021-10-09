// SET UP
const csrData = require('../../data/csr/csr');
const userData = require('../../data/user');

// DASHBOARD
async function redirection(req, res, next) {
	try {
		return res.redirect(req.originalUrl + '/plan-action');
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// SETTINGS
async function changePassword(req, res, next) {
	try {
		// collect data
		var data = {};
		// get the document
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		res.status(200).render('csr/changePassword', {
			title: data.document.csr + ' | Changer le mot de passe',
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// check the old passord
async function checkOldPassword(req, res, next) {
	try {
		// get the document
		var currentUser = await csrData.getDocument(req.params.id);
		// get the candidate
		var candidate = await userData.getUserByEmailAndPassword(
			currentUser.email,
			req.body.oldPassword
		);
		// check the candidate
		if (!candidate) {
			req.flash('err', 'L’ancien mot de passe est incorrect');
			return res.redirect(req.originalUrl);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// update the password
async function updatePassword(req, res, next) {
	try {
		// change the password
		await userData.updatePassword(req.params.id, req.body.newPassword);
		// check the candidate
		req.flash('succ', 'Le mot de passe a été mis à jour avec succès');
		return res.redirect('/sign-out');
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	redirection,
	changePassword,
	checkOldPassword,
	updatePassword,
};
