// SET UP
const csrData = require('../../../data/csr/csr');
const detectionPrecoceCancerData = require('../../../data/csr/rapport/detectionPrecoceCancer');
const { detectionPrecoceCancerForm } = require('../util');

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document =
			await detectionPrecoceCancerData.getDetectionPrecoceCancerBySortie(
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
async function detectionPrecoceCancer(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addDetectionPrecoceCancer', {
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
			form: detectionPrecoceCancerForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getDetectionPrecoceCancer(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.detectionPrecoceCancer =
			await detectionPrecoceCancerData.getDetectionPrecoceCancerById(
				req.params.detectionPrecoceCancer
			);
		// render the page
		return res.status(200).render('csr/rapport/addDetectionPrecoceCancer', {
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
			form: detectionPrecoceCancerForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addDetectionPrecoceCancer(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					detectionPrecoceCancer:
						await detectionPrecoceCancerData.addDetectionPrecoceCancer(
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
async function editDetectionPrecoceCancer(req, res, next) {
	try {
		await detectionPrecoceCancerData.editDetectionPrecoceCancerById(
			req.params.detectionPrecoceCancer,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE
async function deleteDetectionPrecoceCancer(req, res, next) {
	try {
		await detectionPrecoceCancerData.deleteDetectionPrecoceCancerById(
			res.locals.sortie.deleted.detectionPrecoceCancer
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
	detectionPrecoceCancer,
	addDetectionPrecoceCancer,
	getDetectionPrecoceCancer,
	editDetectionPrecoceCancer,
	deleteDetectionPrecoceCancer,
};
