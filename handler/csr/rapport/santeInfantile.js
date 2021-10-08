// SET UP
const csrData = require('../../../data/csr/csr');
const santeInfantileData = require('../../../data/csr/rapport/santeInfantile');
const { santeInfantileForm } = require('../util');

async function redirectTodata(req, res, next) {
	try {
		var document = await santeInfantileData.getSanteInfantileBySortie(
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
async function santeInfantile(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addSanteInfantile', {
			// title
			title:
				data.document.csr +
				' | Santé infantile | Trimestre ' +
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
			form: santeInfantileForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getSanteInfantile(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.santeInfantile = await santeInfantileData.getSanteInfantileById(
			req.params.santeInfantile
		);
		// render the page
		return res.status(200).render('csr/rapport/addSanteInfantile', {
			// title
			title:
				data.document.csr +
				' | Santé infantile | Trimestre ' +
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
			form: santeInfantileForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addSanteInfantile(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					santeInfantile: await santeInfantileData.addSanteInfantile(
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
async function editSanteInfantile(req, res, next) {
	try {
		await santeInfantileData.editSanteInfantileById(
			req.params.santeInfantile,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deleteSanteInfantile(req, res, next) {
	try {
		await santeInfantileData.deleteSanteInfantileById(
			res.locals.sortie.deleted.santeInfantile,
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
	santeInfantile,
	addSanteInfantile,
	getSanteInfantile,
	editSanteInfantile,
	deleteSanteInfantile,
};
