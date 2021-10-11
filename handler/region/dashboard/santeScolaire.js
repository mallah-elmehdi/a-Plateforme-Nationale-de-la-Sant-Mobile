// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const santeScolaireData = require('../../../data/csr/rapport/santeScolaire');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

function getRegionCode(reg) {
	for (let i = 0; i < region.length; i++) {
		const regElement = region[i];
		if (regElement.region === reg) {
			return regElement.codeRegion;
		}
	}
}

function getProvinceList(reg) {
	var list = [];
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.region === reg) {
			list.push(provinceElement.codeProvince);
		}
	}
	return list;
}

function getDataInit(list) {
	var datainit = {};
	for (let i = 0; i < list.length; i++) {
		const listElement = list[i];
		datainit[listElement] = 0;
	}
	return datainit;
}

function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}
// DATA REGION
async function dataRegion(region) {
	try {
		var codeRegion = getRegionCode(region),
			data = {
				etablissementVisite: {
					data: { [codeRegion]: 0 },
				},
				eleveExamineVmsCible: {
					data: { [codeRegion]: 0 },
				},
				eleveExamineVmsRealisation: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: { [codeRegion]: 0 },
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: { [codeRegion]: 0 },
				},
			},
			santeScolaire = await santeScolaireData.getSanteScolaireByRegion(
				region,
			);
		// ------------------------

		// santeScolaire
		for (let j = 0; j < santeScolaire.length; j++) {
			const santeScolaireElement = santeScolaire[j];

			data.etablissementVisite.data[codeRegion] +=
				santeScolaireElement.etablissementVisite;
			data.eleveExamineVmsCible.data[codeRegion] +=
				santeScolaireElement.eleveExamineVms.cible;
			data.eleveExamineVmsRealisation.data[codeRegion] +=
				santeScolaireElement.eleveExamineVms.realisation;
			data.lutteContreDeficienceVisuelleEchelleMetriqueCible.data[
				codeRegion
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.cible;
			data.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data[
				codeRegion
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.realisation;
			data.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data[
				codeRegion
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
			data.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data[
				codeRegion
			] +=
				santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.realisation;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince(region, provinceList) {
	try {
		var dataInit = getDataInit(provinceList),
			data = {
				etablissementVisite: {
					data: getDataInit(provinceList),
				},
				eleveExamineVmsCible: {
					data: getDataInit(provinceList),
				},
				eleveExamineVmsRealisation: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
					data: getDataInit(provinceList),
				},
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
					data: getDataInit(provinceList),
				},
			},
			santeScolaire = await santeScolaireData.getSanteScolaireByRegion(
				region,
			);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// santeScolaire
			for (let j = 0; j < santeScolaire.length; j++) {
				const santeScolaireElement = santeScolaire[j];
				if (
					provinceListElement ===
					getProvinceCode(santeScolaireElement.csr.province)
				) {
					data.etablissementVisite.data[provinceListElement] +=
						santeScolaireElement.etablissementVisite;
					data.eleveExamineVmsCible.data[provinceListElement] +=
						santeScolaireElement.eleveExamineVms.cible;
					data.eleveExamineVmsRealisation.data[provinceListElement] +=
						santeScolaireElement.eleveExamineVms.realisation;
					data.lutteContreDeficienceVisuelleEchelleMetriqueCible.data[
						provinceListElement
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.cible;
					data.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data[
						provinceListElement
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.realisation;
					data.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data[
						provinceListElement
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
					data.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data[
						provinceListElement
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.realisation;
				}
			}
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
			today = new Date(),
			provinceList;
		// get the document of the region
		data.document = await regionData.getDocument(req.params.id);
		// list province
		provinceList = getProvinceList(data.document.region);
		// taux pdr visite
		data.carte = {
			region: await dataRegion(data.document.region),
			province: await dataProvince(data.document.region, provinceList),
		};
		// render the page
		res.status(200).render('region/dashboard/santeScolaire', {
			title:
				'Tableau de bord | Santé scolaire | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
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
