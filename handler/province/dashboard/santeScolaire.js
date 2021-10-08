// SET UP
const fs = require('fs');
const provinceData = require('../../../data/province');
const rapportData = require('../../../data/csr/rapport/rapport');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}

// DATA REGION
async function dataProvince(province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {
				visiteEtablissementVisite: {
					data: { [codeProvince]: 0 },
				},
				visiteEleveVue: {
					data: { [codeProvince]: 0 },
				},
				eleveExamineVmsCible: {
					data: { [codeProvince]: 0 },
				},
				eleveExamineVmsRealisation: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: { [codeProvince]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: { [codeProvince]: 0 },
				},
			},
			santeScolaire = await rapportData.getRapportByProvinceAndYear(
				province,
				'santeScolaire'
			);
		// ------------------------
		// province

		// santeScolaire
		for (let j = 0; j < santeScolaire.length; j++) {
			const santeScolaireElement = santeScolaire[j];
			data.visiteEtablissementVisite.data[codeProvince] +=
				santeScolaireElement.visite.etablissementVisite;
			data.visiteEleveVue.data[codeProvince] +=
				santeScolaireElement.visite.eleveVue;
			data.eleveExamineVmsCible.data[codeProvince] +=
				santeScolaireElement.eleveExamineVms.cible;
			data.eleveExamineVmsRealisation.data[codeProvince] +=
				santeScolaireElement.eleveExamineVms.realisation;
			data.lutteContreDeficienceVisuelleEchelleMetriqueCible.data[
				codeProvince
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.cible;
			data.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data[
				codeProvince
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.realisation;
			data.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data[
				codeProvince
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
			data.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data[
				codeProvince
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.realisation;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function santeScolaire(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// list province

		// taux pdr visite
		data.carte = {
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/dashboard/santeScolaire', {
			title:
				'Tableau de bord | Santé scolaire | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
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
