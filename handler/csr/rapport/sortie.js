// SET UP
const csrData = require('../../../data/csr/csr');
const sortieData = require('../../../data/csr/rapport/sortie');
const rapportData = require('../../../data/csr/rapport/rapport');

// ADD
async function newSortie(req, res, next) {
	try {
		res.locals = {
			trimestre: {
				body: {
					$addToSet: {
						sortie: await sortieData.newSortie(
							req.params.id,
							parseInt(req.params.trimestre)
						),
					},
				},
			},
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function sortie(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the sortie
		data.sortie = await sortieData.getSortieById(req.params.sortie);
		// render the page
		res.status(200).render('csr/rapport/sortie', {
			// page title
			title:
				data.document.csr +
				' | Rapport des activités des Unités Médical Mobile (UMM) - Trimestre ' +
				trimestre +
				' | ' +
				today.getFullYear(),
			// trimestre
			trimestre,
			// url
			url: req.originalUrl,
			// whole data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// SUBMIT
async function sortieSubmited(req, res, next) {
	try {
		var sortieSubmited = await sortieData.getSortieSubmitedById(
			req.params.sortie
		);
		// redirect to rapport page
		if (sortieSubmited) {
			req.flash('err', 'Vous avez déjà soumis le rapport de sortie');
			return res
				.status(401)
				.redirect(
					req.baseUrl +
						'/' +
						req.params.id +
						'/trimestre/' +
						req.params.trimestre +
						'/sortie/' +
						req.params.sortie
				);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// SUBMIT
async function sortieReadyToSubmit(req, res, next) {
	try {
		var sortie = await sortieData.getSortieById(req.params.sortie);
		// redirect to rapport page
		if (
			!sortie.pdrVisite ||
			!sortie.populationCible ||
			!sortie.ressourceHumainMobile ||
			!sortie.santeMaternelle ||
			!sortie.santeInfantile ||
			!sortie.planificationFamiliale ||
			!sortie.santeScolaire ||
			!sortie.consultationMedical ||
			!sortie.detectionPrecoceCancer ||
			!sortie.maladieDepiste ||
			!sortie.autreActivite
		) {
			req.flash('err', 'Veuillez remplir tout le rapport de la sortie');
			return res
				.status(401)
				.redirect(
					req.baseUrl +
						'/' +
						req.params.id +
						'/trimestre/' +
						req.params.trimestre +
						'/sortie/' +
						req.params.sortie
				);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// SUBMIT
async function submitSortie(req, res, next) {
	try {
		await sortieData.submitSortieById(req.params.sortie);
		// redirect to rapport page
		req.flash('succ', 'Le rapport de la sortie a été soumis avec succès');
		return res
			.status(401)
			.redirect(
				req.baseUrl +
					'/' +
					req.params.id +
					'/trimestre/' +
					req.params.trimestre +
					'/sortie/' +
					req.params.sortie
			);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addDataToSortie(req, res, next) {
	try {
		await sortieData.addDataToSortie(
			req.params.sortie,
			res.locals.sortie.body
		);
		req.flash('succ', 'Informations ajoutées avec succès');
		// send data
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE
async function deleteSortie(req, res, next) {
	try {
		res.locals = {
			sortie: {
				deleted: await sortieData.deleteSortieById(req.params.sortie),
			},
		};
		return next()
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	newSortie,
	sortie,
	sortieSubmited,
	addDataToSortie,
	sortieReadyToSubmit,
	submitSortie,
	deleteSortie,
};
