// SET UP
const csrData = require('../../../data/csr/csr');
const trimestreData = require('../../../data/csr/rapport/trimestre');
const trimestreClass = require('../../../class/trimestre');
const rapportData = require('../../../data/csr/rapport/rapport');
const pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');
const programmeData = require('../../../data/csr/planAction/programme');

// CHECK THE TRIMESTTRE URL
function trimestreUrl(req, res, next) {
	try {
		if (
			req.params.trimestre != '1' &&
			req.params.trimestre != '2' &&
			req.params.trimestre != '3' &&
			req.params.trimestre != '4'
		) {
			return res
				.status(400)
				.redirect(req.baseUrl + '/' + req.params.id + '/rapport');
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}
// TAUX DE COVERTURE DES PDRs
async function coverturePdr(trimestre, csr) {
	try {
		// get all the pdr programme
		const programme = await programmeData.getProgrammeByCsr(csr);
		// get all pdr visite
		const pdrVisite = await pdrVisiteData.getPdrVisiteByCsrAndTrimestre(
			csr,
			trimestre
		);
		// variable for calculation
		var objOut = {
			pdr: [],
			tauxCover: 0,
		};
		// loop on all pdr
		for (let i = 0; i < programme.length; i++) {
			// pdr element
			const programmeElement = programme[i];
			// init pdr element and push to array
			objOut.pdr[i] = {
				id: programmeElement.id,
				pdr: programmeElement.pdr,
				sortieProgramme: programmeElement['t' + trimestre],
				sortieEffectue: {
					total: 0,
					observation: [],
				},
			};
			// loop on all pdr visite
			for (let j = 0; j < pdrVisite.length; j++) {
				const pdrVisiteElement = pdrVisite[j];
				if (programmeElement.id === pdrVisiteElement.pdrVisite.id) {
					objOut.pdr[i].sortieEffectue.total++;
					objOut.pdr[i].sortieEffectue.observation.push(
						pdrVisiteElement.observation.length
							? pdrVisiteElement.observation
							: 'Aucune'
					);
				}
			}
			objOut.tauxCover += Math.ceil(
				parseFloat(
					(objOut.pdr[i].sortieEffectue.total /
						objOut.pdr[i].sortieProgramme) *
						100
				)
			);
		}
		objOut.tauxCover = Math.ceil(
			parseFloat(objOut.tauxCover / objOut.pdr.length)
		);
		return objOut;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
// GET RAPPORT OF TRIMESTTRE
async function trimestre(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date(),
			trimestre = parseInt(req.params.trimestre),
			global = new trimestreClass.GlobalTable();
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get trimestre
		data.trimestre = await trimestreData.getTrimestreByCsr(
			req.params.id,
			trimestre
		);
		// pdr visite
		data.pdrVisite = await coverturePdr(trimestre, req.params.id);
		// render the page
		res.status(200).render('csr/rapport/trimestre', {
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
			// get global table
			pdrVisite:
				data.trimestre && data.trimestre.sortie.length
					? global.globalPdrVisite(
							data.trimestre.sortie,
							data.pdrVisite.pdr
					  )
					: null,
			populationCible:
				data.trimestre && data.trimestre.sortie.length
					? global.globalPopulationCible(data.trimestre.sortie)
					: null,
			ressourceHumainMobile:
				data.trimestre && data.trimestre.sortie.length
					? global.globalRessourceHumainMobile(data.trimestre.sortie)
					: null,
			santeMaternelle:
				data.trimestre && data.trimestre.sortie.length
					? global.globalSanteMaternelle(data.trimestre.sortie)
					: null,
			santeInfantile:
				data.trimestre && data.trimestre.sortie.length
					? global.globalSanteInfantile(data.trimestre.sortie)
					: null,
			planificationFamiliale:
				data.trimestre && data.trimestre.sortie.length
					? global.globalPlanificationFamiliale(data.trimestre.sortie)
					: null,
			santeScolaire:
				data.trimestre && data.trimestre.sortie.length
					? global.globalSanteScolaire(data.trimestre.sortie)
					: null,
			consultationMedical:
				data.trimestre && data.trimestre.sortie.length
					? global.globalConsultationMedical(data.trimestre.sortie)
					: null,
			detectionPrecoceCancer:
				data.trimestre && data.trimestre.sortie.length
					? global.globalDetectionPrecoceCancer(data.trimestre.sortie)
					: null,
			maladieDepiste:
				data.trimestre && data.trimestre.sortie.length
					? global.globalMaladieDepiste(data.trimestre.sortie)
					: null,
			autreActivite:
				data.trimestre && data.trimestre.sortie.length
					? global.globalAutreActivite(data.trimestre.sortie)
					: null,
			// couverture pdr
			tauxCoverturePdr: data.pdrVisite.tauxCover,
			// data
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// THE TRIMESTTRE DEADLINE
function trimestreDead(req, res, next) {
	try {
		// variables
		var today = new Date(),
			month = today.getMonth(),
			DeadTrimestre,
			trimestre;
		// get the trimestre
		trimestre = parseInt(req.params.trimestre);
		// get the dead line trimestre
		if (month < 2) {
			DeadTrimestre = 1;
		} else if (month < 5) {
			DeadTrimestre = 2;
		} else if (month < 8) {
			DeadTrimestre = 3;
		} else {
			DeadTrimestre = 4;
		}
		// output
		if (DeadTrimestre > trimestre) {
			req.flash(
				'err',
				'La date limite de remplissage du rapport de sortie du trimestre ' +
					trimestre +
					' est dépassée'
			);
			return res
				.status(401)
				.redirect(
					req.baseUrl +
						'/' +
						req.params.id +
						'/trimestre/' +
						trimestre
				);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}
// ADD TO THE TRIMESTRE
async function addDataToTrimestre(req, res, next) {
	try {
		// add trimestre
		await trimestreData.addDataToTrimestre(
			req.params.id,
			parseInt(req.params.trimestre),
			res.locals.trimestre.body
		);
		// send data
		return res.redirect(
			'/csr/' +
				req.params.id +
				'/trimestre/' +
				req.params.trimestre +
				'/sortie/' +
				res.locals.trimestre.body['$addToSet'].sortie
		);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// SUBMIT
async function editTrimestre(req, res, next) {
	try {
		await trimestreData.editTrimestreByCsr(
			req.params.id,
			req.params.trimestre,
			res.locals.sortie.deleted.id
		);
		// redirect to rapport page
		req.flash('succ', 'Le rapport de la sortie a été supprimé avec succès.');
		return res.redirect(
			req.baseUrl +
				'/' +
				req.params.id +
				'/trimestre/' +
				req.params.trimestre
		);
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	trimestreUrl,
	trimestre,
	trimestreDead,
	addDataToTrimestre,
	editTrimestre,
};
