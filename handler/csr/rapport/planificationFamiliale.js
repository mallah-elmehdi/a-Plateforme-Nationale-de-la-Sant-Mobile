// SET UP
const csrData = require('../../../data/csr/csr');
const planificationFamilialeData = require('../../../data/csr/rapport/planificationFamiliale');
const { planificationFamilialeForm } = require('../util');

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document =
			await planificationFamilialeData.getPlanificationFamilialeBySortie(
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
async function planificationFamiliale(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addPlanificationFamiliale', {
			// title
			title:
				data.document.csr +
				' | Planification familiale | Trimestre ' +
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
			form: planificationFamilialeForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getPlanificationFamiliale(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.planificationFamiliale = await planificationFamilialeData.getPlanificationFamilialeById(
			req.params.planificationFamiliale,
		);
		// render the page
		return res.status(200).render('csr/rapport/addPlanificationFamiliale', {
			// title
			title:
				data.document.csr +
				' | Planification familiale | Trimestre ' +
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
			form: planificationFamilialeForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addPlanificationFamiliale(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					planificationFamiliale:
						await planificationFamilialeData.addPlanificationFamiliale(
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
async function editPlanificationFamiliale(req, res, next) {
	try {
		await planificationFamilialeData.editPlanificationFamilialeById(
			req.params.planificationFamiliale,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deletePlanificationFamiliale(req, res, next) {
	try {
		await planificationFamilialeData.deletePlanificationFamilialeById(
			res.locals.sortie.deleted.planificationFamiliale,
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
	planificationFamiliale,
	addPlanificationFamiliale,
	getPlanificationFamiliale,
	editPlanificationFamiliale,
	deletePlanificationFamiliale,
};
