// SET UP
const provinceData = require('../../../data/province');
const santeScolaireData = require('../../../data/csr/rapport/santeScolaire');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteSanteScolaireProvince(province, csrList) {
	try {
		var data = {
				etablissementVisite: {
					data: carte.initCsrData(csrList),
				},
				eleveExamineVmsCible: {
					data: carte.initCsrData(csrList),
				},
				eleveExamineVmsRealisation: {
					data: carte.initCsrData(csrList),
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: carte.initCsrData(csrList),
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: carte.initCsrData(csrList),
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: carte.initCsrData(csrList),
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: carte.initCsrData(csrList),
				},
			},
			santeScolaire =
				await santeScolaireData.getSanteScolaireByProvince(
					province
				);
		// santeScolaire
		for (let j = 0; j < santeScolaire.length; j++) {
			// santeScolaire element
			const santeScolaireElement = santeScolaire[j];
			// sum
			// etablissementVisite
			data.etablissementVisite.data[santeScolaireElement.csr.csr].value += santeScolaireElement.etablissementVisite
			// eleveExamineVmsCible
			data.eleveExamineVmsCible.data[santeScolaireElement.csr.csr].value += santeScolaireElement.eleveExamineVms.cible
			// eleveExamineVmsRealisation
			data.eleveExamineVmsRealisation.data[santeScolaireElement.csr.csr].value += santeScolaireElement.eleveExamineVms.realisation
			// lutteContreDeficienceVisuelleEchelleMetriqueCible
			data.lutteContreDeficienceVisuelleEchelleMetriqueCible.data[santeScolaireElement.csr.csr].value += santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.cible
			// lutteContreDeficienceVisuelleEchelleMetriqueRealisation
			data.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data[santeScolaireElement.csr.csr].value += santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.realisation
			// lutteContreDeficienceVisuelleRefractionAutomatiqueCible
			data.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data[santeScolaireElement.csr.csr].value += santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.cible  
			// lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation
			data.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data[santeScolaireElement.csr.csr].value += santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.realisation 
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function santeScolaire(req, res, next) {
	try {
		// variable
		var data = {},
			today = new Date();
		// get the document
		data.document = await provinceData.getDocument(req.params.id);
		// variable
		var csrList = carte.getCsrListByProvince(data.document.province),
			codeProvince = carte.getCodeProvince(data.document.province);
		// carte
		data.provinceData = await carteSanteScolaireProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/santeScolaire', {
			title:
				'Tableau de bord | Santé scolaire | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'santeScolaire',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	santeScolaire,
};
