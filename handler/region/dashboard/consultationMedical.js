// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const rapportData = require('../../../data/csr/rapport/rapport');

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
				consultationRealiseMMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				consultationRealiseMPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				consultationRealiseFMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				consultationRealiseFPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				pecParPemMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				pecParPemPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceConsSpecMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceConsSpecPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceHospMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceHospPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExLaboMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExLaboPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExRadioMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExRadioPlus5ans: {
					data: { [codeRegion]: 0 },
				},
				budgetMedicamentDispenseEm: {
					data: { [codeRegion]: 0 },
				},
			},
			consultationMedical = await rapportData.getRapportByRegionAndYear(
				region,
				'consultationMedical'
			);
		// ------------------------
		// consultationMedical
		for (let j = 0; j < consultationMedical.length; j++) {
			const consultationMedicalElement = consultationMedical[j];
			data.consultationRealiseMMoins5ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.m.moins5ans;
			data.consultationRealiseMPlus5ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.m.plus5ans;
			data.consultationRealiseFMoins5ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.f.moins5ans;
			data.consultationRealiseFPlus5ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.f.plus5ans;
			data.pecParPemMoins5ans.data[codeRegion] +=
				consultationMedicalElement.pecParPem.moins5ans;
			data.pecParPemPlus5ans.data[codeRegion] +=
				consultationMedicalElement.pecParPem.plus5ans;
			data.referenceConsSpecMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.consSpec.moins5ans;
			data.referenceConsSpecPlus5ans.data[codeRegion] +=
				consultationMedicalElement.reference.consSpec.plus5ans;
			data.referenceHospMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.hosp.moins5ans;
			data.referenceHospPlus5ans.data[codeRegion] +=
				consultationMedicalElement.reference.hosp.plus5ans;
			data.referenceExLaboMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.exLabo.moins5ans;
			data.referenceExLaboPlus5ans.data[codeRegion] +=
				consultationMedicalElement.reference.exLabo.plus5ans;
			data.referenceExRadioMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.exRadio.moins5ans;
			data.referenceExRadioPlus5ans.data[codeRegion] +=
				consultationMedicalElement.reference.exRadio.plus5ans;
			data.budgetMedicamentDispenseEm.data[codeRegion] +=
				consultationMedicalElement.budgetMedicamentDispenseEm;
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
				consultationRealiseMMoins5ans: {
					data:  getDataInit(provinceList),
				},
				consultationRealiseMPlus5ans: {
					data:  getDataInit(provinceList),
				},
				consultationRealiseFMoins5ans: {
					data:  getDataInit(provinceList),
				},
				consultationRealiseFPlus5ans: {
					data:  getDataInit(provinceList),
				},
				pecParPemMoins5ans: {
					data:  getDataInit(provinceList),
				},
				pecParPemPlus5ans: {
					data:  getDataInit(provinceList),
				},
				referenceConsSpecMoins5ans: {
					data:  getDataInit(provinceList),
				},
				referenceConsSpecPlus5ans: {
					data:  getDataInit(provinceList),
				},
				referenceHospMoins5ans: {
					data:  getDataInit(provinceList),
				},
				referenceHospPlus5ans: {
					data:  getDataInit(provinceList),
				},
				referenceExLaboMoins5ans: {
					data:  getDataInit(provinceList),
				},
				referenceExLaboPlus5ans: {
					data:  getDataInit(provinceList),
				},
				referenceExRadioMoins5ans: {
					data:  getDataInit(provinceList),
				},
				referenceExRadioPlus5ans: {
					data:  getDataInit(provinceList),
				},
				budgetMedicamentDispenseEm: {
					data:  getDataInit(provinceList),
				},
			},
			consultationMedical = await rapportData.getRapportByRegionAndYear(
				region,
				'consultationMedical'
			);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// consultationMedical
			for (let j = 0; j < consultationMedical.length; j++) {
				const consultationMedicalElement = consultationMedical[j];
				if (
					provinceListElement ===
					getProvinceCode(consultationMedicalElement.csr.province)
					) {

					data.consultationRealiseMMoins5ans.data[
						provinceListElement
					] +=
						consultationMedicalElement.consultationRealise.m.moins5ans;
					data.consultationRealiseMPlus5ans.data[
						provinceListElement
					] +=
						consultationMedicalElement.consultationRealise.m.plus5ans;
					data.consultationRealiseFMoins5ans.data[
						provinceListElement
					] +=
						consultationMedicalElement.consultationRealise.f.moins5ans;
					data.consultationRealiseFPlus5ans.data[
						provinceListElement
					] +=
						consultationMedicalElement.consultationRealise.f.plus5ans;
					data.pecParPemMoins5ans.data[
						provinceListElement
					] += consultationMedicalElement.pecParPem.moins5ans;
					data.pecParPemPlus5ans.data[
						provinceListElement
					] += consultationMedicalElement.pecParPem.plus5ans;
					data.referenceConsSpecMoins5ans.data[
						provinceListElement
					] +=
						consultationMedicalElement.reference.consSpec.moins5ans;
					data.referenceConsSpecPlus5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.consSpec.plus5ans;
					data.referenceHospMoins5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.hosp.moins5ans;
					data.referenceHospPlus5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.hosp.plus5ans;
					data.referenceExLaboMoins5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.exLabo.moins5ans;
					data.referenceExLaboPlus5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.exLabo.plus5ans;
					data.referenceExRadioMoins5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.exRadio.moins5ans;
					data.referenceExRadioPlus5ans.data[
						provinceListElement
					] += consultationMedicalElement.reference.exRadio.plus5ans;
					data.budgetMedicamentDispenseEm.data[
						provinceListElement
					] += consultationMedicalElement.budgetMedicamentDispenseEm;
					console.log(data.consultationRealiseMMoins5ans.data[
						provinceListElement
					]);
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
async function consultationMedical(req, res, next) {
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
		res.status(200).render('region/dashboard/consultationMedical', {
			title:
				'Tableau de bord | Consultations médicales | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'dashboard',
			listItem: 'consultationMedical',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	consultationMedical,
};
