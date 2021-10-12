// SET UP
const fs = require('fs');
const centralData = require('../../../data/central');
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
const csr = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/csr.json`)
);

// PDR COVER REGION
async function dataRegion() {
	try {
		var data = {
				pdrVisite: {
					data: {
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
				},
			},
			pdr = await programmeData.getProgramme(),
			pdrVisite = await pdrVisiteData.getPdrVisite(),
			listRegion = {
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
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			var pdrProgramme = 0,
				pdrRealise = 0;
			// pdr
			for (let j = 0; j < pdr.length; j++) {
				var pdrElement = pdr[j];
				if (regionElement.region == pdrElement.csr.region) {
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
			if (!pdrRealise || !pdrElement) {
				listRegion[regionElement.codeRegion].push(0);
			} else {
				listRegion[regionElement.codeRegion].push(
					Math.ceil((pdrRealise / pdrProgramme) * 100)
				);
			}
		}
		for (const key in listRegion) {
			var element = listRegion[key],
				sum = 0,
				num = 0;
			for (let n = 0; n < element.length; n++) {
				sum += element[n];
			}
			if (element.length) num = Math.ceil(sum / element.length);
			if (num < 1 && num > 0) {
				data.pdrVisite.data[key] = num.toFixed(1);
			} else {
				data.pdrVisite.data[key] = parseInt(num);
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}
// PDR COVER PROVINCE
async function dataProvince() {
	try {
		var data = {
				pdrVisite: {
					data: {
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
				},
			},
			pdr = await programmeData.getProgramme(),
			pdrVisite = await pdrVisiteData.getPdrVisite(),
			listRegion = {
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
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			var pdrProgramme = 0,
				pdrRealise = 0;
			// pdr
			for (let j = 0; j < pdr.length; j++) {
				var pdrElement = pdr[j];
				if (provinceElement.province == pdrElement.csr.province) {
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
			if (!pdrRealise || !pdrElement) {
				listRegion[provinceElement.codeProvince].push(0);
			} else {
				listRegion[provinceElement.codeProvince].push(
					Math.ceil((pdrRealise / pdrProgramme) * 100)
				);
			}
		}
		for (const key in listRegion) {
			var element = listRegion[key],
				sum = 0,
				num = 0;
			for (let n = 0; n < element.length; n++) {
				sum += element[n];
			}
			if (element.length) num = Math.ceil(sum / element.length);
			if (num < 1 && num > 0) {
				data.pdrVisite.data[key] = num.toFixed(1);
			} else {
				data.pdrVisite.data[key] = parseInt(num);
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function sortieRealise(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux pdr visite
		data.carte = {
			region: await dataRegion(),
			province: await dataProvince(),
		};
		// render the page
		res.status(200).render('central/dashboard/sortieRealise', {
			title:
				'Tableau de bord | Taux de couverture des pdr | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
			page: 'performance',
			listItem: 'sortieRealise',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	sortieRealise,
};
