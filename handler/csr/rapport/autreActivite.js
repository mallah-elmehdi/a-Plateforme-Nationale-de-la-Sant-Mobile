// SET UP
const csrData = require('../../../data/csr/csr');
const autreActiviteData = require('../../../data/csr/rapport/autreActivite');
const { autreActiviteForm } = require('../util');

// REDIRECT
async function redirectTodata(req, res, next) {
	try {
		var document = await autreActiviteData.getAutreActiviteBySortie(
			req.params.sortie
		);
		if (document) return res.redirect(req.originalUrl + '/' + document.id);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// REDIRECT
async function redirect(req, res, next) {
	try {
		return res.redirect('..');
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// FORM PAGE
async function autreActivite(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// render the page
		return res.status(200).render('csr/rapport/addAutreActivite', {
			// title
			title:
				data.document.csr +
				' | Autre activités | Trimestre ' +
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
			form: autreActiviteForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// GET
async function getAutreActivite(req, res, next) {
	try {
		// variables
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre);
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the document
		data.autreActivite = await autreActiviteData.getAutreActiviteById(
			req.params.autreActivite
		);
		// render the page
		return res.status(200).render('csr/rapport/addAutreActivite', {
			// title
			title:
				data.document.csr +
				' | Autre activités | Trimestre ' +
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
			form: autreActiviteForm,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD
async function addAutreActivite(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					autreActivite: await autreActiviteData.addAutreActivite(
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
async function editAutreActivite(req, res, next) {
	try {
		await autreActiviteData.editAutreActiviteById(
			req.params.autreActivite,
			req.body
		);
		return res.redirect(req.originalUrl);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE
async function deleteAutreActivite(req, res, next) {
	try {
		await autreActiviteData.deleteAutreActiviteById(
			res.locals.sortie.deleted.autreActivite
		);
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// IGNORE
async function ignoreAutreActivite(req, res, next) {
	try {
		res.locals = {
			sortie: {
				body: {
					autreActivite: await autreActiviteData.ignoreAutreActivite(
						req.params.id,
						req.params.trimestre,
						req.params.sortie
					)
				},
			},
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ---------- activity

// ADD ACTIVITY
function addActivity(req, res, next) {
	try {
		// edit body
		req.body = {
			$push: req.body,
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// EDIT ACTIVITY
async function editActivity(req, res, next) {
	try {
		// edit
		await autreActiviteData.editActivityById(
			req.params.autreActivite,
			req.query.id,
			req.body
		);
		// notif
		req.flash('succ', 'Informations ajoutées avec succès');
		// redirect
		return res.redirect(
			req.baseUrl +
				'/' +
				req.params.id +
				'/trimestre/' +
				req.params.trimestre +
				'/sortie/' +
				req.params.sortie +
				'/autre-activite'
		);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

async function deleteActivity(req, res, next) {
	try {
		// edit
		await autreActiviteData.deleteActivityById(
			req.params.autreActivite,
			req.query.id
		);
		// notif
		req.flash('succ', 'Informations supprimées avec succès');
		// redirect
		return res.redirect(
			req.baseUrl +
				'/' +
				req.params.id +
				'/trimestre/' +
				req.params.trimestre +
				'/sortie/' +
				req.params.sortie +
				'/autre-activite'
		);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	redirect,
	redirectTodata,
	autreActivite,
	addAutreActivite,
	getAutreActivite,
	editAutreActivite,
	deleteAutreActivite,
	ignoreAutreActivite,
	// ---------- activity
	addActivity,
	editActivity,
	deleteActivity,
};
