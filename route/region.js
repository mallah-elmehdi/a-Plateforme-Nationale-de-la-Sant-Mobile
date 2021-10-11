// --- SET UP
const express = require('express');
const router = express.Router();

// --- HAMDLER
const pdrVisite = require('../handler/region/dashboard/pdrVisite');
const sortieRealise = require('../handler/region/dashboard/sortieRealise');
const populationCible = require('../handler/region/dashboard/populationCible');
const ressource = require('../handler/region/dashboard/ressource');
const ressourceHumain = require('../handler/region/dashboard/ressourceHumain');
const santeMaternelle = require('../handler/region/dashboard/santeMaternelle');
const santeInfantile = require('../handler/region/dashboard/santeInfantile');
const planificationFamiliale = require('../handler/region/dashboard/planificationFamiliale');
const santeScolaire = require('../handler/region/dashboard/santeScolaire');
const detectionPrecoceCancer = require('../handler/region/dashboard/detectionPrecoceCancer');
const consultationMedical = require('../handler/region/dashboard/consultationMedical');
const maladieDepiste = require('../handler/region/dashboard/maladieDepiste');
// const autreActivite = require('../handler/region/dashboard/autreActivite');
// ----
const planAction = require('../handler/region/planAction');
const rapport = require('../handler/region/rapport');
// ----
// ----
const generalHandler = require('../handler/region/general');
// ----
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

// pdrVisite
router
	.route('/:id/tableau-de-bord/taux-de-couverture-des-pdr')
	.get(authHandler.protector, pdrVisite.pdrVisite, errorHandler.throwError);

// sortieRealise
router
	.route('/:id/tableau-de-bord/taux-de-realisation-de-sortie-programme')
	.get(
		authHandler.protector,
		sortieRealise.sortieRealise,
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
// ressourceHumain
router
	.route('/:id/tableau-de-bord/ressource-humain')
	.get(
		authHandler.protector,
		ressourceHumain.ressourceHumain,
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

// // autreActivite
// router
// 	.route('/:id/tableau-de-bord/autre-activite')
// 	.get(
// 		authHandler.protector,
// 		autreActivite.autreActivite,
// 		errorHandler.throwError
// 	);

// ------------------------------------------------------------------------------------------------

// plan d'action
router
	.route('/:id/plan-action')
	.get(authHandler.protector, planAction.planAction, errorHandler.throwError);

// rapport
router
	.route('/:id/trimestre/:trimestre')
	.get(authHandler.protector, rapport.rapport, errorHandler.throwError);

// SETTINGS
router
	.route('/:id/changer-le-mot-de-passe')
	.get(
		authHandler.protector,
		generalHandler.changePassword,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		generalHandler.checkOldPassword,
		generalHandler.updatePassword,
		errorHandler.throwError
	);


module.exports = router;
