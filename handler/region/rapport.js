// SET UP
const fs = require('fs');
const regionData = require('../../data/region');
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
function getProvince(code) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.codeProvince === code) {
			return provinceElement.province;
		}
	}
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
async function dataRegion(trimestre, region) {
	try {
		var codeRegion = getRegionCode(region),
			data = {
				[codeRegion]: {},
			},
			rapport = await rapportData.getRapportByRegion(trimestre, region),
			item = [];
		// ------------------------
		// rapport
		for (let j = 0; j < rapport.length; j++) {
			const rapportElement = rapport[j];
			for (let k = 0; k < rapportElement.sortie.length; k++) {
				const sortieElement = rapportElement.sortie[k];
				item.push(sortieElement);
			}
		}
		var ressourceHumain =
			await ressourceHumainData.getRessourceHumainByRegion(region);
		data[codeRegion] = {
			pdrVisite: await getGlobalPdrVisiteRegion(item, trimestre, region),
			populationCible: global.globalPopulationCible(item),
			ressourceHumainMobile:
				global.globalRessourceHumain(ressourceHumain),
			santeMaternelle: global.globalSanteMaternelle(item),
			santeInfantile: global.globalSanteInfantile(item),
			planificationFamiliale: global.globalPlanificationFamiliale(item),
			santeScolaire: global.globalSanteScolaire(item),
			detectionPrecoceCancer: global.globalDetectionPrecoceCancer(item),
			consultationMedical: global.globalConsultationMedical(item),
			maladieDepiste: global.globalMaladieDepiste(item),
			autreActivite: global.globalAutreActiviteAll(item),
		};
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince(trimestre, region, provinceList) {
	try {
		var data = getDataInit(provinceList),
			rapport = await rapportData.getRapportByRegion(trimestre, region);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			var item = [];
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				if (
					getProvinceCode(rapportElement.csr.province) ===
					provinceListElement
				)
					for (let k = 0; k < rapportElement.sortie.length; k++) {
						const sortieElement = rapportElement.sortie[k];
						item.push(sortieElement);
					}
			}
			var ressourceHumain =
				await ressourceHumainData.getRessourceHumainByProvince(
					getProvince(provinceListElement)
				);
			data[provinceListElement] = {
				pdrVisite: await getGlobalPdrVisiteProvince(
					item,
					trimestre,
					getProvince(provinceListElement)
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

async function tauxDataRegion(trimestre, region) {
	try {
		var data = {},
			rapport = await rapportData.getRapportByRegion(trimestre, region),
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
			if (array.length) res = parseFloat(total / array.length);
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

async function tauxDataProvince(trimestre, region) {
	try {
		var data = {},
			rapport = await rapportData.getRapportByRegion(trimestre, region),
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
			today = new Date(),
			provinceList;
		// get the document of the region
		data.document = await regionData.getDocument(req.params.id);
		// list province
		provinceList = getProvinceList(data.document.region);
		// taux
		data.carte = {
			region: await tauxDataRegion(
				parseInt(req.params.trimestre),
				data.document.region
			),
			province: await tauxDataProvince(
				parseInt(req.params.trimestre),
				data.document.region,
				provinceList
			),
		};
		// rapport
		data.rapport = {
			region: await dataRegion(
				req.params.trimestre,
				data.document.region
			),
			province: await dataProvince(
				req.params.trimestre,
				data.document.region,
				provinceList
			),
		};
		// render the page
		res.status(200).render('region/rapport', {
			title:
				'Tableau de bord | Rapport | Trimestre ' +
				req.params.trimestre +
				' | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
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
