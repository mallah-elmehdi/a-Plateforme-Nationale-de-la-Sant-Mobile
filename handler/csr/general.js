// SET UP
const csrData = require('../../data/csr/csr');

// DASHBOARD
async function redirection(req, res, next) {
	try {
		return res.redirect(req.originalUrl + '/plan-action')
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
		// get the document of the central
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

// OUTPUT
module.exports = {
	redirection,
	changePassword,
};
