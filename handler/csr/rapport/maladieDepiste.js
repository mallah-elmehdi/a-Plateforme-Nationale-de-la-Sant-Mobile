// SET UP
const csrData = require('../../../data/csr/csr');
const maladieDepisteData = require('../../../data/csr/rapport/maladieDepiste');
const { maladieDepisteForm } = require('../util');

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document = await maladieDepisteData.getMaladieDepisteBySortie(
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
async function maladieDepiste(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addMaladieDepiste', {
			// title
			title:
				data.document.csr +
				' | Maladies dépistées | Trimestre ' +
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
			form: maladieDepisteForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getMaladieDepiste(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.maladieDepiste = await maladieDepisteData.getMaladieDepisteById(
			req.params.maladieDepiste,
		);
		// render the page
		return res.status(200).render('csr/rapport/addMaladieDepiste', {
			// title
			title:
				data.document.csr +
				' | Maladies dépistées | Trimestre ' +
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
			form: maladieDepisteForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addMaladieDepiste(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					maladieDepiste: await maladieDepisteData.addMaladieDepiste(
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
async function editMaladieDepiste(req, res, next) {
	try {
		 await maladieDepisteData.editMaladieDepisteById(
			req.params.maladieDepiste,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deleteMaladieDepiste(req, res, next) {
	try {
		await maladieDepisteData.deleteMaladieDepisteById(
			res.locals.sortie.deleted.maladieDepiste,
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
	maladieDepiste,
	addMaladieDepiste,
	getMaladieDepiste,
	editMaladieDepiste,
	deleteMaladieDepiste,
};
