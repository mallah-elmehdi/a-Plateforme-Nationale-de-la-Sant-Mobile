// SET UP
const csrData = require('../../../data/csr/csr');
const consultationMedicalData = require('../../../data/csr/rapport/consultationMedical');
const { consultationMedicalForm } = require('../util');

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document =
			await consultationMedicalData.getConsultationMedicalBySortie(
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
async function consultationMedical(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addConsultationMedical', {
			// title
			title:
				data.document.csr +
				' | Consultations médicales | Trimestre ' +
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
			form: consultationMedicalForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getConsultationMedical(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.consultationMedical =
			await consultationMedicalData.getConsultationMedicalById(
				req.params.consultationMedical
			);
		// render the page
		return res.status(200).render('csr/rapport/addConsultationMedical', {
			// title
			title:
				data.document.csr +
				' | Consultations médicales | Trimestre ' +
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
			form: consultationMedicalForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addConsultationMedical(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					consultationMedical:
						await consultationMedicalData.addConsultationMedical(
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
async function editConsultationMedical(req, res, next) {
	try {
		await consultationMedicalData.editConsultationMedicalById(
			req.params.consultationMedical,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE 
async function deleteConsultationMedical(req, res, next) {
	try {
		await consultationMedicalData.deleteConsultationMedicalById(
			res.locals.sortie.deleted.consultationMedical,
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
	consultationMedical,
	addConsultationMedical,
	getConsultationMedical,
	editConsultationMedical,
	deleteConsultationMedical
};
