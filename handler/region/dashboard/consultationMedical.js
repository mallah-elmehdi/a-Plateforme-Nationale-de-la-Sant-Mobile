// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const consultationMedicalData = require('../../../data/csr/rapport/consultationMedical');

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
				consultationRealiseMEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				consultationRealiseMPlus18ans: {
					data: { [codeRegion]: 0 },
				},

				consultationRealiseFMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				consultationRealiseFEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				consultationRealiseFPlus18ans: {
					data: { [codeRegion]: 0 },
				},

				pecParPemMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				pecParPemEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				pecParPemPlus18ans: {
					data: { [codeRegion]: 0 },
				},

				referenceConsSpecMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceConsSpecEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				referenceConsSpecPlus18ans: {
					data: { [codeRegion]: 0 },
				},

				referenceUrgenceMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceUrgenceEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				referenceUrgencePlus18ans: {
					data: { [codeRegion]: 0 },
				},

				referenceExLaboMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExLaboEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExLaboPlus18ans: {
					data: { [codeRegion]: 0 },
				},

				referenceExRadioMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExRadioEntre5ans18ans: {
					data: { [codeRegion]: 0 },
				},
				referenceExRadioPlus18ans: {
					data: { [codeRegion]: 0 },
				},
				budgetMedicamentDispenseEm: {
					data: { [codeRegion]: 0 },
				},
			},
			consultationMedical =
				await consultationMedicalData.getConsultationMedicalByRegion(
					region,
				);
		// ------------------------
		// consultationMedical
		for (let j = 0; j < consultationMedical.length; j++) {
			const consultationMedicalElement = consultationMedical[j];
			data.consultationRealiseMMoins5ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.m.moins5ans;

			data.consultationRealiseMEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.m.entre5ans18ans;

			data.consultationRealiseMPlus18ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.m.plus18ans;

			data.consultationRealiseFMoins5ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.f.moins5ans;

			data.consultationRealiseFEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.f.entre5ans18ans;

			data.consultationRealiseFPlus18ans.data[codeRegion] +=
				consultationMedicalElement.consultationRealise.f.plus18ans;

			data.pecParPemMoins5ans.data[codeRegion] +=
				consultationMedicalElement.pecParPem.moins5ans;
			data.pecParPemEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.pecParPem.entre5ans18ans;

			data.pecParPemPlus18ans.data[codeRegion] +=
				consultationMedicalElement.pecParPem.plus18ans;

			data.referenceConsSpecMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.consSpec.moins5ans;

			data.referenceConsSpecEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.reference.consSpec.entre5ans18ans;

			data.referenceConsSpecPlus18ans.data[codeRegion] +=
				consultationMedicalElement.reference.consSpec.plus18ans;

			data.referenceUrgenceMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.urgence.moins5ans;

			data.referenceUrgenceEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.reference.urgence.entre5ans18ans;

			data.referenceUrgencePlus18ans.data[codeRegion] +=
				consultationMedicalElement.reference.urgence.plus18ans;

			data.referenceExLaboMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.exLabo.moins5ans;

			data.referenceExLaboEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.reference.exLabo.entre5ans18ans;

			data.referenceExLaboPlus18ans.data[codeRegion] +=
				consultationMedicalElement.reference.exLabo.plus18ans;

			data.referenceExRadioMoins5ans.data[codeRegion] +=
				consultationMedicalElement.reference.exRadio.moins5ans;

			data.referenceExRadioEntre5ans18ans.data[codeRegion] +=
				consultationMedicalElement.reference.exRadio.entre5ans18ans;

			data.referenceExRadioPlus18ans.data[codeRegion] +=
				consultationMedicalElement.reference.exRadio.plus18ans;

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
					data: getDataInit(provinceList),
				},
				consultationRealiseMEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				consultationRealiseMPlus18ans: {
					data: getDataInit(provinceList),
				},

				consultationRealiseFMoins5ans: {
					data: getDataInit(provinceList),
				},
				consultationRealiseFEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				consultationRealiseFPlus18ans: {
					data: getDataInit(provinceList),
				},

				pecParPemMoins5ans: {
					data: getDataInit(provinceList),
				},
				pecParPemEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				pecParPemPlus18ans: {
					data: getDataInit(provinceList),
				},

				referenceConsSpecMoins5ans: {
					data: getDataInit(provinceList),
				},
				referenceConsSpecEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				referenceConsSpecPlus18ans: {
					data: getDataInit(provinceList),
				},

				referenceUrgenceMoins5ans: {
					data: getDataInit(provinceList),
				},
				referenceUrgenceEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				referenceUrgencePlus18ans: {
					data: getDataInit(provinceList),
				},

				referenceExLaboMoins5ans: {
					data: getDataInit(provinceList),
				},
				referenceExLaboEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				referenceExLaboPlus18ans: {
					data: getDataInit(provinceList),
				},

				referenceExRadioMoins5ans: {
					data: getDataInit(provinceList),
				},
				referenceExRadioEntre5ans18ans: {
					data: getDataInit(provinceList),
				},
				referenceExRadioPlus18ans: {
					data: getDataInit(provinceList),
				},
				budgetMedicamentDispenseEm: {
					data: getDataInit(provinceList),
				},
			},
			consultationMedical =
				await consultationMedicalData.getConsultationMedicalByRegion(
					region
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
					data.consultationRealiseMMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.consultationRealise.m.moins5ans;
	
				data.consultationRealiseMEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.consultationRealise.m.entre5ans18ans;
	
				data.consultationRealiseMPlus18ans.data[provinceListElement] +=
					consultationMedicalElement.consultationRealise.m.plus18ans;
	
				data.consultationRealiseFMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.consultationRealise.f.moins5ans;
	
				data.consultationRealiseFEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.consultationRealise.f.entre5ans18ans;
	
				data.consultationRealiseFPlus18ans.data[provinceListElement] +=
					consultationMedicalElement.consultationRealise.f.plus18ans;
	
				data.pecParPemMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.pecParPem.moins5ans;
				data.pecParPemEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.pecParPem.entre5ans18ans;
	
				data.pecParPemPlus18ans.data[provinceListElement] +=
					consultationMedicalElement.pecParPem.plus18ans;
	
				data.referenceConsSpecMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.reference.consSpec.moins5ans;
	
				data.referenceConsSpecEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.consSpec.entre5ans18ans;
	
				data.referenceConsSpecPlus18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.consSpec.plus18ans;
	
				data.referenceUrgenceMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.reference.urgence.moins5ans;
	
				data.referenceUrgenceEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.urgence.entre5ans18ans;
	
				data.referenceUrgencePlus18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.urgence.plus18ans;
	
				data.referenceExLaboMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.reference.exLabo.moins5ans;
	
				data.referenceExLaboEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.exLabo.entre5ans18ans;
	
				data.referenceExLaboPlus18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.exLabo.plus18ans;
	
				data.referenceExRadioMoins5ans.data[provinceListElement] +=
					consultationMedicalElement.reference.exRadio.moins5ans;
	
				data.referenceExRadioEntre5ans18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.exRadio.entre5ans18ans;
	
				data.referenceExRadioPlus18ans.data[provinceListElement] +=
					consultationMedicalElement.reference.exRadio.plus18ans;
	
				data.budgetMedicamentDispenseEm.data[provinceListElement] +=
					consultationMedicalElement.budgetMedicamentDispenseEm;
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
			page: 'prestation',
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
