// SET UP
const csrData = require('../../../data/csr/csr');
const populationCibleData = require('../../../data/csr/rapport/populationCible');
const { populationCibleForm } = require('../util');

// FORM PAGE
async function populationCible(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addPopulationCible', {
			// title
			title:
				data.document.csr +
				' | Population ciblée par l’équipe mobile | Trimestre ' +
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
			form: populationCibleForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document = await populationCibleData.getPopulationCibleBySortie(
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
async function getPopulationCible(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.populationCible = await populationCibleData.getPopulationCibleById(
			req.params.populationCible
		);
		// render the page
		return res.status(200).render('csr/rapport/addPopulationCible', {
			// title
			title:
				data.document.csr +
				' | Population ciblée par l’équipe mobile | Trimestre ' +
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
			form: populationCibleForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addPopulationCible(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					populationCible:
						await populationCibleData.addPopulationCible(
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
async function editPopulationCible(req, res, next) {
	try {
		await populationCibleData.editPopulationCibleById(
			req.params.populationCible,
			req.body
		);
		// data for the sortie
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deletePopulationCible(req, res, next) {
	try {
		await populationCibleData.deletePopulationCibleById(
			res.locals.sortie.deleted.populationCible,
		);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	populationCible,
	redirectTodata,
	getPopulationCible,
	addPopulationCible,
	editPopulationCible,
	deletePopulationCible,
};
