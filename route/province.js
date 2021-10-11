// --- SET UP
const express = require('express');
const router = express.Router();

// --- HAMDLER
const populationCible = require('../handler/province/dashboard/populationCible');
const ressource = require('../handler/province/dashboard/ressource');
const ressourceHumain = require('../handler/province/dashboard/ressourceHumain');
const pdrVisite = require('../handler/province/dashboard/pdrVisite');
const sortieRealise = require('../handler/province/dashboard/sortieRealise');
const santeMaternelle = require('../handler/province/dashboard/santeMaternelle');
const santeInfantile = require('../handler/province/dashboard/santeInfantile');
const planificationFamiliale = require('../handler/province/dashboard/planificationFamiliale');
const santeScolaire = require('../handler/province/dashboard/santeScolaire');
const detectionPrecoceCancer = require('../handler/province/dashboard/detectionPrecoceCancer');
const consultationMedical = require('../handler/province/dashboard/consultationMedical');
const maladieDepiste = require('../handler/province/dashboard/maladieDepiste');
const autreActivite = require('../handler/province/dashboard/autreActivite');
// ----
const planAction = require('../handler/province/planAction');
const rapport = require('../handler/province/rapport');
// ----
const generalHandler = require('../handler/province/general');
const utilHandler = require('../handler/util');
const authHandler = require('../handler/auth');
const errorHandler = require('../handler/error');
// -------------

// redirect to dashboard
router.route('/').get(utilHandler.redirect, errorHandler.throwError);

// redirction to charts
router
	.route('/:id')
	.get(
		authHandler.protector,
		generalHandler.redirection,
		errorHandler.throwError
	);

// redirction to charts
router
	.route('/:id/tableau-de-bord')
	.get(
		authHandler.protector,
		generalHandler.redirection,
		errorHandler.throwError
	);

// populationCible
router
	.route('/:id/tableau-de-bord/population-cible')
	.get(
		authHandler.protector,
		populationCible.populationCible,
		errorHandler.throwError
	);

// ressource
router
	.route('/:id/tableau-de-bord/ressource')
	.get(authHandler.protector, ressource.ressource, errorHandler.throwError);

// ressource humain
router
	.route('/:id/tableau-de-bord/ressource-humain')
	.get(
		authHandler.protector,
		ressourceHumain.ressourceHumain,
		errorHandler.throwError
	);

// sortieRealise
router
	.route('/:id/tableau-de-bord/taux-de-couverture-des-pdr')
	.get(authHandler.protector, pdrVisite.pdrVisite, errorHandler.throwError);

// pdrVisite
router
	.route('/:id/tableau-de-bord/taux-de-realisation-de-sortie-programme')
	.get(
		authHandler.protector,
		sortieRealise.sortieRealise,
		errorHandler.throwError
	);

// santeMaternelle
router
	.route('/:id/tableau-de-bord/sante-maternelle')
	.get(
		authHandler.protector,
		santeMaternelle.santeMaternelle,
		errorHandler.throwError
	);

// santeInfantile
router
	.route('/:id/tableau-de-bord/sante-infantile')
	.get(
		authHandler.protector,
		santeInfantile.santeInfantile,
		errorHandler.throwError
	);

// planificationFamiliale
router
	.route('/:id/tableau-de-bord/planification-familiale')
	.get(
		authHandler.protector,
		planificationFamiliale.planificationFamiliale,
		errorHandler.throwError
	);

// santeScolaire
router
	.route('/:id/tableau-de-bord/sante-scolaire')
	.get(
		authHandler.protector,
		santeScolaire.santeScolaire,
		errorHandler.throwError
	);

// detectionPrecoceCancer
router
	.route('/:id/tableau-de-bord/detection-precoce-cancer')
	.get(
		authHandler.protector,
		detectionPrecoceCancer.detectionPrecoceCancer,
		errorHandler.throwError
	);

// consultationMedical
router
	.route('/:id/tableau-de-bord/consultation-medical')
	.get(
		authHandler.protector,
		consultationMedical.consultationMedical,
		errorHandler.throwError
	);

// maladieDepiste
router
	.route('/:id/tableau-de-bord/maladie-depiste')
	.get(
		authHandler.protector,
		maladieDepiste.maladieDepiste,
		errorHandler.throwError
	);

// autreActivite
router
	.route('/:id/tableau-de-bord/autre-activite')
	.get(
		authHandler.protector,
		autreActivite.autreActivite,
		errorHandler.throwError
	);

// ------------------------------------------------------------------------------------------------

// plan d'action
router
	.route('/:id/plan-action')
	.get(authHandler.protector, planAction.planAction, errorHandler.throwError);

// rapport
router
	.route('/:id/trimestre/:trimestre')
	.get(authHandler.protector, rapport.rapport, errorHandler.throwError);

// // settings
// router.route('/:id/settings').get(
// 	authHandler.protector,
// 	dashboardUtilHandler.settings,
// 	errorHandler.throwError
// );

module.exports = router;
