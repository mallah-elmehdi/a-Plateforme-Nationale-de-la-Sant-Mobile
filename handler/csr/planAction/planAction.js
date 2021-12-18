// SET UP
const csrData = require('../../../data/csr/csr');
const planActionData = require('../../../data/csr/planAction/planAction');

// GET
async function planAction(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get whole plan action
		data.planAction = await planActionData.getPlanActionByCsr(
			req.params.id
		);
		// render the page
		res.status(200).render('csr/planAction/planAction', {
			title:
				data.document.csr + " | Plan d'action | " + today.getFullYear(),
			url: req.originalUrl,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// PLAN ACTION DEADLINE
async function planActionDead(req, res, next) {
	try {
		var today = new Date();
		if (today.getMonth() != 11) {
			req.flash(
				'err',
				"la date limite pour remplir le plan d'action est déjà passée"
			);
			return res.redirect(
				req.baseUrl + '/' + req.params.id + '/plan-action'
			);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// SUBMITED PLANACTION
async function planActionSubmited(req, res, next) {
	try {
		var planAction = await planActionData.getPlanActionSubmitedByCsr(
			req.params.id
		);
		if (planAction) {
			req.flash('err', "Vous avez déjà soumis le plan d'action");
			return res.redirect(req.baseUrl);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD DATA TO PLAN ACTION
async function addDataToPlanAction(req, res, next) {
	try {
		if (!req.query.id) {
			await planActionData.addDataToPlanAction(
				req.params.id,
				res.locals.body
			);
		}
		if (res.locals.delete) {
			req.flash('succ', 'Élément supprimé avec succès');
		}else {
			req.flash('succ', 'Informations ajoutées avec succès');
		}
		// send data
		return res.redirect(res.locals.url);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// YOU CAN SUBMIT THE PLANACTION
async function planActionReadySubmit(req, res, next) {
	try {
		// get the plan action
		var planAction = await planActionData.getPlanActionByCsr(req.params.id);
		if (
			!planAction.population ||
			!planAction.programme.length ||
			!planAction.ressource ||
			!planAction.ressourceHumain
		) {
			req.flash(
				'err',
				"Veuillez remplir tout le plan d'action avant de le soumettre"
			);
			return res.redirect(
				req.baseUrl + '/' + req.params.id + '/plan-action'
			);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// SUBMIT
async function submitPlanAction(req, res, next) {
	try {
		await planActionData.submitPlanAction(req.params.id);
		req.flash('succ', "Votre plan d'action a été soumis avec succès");
		return res.redirect(req.baseUrl + '/' + req.params.id);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// NONE SUBMITED PLANACTION
async function planActionNotSubmited(req, res, next) {
	try {
		var planAction = await planActionData.getPlanActionSubmitedByCsr(
			req.params.id
		);
		if (!planAction) {
			req.flash('err', "Veuillez soumettre le plan d'action avant d'ajouter le rapport de la sortie");
			return res.redirect(req.baseUrl);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}


// OUTPUT
module.exports = {
	planAction,
	planActionDead,
	planActionSubmited,
	addDataToPlanAction,
	planActionReadySubmit,
	submitPlanAction,
	planActionNotSubmited
};
