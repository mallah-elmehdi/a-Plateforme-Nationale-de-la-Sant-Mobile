// SET UP
const csrData = require('../../../data/csr/csr');
const santeScolaireData = require('../../../data/csr/rapport/santeScolaire');
const { santeScolaireForm } = require('../util');

async function redirectTodata(req, res, next) {
	try {
		var document = await santeScolaireData.getSanteScolaireBySortie(
			req.params.sortie
		);
		if (document) return res.redirect(req.originalUrl + '/' + document.id);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// FORM PAGE
async function santeScolaire(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addSanteScolaire', {
			// title
			title:
				data.document.csr +
				' | Santé scolaire | Trimestre ' +
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
			form: santeScolaireForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getSanteScolaire(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.santeScolaire = await santeScolaireData.getSanteScolaireById(
			req.params.santeScolaire
		);
		// render the page
		return res.status(200).render('csr/rapport/addSanteScolaire', {
			// title
			title:
				data.document.csr +
				' | Santé scolaire | Trimestre ' +
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
			form: santeScolaireForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addSanteScolaire(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					santeScolaire: await santeScolaireData.addSanteScolaire(
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
async function editSanteScolaire(req, res, next) {
	try {
		await santeScolaireData.editSanteScolaireById(
			req.params.santeScolaire,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deleteSanteScolaire(req, res, next) {
	try {
		await santeScolaireData.deleteSanteScolaireById(
			res.locals.sortie.deleted.santeScolaire,
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
	santeScolaire,
	addSanteScolaire,
	getSanteScolaire,
	editSanteScolaire,
	deleteSanteScolaire,
};
