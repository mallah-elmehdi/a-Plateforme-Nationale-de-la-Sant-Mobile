// SET UP
const csrData = require('../../../data/csr/csr');
const ressourceHumainMobileData = require('../../../data/csr/rapport/ressourceHumainMobile');
const { ressourceHumainMobileForm } = require('../util');

// FORM PAGE
async function ressourceHumainMobile(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addRessourceHumainMobile', {
			// title
			title:
				data.document.csr +
				' | Ressources humaines mobilisées | Trimestre ' +
				trimestre +
				' | ' +
				today.getFullYear(),
			// url
			url: req.originalUrl,
			// trimestre
			trimestre,
			// sortie
			sortie: req.params.sortie,
			// form
			form: ressourceHumainMobileForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

async function redirectTodata(req, res, next) {
	try {
		var document =
			await ressourceHumainMobileData.getRessourceHumainMobileBySortie(
				req.params.sortie
			);
		if (document) return res.redirect(req.originalUrl + '/' + document.id);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getRessourceHumainMobile(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.ressourceHumainMobile = await ressourceHumainMobileData.getRessourceHumainMobileById(
			req.params.ressourceHumainMobile,
		);
		// render the page
		return res.status(200).render('csr/rapport/addRessourceHumainMobile', {
			// title
			title:
				data.document.csr +
				' | Ressources humaines mobilisées | Trimestre ' +
				trimestre +
				' | ' +
				today.getFullYear(),
			// url
			url: req.originalUrl,
			// trimestre
			trimestre,
			// sortie
			sortie: req.params.sortie,
			// form
			form: ressourceHumainMobileForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addRessourceHumainMobile(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					ressourceHumainMobile:
						await ressourceHumainMobileData.addRessourceHumainMobile(
							req.params.id,
							req.params.sortie,
							parseInt(req.params.trimestre),
							req.body
						),
				},
			},
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// EDIT
async function editRessourceHumainMobile(req, res, next) {
	try {
		await ressourceHumainMobileData.editRessourceHumainMobileById(
			req.params.ressourceHumainMobile,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deleteRessourceHumainMobile(req, res, next) {
	try {
		await ressourceHumainMobileData.deleteRessourceHumainMobileById(
			res.locals.sortie.deleted.ressourceHumainMobile,
		);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	redirectTodata,
	ressourceHumainMobile,
	addRessourceHumainMobile,
	getRessourceHumainMobile,
	editRessourceHumainMobile,
	deleteRessourceHumainMobile,
};
