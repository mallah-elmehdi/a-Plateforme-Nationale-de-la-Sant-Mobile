// SET UP
const express = require('express');
const router = express.Router();

// HANDLER
const handler = require('../../../handler/csr/rapport/sortie');
const trimestreHandler = require('../../../handler/csr/rapport/trimestre');
const planActionHandler = require('../../../handler/csr/planAction/planAction');
// - delete the rapport
const pdrVisiteHandler = require('../../../handler/csr/rapport/pdrVisite')
const populationCibleHandler = require('../../../handler/csr/rapport/populationCible')
const ressourceHumainMobileHandler = require('../../../handler/csr/rapport/ressourceHumainMobile')
const santeMaternelleHandler = require('../../../handler/csr/rapport/santeMaternelle')
const santeInfantileHandler = require('../../../handler/csr/rapport/santeInfantile')
const planificationFamilialeHandler = require('../../../handler/csr/rapport/planificationFamiliale')
const santeScolaireHandler = require('../../../handler/csr/rapport/santeScolaire')
const consultationMedicalHandler = require('../../../handler/csr/rapport/consultationMedical')
const detectionPrecoceCancerHandler = require('../../../handler/csr/rapport/detectionPrecoceCancer')
const maladieDepisteHandler = require('../../../handler/csr/rapport/maladieDepiste')
const autreActiviteHandler = require('../../../handler/csr/rapport/autreActivite')
// - error handler
const authHandler = require('../../../handler/auth');
const errorHandler = require('../../../handler/error');

// SORTIE
router.route('/:id/trimestre/:trimestre/sortie').post(
	authHandler.protector,
	trimestreHandler.trimestreUrl,
	// trimestreHandler.trimestreDead,
	planActionHandler.planActionNotSubmited,
	handler.newSortie,
	trimestreHandler.addDataToTrimestre,
	errorHandler.throwError
);

router.route('/:id/trimestre/:trimestre/sortie/:sortie').get(
	authHandler.protector,
	trimestreHandler.trimestreUrl,
	// trimestreHandler.trimestreDead,
	handler.sortie,
	errorHandler.throwError
);

// submit
router.route('/:id/trimestre/:trimestre/sortie/:sortie/submit').post(
	authHandler.protector,
	trimestreHandler.trimestreUrl,
	// trimestreHandler.trimestreDead,
	handler.sortieSubmited,
	handler.sortieReadyToSubmit,
	handler.submitSortie,
	errorHandler.throwError
);
// delete
router.route('/:id/trimestre/:trimestre/sortie/:sortie/delete').post(
	authHandler.protector,
	trimestreHandler.trimestreUrl,
	// trimestreHandler.trimestreDead,
	handler.sortieSubmited,
	handler.deleteSortie,
	pdrVisiteHandler.deletePdrVisite,
	populationCibleHandler.deletePopulationCible,
	ressourceHumainMobileHandler.deleteRessourceHumainMobile,
	santeMaternelleHandler.deleteSanteMaternelle,
	santeInfantileHandler.deleteSanteInfantile,
	planificationFamilialeHandler.deletePlanificationFamiliale,
	santeScolaireHandler.deleteSanteScolaire,
	consultationMedicalHandler.deleteConsultationMedical,
	detectionPrecoceCancerHandler.deleteDetectionPrecoceCancer,
	maladieDepisteHandler.deleteMaladieDepiste,
	autreActiviteHandler.deleteAutreActivite,
	trimestreHandler.editTrimestre,
	errorHandler.throwError
);

// OUTPUT
module.exports = router;
