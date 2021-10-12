// --- SET UP
const express = require('express');
const router = express.Router();

// --- HAMDLER
const pdrVisite = require('../handler/central/dashboard/pdrVisite');
const sortieRealise = require('../handler/central/dashboard/sortieRealise');
const populationCible = require('../handler/central/dashboard/populationCible');
const ressource = require('../handler/central/dashboard/ressource');
const ressourceHumain = require('../handler/central/dashboard/ressourceHumain');
const santeMaternelle = require('../handler/central/dashboard/santeMaternelle');
const santeInfantile = require('../handler/central/dashboard/santeInfantile');
const planificationFamiliale = require('../handler/central/dashboard/planificationFamiliale');
const santeScolaire = require('../handler/central/dashboard/santeScolaire');
const detectionPrecoceCancer = require('../handler/central/dashboard/detectionPrecoceCancer');
const consultationMedical = require('../handler/central/dashboard/consultationMedical');
const maladieDepiste = require('../handler/central/dashboard/maladieDepiste');
// ---
const planAction = require('../handler/central/planAction');
const rapport = require('../handler/central/rapport');
// ---
const generalHandler = require('../handler/central/general');
const articleHandler = require('../handler/central/article');
// ---
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
	.get(authHandler.protector, sortieRealise.sortieRealise, errorHandler.throwError);

// populationCible
router
	.route('/:id/tableau-de-bord/population-cible')
	.get(
		authHandler.protector,
		populationCible.populationCible,
		errorHandler.throwError
	);

// ressourceHumain
router
	.route('/:id/tableau-de-bord/ressource-humain')
	.get(authHandler.protector, ressourceHumain.ressourceHumain, errorHandler.throwError);

// ressource
router
	.route('/:id/tableau-de-bord/ressource')
	.get(authHandler.protector, ressource.ressource, errorHandler.throwError);
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
	
// ARTICLE
router
	.route('/:id/add-article')
	.get(
		authHandler.protector,
		articleHandler.addArticle,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		articleHandler.uploadImage,
		articleHandler.shapeImage,
		articleHandler.addArticleData,
		errorHandler.throwError
	);

// ARTICLE
router
	.route('/:id/articles')
	.get(
		authHandler.protector,
		articleHandler.getArticles,
		errorHandler.throwError
	)
	
// ARTICLE
router
	.route('/:id/article/:article')
	.get(
		authHandler.protector,
		articleHandler.getArticle,
		errorHandler.throwError
	)
	
// ARTICLE
router
	.route('/:id/article/:article/delete')
	.post(
		authHandler.protector,
		articleHandler.deleteArticle,
		errorHandler.throwError
	)
	
// ARTICLE
router
	.route('/:id/article/:article/edit')
	.get(
		authHandler.protector,
		articleHandler.editArticle,
		errorHandler.throwError
	)
	.post(
		authHandler.protector,
		articleHandler.uploadImage,
		articleHandler.shapeImage,
		articleHandler.editArticleData,
		errorHandler.throwError
	)

module.exports = router;
