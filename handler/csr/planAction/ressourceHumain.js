// SET UP
const csrData = require('../../../data/csr/csr');
const ressourceHumainData = require('../../../data/csr/planAction/ressourceHumain');
const { ressourceHumainForm } = require('../util');

// ADD RESSOURCE HUMAIN FORM
async function addRessourceHumain(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the cs
		data.document = await csrData.getDocument(req.params.id);
		// get the ressourceHumain of this year
		data.ressourceHumain =
			await ressourceHumainData.getRessourceHumainByCsr(req.params.id);
		// render the page
		return res.status(200).render('csr/planAction/addRessourceHumain', {
			title:
				data.document.csr +
				' | Ressources humaines à mobiliser | ' +
				today.getFullYear(),
			url: req.originalUrl,
			form: ressourceHumainForm,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD RESSOURCE HUMAIN TO THE DATABASE
async function addRessourceHumainData(req, res, next) {
	try {
		res.locals = {
			body: {
				ressourceHumain:
					await ressourceHumainData.addUpdateRessourceHumain(
						req.body,
						req.params.id,
						req.query.id
					),
			},
			url: req.baseUrl + '/' + req.params.id + '/add-ressource-humain',
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	addRessourceHumain,
	addRessourceHumainData,
};
