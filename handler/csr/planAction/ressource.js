// SET UP
const csrData = require('../../../data/csr/csr');
const ressourceData = require('../../../data/csr/planAction/ressource');
const { ressourceForm } = require('../util');

// ADD RESSOURCE
async function addRessource(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the cs
		data.document = await csrData.getDocument(req.params.id);
		// get the ressource of this year
		data.ressource = await ressourceData.getRessourceByCsr(req.params.id);
		// render the page
		return res.status(200).render('csr/planAction/addRessource', {
			title:
				data.document.csr +
				' | Situation des moyens de mobilité | ' +
				today.getFullYear(),
			url: req.originalUrl,
			form: ressourceForm,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// ADD RESSOURCE TO THE DATABASE
async function addRessourceData(req, res, next) {
	try {
		res.locals = {
			body: {
				ressource: await ressourceData.addUpdateRessource(
					req.body,
					req.params.id,
					req.query.id
				),
			},
			url: req.baseUrl + '/' + req.params.id + '/add-ressource',
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	addRessource,
	addRessourceData,
};
