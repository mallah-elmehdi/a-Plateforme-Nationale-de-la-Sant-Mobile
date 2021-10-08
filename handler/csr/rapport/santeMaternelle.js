// SET UP
const csrData = require('../../../data/csr/csr');
const santeMaternelleData = require('../../../data/csr/rapport/santeMaternelle');
const { santeMaternelleForm } = require('../util');

async function redirectTodata(req, res, next) {
	try {
		var document = await santeMaternelleData.getSanteMaternelleBySortie(
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
async function santeMaternelle(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addSanteMaternelle', {
			// title
			title:
				data.document.csr +
				' | Santé maternelle | Trimestre ' +
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
			form: santeMaternelleForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getSanteMaternelle(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.santeMaternelle = await santeMaternelleData.getSanteMaternelleById(
			req.params.santeMaternelle,
		);
		// render the page
		return res.status(200).render('csr/rapport/addSanteMaternelle', {
			// title
			title:
				data.document.csr +
				' | Santé maternelle | Trimestre ' +
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
			form: santeMaternelleForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addSanteMaternelle(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					santeMaternelle:
						await santeMaternelleData.addSanteMaternelle(
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
async function editSanteMaternelle(req, res, next) {
	try {
		await santeMaternelleData.editSanteMaternelleById(
			req.params.santeMaternelle,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deleteSanteMaternelle(req, res, next) {
	try {
		await santeMaternelleData.deleteSanteMaternelleById(
			res.locals.sortie.deleted.santeMaternelle,
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
	santeMaternelle,
	addSanteMaternelle,
	getSanteMaternelle,
	editSanteMaternelle,
	deleteSanteMaternelle,
};
