// SET UP
const fs = require('fs');
const centralData = require('../../data/central');
const rapportData = require('../../data/csr/rapport/rapport');
const programmeData = require('../../data/csr/planAction/programme');
const { GlobalTable } = require('../../class/trimestre');
const global = new GlobalTable();
const ressourceHumainData = require('../../data/csr/planAction/ressourceHumain');

// ERROR
const { newError } = require('../../util/error');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/province.json`)
);
const csr = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/csr.json`)
);

// DATA GOLABAL
async function getGlobalPdrVisiteProvince(item, trimestre, province) {
	var objOut = {},
		programme = await programmeData.getProgrammeByProvince(province);
	for (let i = 0; i < programme.length; i++) {
		const pdrElement = programme[i];
		if (!objOut[pdrElement.csr.commune]) {
			objOut[pdrElement.csr.commune] = {};
		}
		objOut[pdrElement.csr.commune][pdrElement.id] = {
			pdr: pdrElement.pdr,
			realise: 0,
			programme: pdrElement['t' + trimestre],
		};
	}
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].pdrVisite) {
			const element = item[i].pdrVisite;
			objOut[element.csr.commune][element.pdrVisite.id].realise += 1;
		}
	}
	return objOut;
}
async function getGlobalPdrVisiteRegion(item, trimestre, region) {
	var objOut = {},
		programme = await programmeData.getProgrammeByRegion(region);
	for (let i = 0; i < programme.length; i++) {
		const pdrElement = programme[i];
		if (!objOut[pdrElement.csr.commune]) {
			objOut[pdrElement.csr.commune] = {};
		}
		objOut[pdrElement.csr.commune][pdrElement.id] = {
			pdr: pdrElement.pdr,
			realise: 0,
			programme: pdrElement['t' + trimestre],
		};
	}
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].pdrVisite) {
			const element = item[i].pdrVisite;
			objOut[element.csr.commune][element.pdrVisite.id].realise += 1;
		}
	}
	return objOut;
}

