// SET UP
const provinceData = require('../../data/province');
const userData = require('../../data/user');

// ERROR
const { newError } = require('../../util/error');

// redirection
async function redirection(req, res, next) {
	try {
		// collect data
		return res.redirect(
			req.baseUrl +
				'/' +
				req.params.id +
				'/tableau-de-bord/population-cible'
		);
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// SETTINGS
async function changePassword(req, res, next) {
	try {
		// collect data
		var data = {};
		// get the document
		data.document = await provinceData.getDocument(req.params.id);
		// render the page
		res.status(200).render('province/changePassword', {
			title: data.document.province + ' | Changer le mot de passe',
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
		var currentUser = await provinceData.getDocument(req.params.id);
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

module.exports = {
	redirection,
	changePassword,
	checkOldPassword,
	updatePassword,
};
