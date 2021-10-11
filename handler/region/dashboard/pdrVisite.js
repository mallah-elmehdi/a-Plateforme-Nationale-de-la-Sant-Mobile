// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');
const programmeData = require('../../../data/csr/planAction/programme');

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
const csr = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/csr.json`)
);

// PDR COVER REGION
async function dataRegion(region) {
	try {
		var codeRegion = getRegionCode(region),
			data = {
				pdrVisite: {
					data: { [codeRegion]: 0 },
				},
			},
			pdr = await programmeData.getProgrammeByRegion(region),
			pdrVisite = await pdrVisiteData.getPdrVisiteByRegion(region),
			pdrProgramme = 0,
			pdrRealise = 0;

		// ------------------------
		// csr

		for (let j = 0; j < pdr.length; j++) {
			var pdrElement = pdr[j];
			pdrProgramme +=
				pdrElement.t1 + pdrElement.t2 + pdrElement.t3 + pdrElement.t4;
			// pdr visite
		}
		pdrRealise = pdrVisite.length;
		if (pdrProgramme) {
			data.pdrVisite.data[codeRegion] = Math.ceil(pdrRealise / pdrProgramme * 100)
		} 
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// PDR COVER PROVINCE
async function dataProvince(region, provinceList) {
	try {
		var dataInit = getDataInit(provinceList),
			data = {
				pdrVisite: {
					data: getDataInit(provinceList),
				},
			},
			pdr = await programmeData.getProgrammeByRegion(region),
			pdrVisite = await pdrVisiteData.getPdrVisiteByRegion(region),
			listProvince = {
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
console.log(pdrVisite);
		// pdr
		for (let m = 0; m < provinceList.length; m++) {
			var provinceListElement = provinceList[m],
				pdrProgramme = 0,
				pdrRealise = 0;
			for (let j = 0; j < pdr.length; j++) {
				var pdrElement = pdr[j];
				if (getProvinceCode(pdrElement.csr.province) === provinceListElement) {
					pdrProgramme +=
						pdrElement.t1 +
						pdrElement.t2 +
						pdrElement.t3 +
						pdrElement.t4;
					// pdr visite
					for (let k = 0; k < pdrVisite.length; k++) {
						var pdrVisiteElement = pdrVisite[k].pdrVisite;
						if (pdrElement.id === pdrVisiteElement.id) {
							pdrRealise++;
						}
					}
				}
			}
			if (!pdrRealise) {
				listProvince[provinceListElement].push(0);
			} else {
				listProvince[provinceListElement].push(
					Math.ceil(pdrRealise / pdrProgramme * 100)
				);
			}
		}
		for (const key in listProvince) {
			var element = listProvince[key],
				sum = 0;
			for (let n = 0; n < element.length; n++) {
				sum += element[n];
			}
			if (element.length) {
				var num = parseFloat(sum / element.length);
				if (num < 1 && num > 0) {
					data.pdrVisite.data[key] = num.toFixed(1);
				} else {
					data.pdrVisite.data[key] = parseInt(num);
				}
			} else {
				data.pdrVisite.data[key] = 0;
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function pdrVisite(req, res, next) {
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
		res.status(200).render('region/dashboard/pdrVisite', {
			title:
				'Tableau de bord | Taux de couverture des pdr | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'performance',
			listItem: 'pdrVisite',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	pdrVisite,
};