// DATA REGION
async function dataRegion(trimestre) {
	try {
		var data = {
				1: {},
				2: {},
				3: {},
				4: {},
				5: {},
				6: {},
				7: {},
				8: {},
				9: {},
				10: {},
				11: {},
				12: {},
			},
			rapport = await rapportData.getRapport(trimestre);
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			var item = [];
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				if (rapportElement.csr.region === regionElement.region)
					for (let k = 0; k < rapportElement.sortie.length; k++) {
						const sortieElement = rapportElement.sortie[k];
						item.push(sortieElement);
					}
			}
			var ressourceHumain =
				await ressourceHumainData.getRessourceHumainByRegion(regionElement.region);
			data[regionElement.codeRegion] = {
				pdrVisite: await getGlobalPdrVisiteRegion(
					item,
					trimestre,
					regionElement.region
				),

				populationCible: global.globalPopulationCible(item),
				ressourceHumainMobile:
					global.globalRessourceHumain(ressourceHumain),
				santeMaternelle: global.globalSanteMaternelle(item),
				santeInfantile: global.globalSanteInfantile(item),
				planificationFamiliale:
					global.globalPlanificationFamiliale(item),
				santeScolaire: global.globalSanteScolaire(item),
				detectionPrecoceCancer:
					global.globalDetectionPrecoceCancer(item),
				consultationMedical: global.globalConsultationMedical(item),
				maladieDepiste: global.globalMaladieDepiste(item),
				autreActivite: global.globalAutreActiviteAll(item),
			};
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince(trimestre) {
	try {
		var data = {
				1: {},
				2: {},
				3: {},
				4: {},
				5: {},
				6: {},
				7: {},
				8: {},
				9: {},
				10: {},
				11: {},
				12: {},
				13: {},
				14: {},
				15: {},
				16: {},
				17: {},
				18: {},
				19: {},
				20: {},
				21: {},
				22: {},
				23: {},
				24: {},
				25: {},
				26: {},
				27: {},
				28: {},
				29: {},
				30: {},
				31: {},
				32: {},
				33: {},
				34: {},
				35: {},
				36: {},
				37: {},
				38: {},
				39: {},
				40: {},
				41: {},
				42: {},
				43: {},
				44: {},
				45: {},
				46: {},
				47: {},
				48: {},
				49: {},
				50: {},
				51: {},
				52: {},
				53: {},
				54: {},
				55: {},
				56: {},
				57: {},
				58: {},
				59: {},
				60: {},
				61: {},
				62: {},
				63: {},
				64: {},
				65: {},
				66: {},
				67: {},
				68: {},
				69: {},
				70: {},
				71: {},
				72: {},
				73: {},
				74: {},
				75: {},
			},
			rapport = await rapportData.getRapport(trimestre);
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			var item = [];
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				if (rapportElement.csr.province === provinceElement.province)
					for (let k = 0; k < rapportElement.sortie.length; k++) {
						const sortieElement = rapportElement.sortie[k];
						item.push(sortieElement);
					}
			}
			var ressourceHumain =
				await ressourceHumainData.getRessourceHumainByRegion(provinceElement.province);
			data[provinceElement.codeProvince] = {
				pdrVisite: await getGlobalPdrVisiteProvince(
					item,
					trimestre,
					provinceElement.province
				),

				populationCible: global.globalPopulationCible(item),
				ressourceHumainMobile:
					global.globalRessourceHumain(ressourceHumain),
				santeMaternelle: global.globalSanteMaternelle(item),
				santeInfantile: global.globalSanteInfantile(item),
				planificationFamiliale:
					global.globalPlanificationFamiliale(item),
				santeScolaire: global.globalSanteScolaire(item),
				detectionPrecoceCancer:
					global.globalDetectionPrecoceCancer(item),
				consultationMedical: global.globalConsultationMedical(item),
				maladieDepiste: global.globalMaladieDepiste(item),
				autreActivite: global.globalAutreActiviteAll(item),
			};
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataRegion(trimestre) {
	try {
		var data = {
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0,
				6: 0,
				7: 0,
				8: 0,
				9: 0,
				10: 0,
				11: 0,
				12: 0,
			},
			rapport = await rapportData.getRapport(trimestre),
			listData = {
				1: [],
				2: [],
				3: [],
				4: [],
				5: [],
				6: [],
				7: [],
				8: [],
				9: [],
				10: [],
				11: [],
				12: [],
			};
		for (let i = 0; i < csr.length; i++) {
			const csrElement = csr[i];
			var exist = false;
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				// -----------------------------------
				if (
					rapportElement.csr.region === csrElement.region &&
					rapportElement.csr.province === csrElement.province &&
					rapportElement.csr.csr === csrElement.name
				) {
					exist = true;
				}
			}
			if (exist) {
				listData[csrElement.codeRegion].push(100);
			} else {
				listData[csrElement.codeRegion].push(0);
			}
		}
		for (const key in listData) {
			const array = listData[key];
			var res,
				total = 0;
			for (let a = 0; a < array.length; a++) {
				total += array[a];
			}
			res = parseFloat(total / array.length);
			if (res === 0) {
				data[key] = 0;
			} else if (res < 1) {
				data[key] = res.toFixed(1);
			} else {
				data[key] = parseInt(res);
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataProvince(trimestre) {
	try {
		var data = {
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0,
				6: 0,
				7: 0,
				8: 0,
				9: 0,
				10: 0,
				11: 0,
				12: 0,
				13: 0,
				14: 0,
				15: 0,
				16: 0,
				17: 0,
				18: 0,
				19: 0,
				20: 0,
				21: 0,
				22: 0,
				23: 0,
				24: 0,
				25: 0,
				26: 0,
				27: 0,
				28: 0,
				29: 0,
				30: 0,
				31: 0,
				32: 0,
				33: 0,
				34: 0,
				35: 0,
				36: 0,
				37: 0,
				38: 0,
				39: 0,
				40: 0,
				41: 0,
				42: 0,
				43: 0,
				44: 0,
				45: 0,
				46: 0,
				47: 0,
				48: 0,
				49: 0,
				50: 0,
				51: 0,
				52: 0,
				53: 0,
				54: 0,
				55: 0,
				56: 0,
				57: 0,
				58: 0,
				59: 0,
				60: 0,
				61: 0,
				62: 0,
				63: 0,
				64: 0,
				65: 0,
				66: 0,
				67: 0,
				68: 0,
				69: 0,
				70: 0,
				71: 0,
				72: 0,
				73: 0,
				74: 0,
				75: 0,
			},
			rapport = await rapportData.getRapport(trimestre),
			listData = {
				1: [],
				2: [],
				3: [],
				4: [],
				5: [],
				6: [],
				7: [],
				8: [],
				9: [],
				10: [],
				11: [],
				12: [],
				13: [],
				14: [],
				15: [],
				16: [],
				17: [],
				18: [],
				19: [],
				20: [],
				21: [],
				22: [],
				23: [],
				24: [],
				25: [],
				26: [],
				27: [],
				28: [],
				29: [],
				30: [],
				31: [],
				32: [],
				33: [],
				34: [],
				35: [],
				36: [],
				37: [],
				38: [],
				39: [],
				40: [],
				41: [],
				42: [],
				43: [],
				44: [],
				45: [],
				46: [],
				47: [],
				48: [],
				49: [],
				50: [],
				51: [],
				52: [],
				53: [],
				54: [],
				55: [],
				56: [],
				57: [],
				58: [],
				59: [],
				60: [],
				61: [],
				62: [],
				63: [],
				64: [],
				65: [],
				66: [],
				67: [],
				68: [],
				69: [],
				70: [],
				71: [],
				72: [],
				73: [],
				74: [],
				75: [],
			};
		for (let i = 0; i < csr.length; i++) {
			const csrElement = csr[i];
			var exist = false;
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				// -----------------------------------
				if (
					rapportElement.csr.region === csrElement.region &&
					rapportElement.csr.province === csrElement.province &&
					rapportElement.csr.csr === csrElement.name
				) {
					exist = true;
				}
			}
			if (exist) {
				listData[csrElement.codeProvince].push(100);
			} else {
				listData[csrElement.codeProvince].push(0);
			}
		}
		for (const key in listData) {
			const array = listData[key];
			var res,
				total = 0;
			if (!array.length) listData[key].push(0);
			for (let a = 0; a < array.length; a++) {
				total += array[a];
			}
			res = parseFloat(total / array.length);
			if (res === 0) {
				data[key] = 0;
			} else if (res < 1) {
				data[key] = res.toFixed(1);
			} else {
				data[key] = parseInt(res);
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function rapport(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux de remplissage
		data.carte = {
			region: await tauxDataRegion(parseInt(req.params.trimestre)),
			province: await tauxDataProvince(parseInt(req.params.trimestre)),
		};
		// rapport
		data.rapport = {
			region: await dataRegion(req.params.trimestre),
			province: await dataProvince(req.params.trimestre),
		};
		// render the page
		res.status(200).render('central/rapport', {
			title:
				'Tableau de bord | Rapport | Trimestre ' +
				req.params.trimestre +
				' | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
			trimestre: req.params.trimestre,
			page: 'rapport',
			listItem: req.params.trimestre.toString(),
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	rapport,
};
