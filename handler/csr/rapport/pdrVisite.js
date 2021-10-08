// SET UP
const csrData = require('../../../data/csr/csr');
const pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');
const programmeData = require('../../../data/csr/planAction/programme');
const { pdrVisiteForm } = require('../util');

// pdrVisite
async function pdrVisite(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the data of pdrs
		data.pdr = await programmeData.getProgrammeByCsr(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addPdrVisite', {
			// title
			title:
				data.document.csr +
				' | Point de rassemblement (PDR) visité | Trimestre ' +
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
			form: pdrVisiteForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// ADD pdrVisite
async function addPdrVisite(req, res, next) {
	try {
		// data for the sortie
		res.locals = {
			sortie: {
				body: {
					pdrVisite: await pdrVisiteData.addPdrVisite(
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

// GET PdrVisite
async function getPdrVisite(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.pdrVisite = await pdrVisiteData.getPdrVisiteById(
			req.params.pdrVisite
		);
		// get the data of pdrs
		data.pdr = await programmeData.getProgrammeByCsr(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addPdrVisite', {
			// title
			title:
				data.document.csr +
				' | Point de rassemblement (PDR) visité | Trimestre ' +
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
			form: pdrVisiteForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// EDIT
async function editPdrVisite(req, res, next) {
	try {
		await pdrVisiteData.editPdrVisiteById(
			req.params.pdrVisite,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document = await pdrVisiteData.getPdrVisiteBySortie(
			req.params.sortie,
		);
		if (document)
			return res.redirect(req.originalUrl + '/' + document.id)
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deletePdrVisite(req, res, next) {
	try {
		await pdrVisiteData.deletePdrVisiteById(
			res.locals.sortie.deleted.pdrVisite,
		);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// OUTPUT
module.exports = {
	pdrVisite,
	addPdrVisite,
	getPdrVisite,
	editPdrVisite,
	redirectTodata,
	deletePdrVisite,
};
