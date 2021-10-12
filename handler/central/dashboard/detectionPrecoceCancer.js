// SET UP
const fs = require('fs');
const centralData = require('../../../data/central');
const detectionPrecoceCancerData = require('../../../data/csr/rapport/detectionPrecoceCancer');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

// DATA REGION
async function dataRegion() {
	try {
		var data = {
			femmeExamineCancerSein: {
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
			femmeExamineCancerCol: {
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
			femmeRefereCancerSein: {
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
			femmeRefereCancerCol: {
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
			detectionPrecoceCancer =
				await detectionPrecoceCancerData.getDetectionPrecoceCancer();
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			// detectionPrecoceCancer
			for (let j = 0; j < detectionPrecoceCancer.length; j++) {
				const detectionPrecoceCancerElement = detectionPrecoceCancer[j];
				if (
					regionElement.region ===
					detectionPrecoceCancerElement.csr.region
				) {
					data.femmeExamineCancerSein.data[regionElement.codeRegion] +=
						detectionPrecoceCancerElement.femmeExamine.cancerSein;
					data.femmeExamineCancerCol.data[regionElement.codeRegion] +=
						detectionPrecoceCancerElement.femmeExamine.cancerCol;
					data.femmeRefereCancerSein.data[regionElement.codeRegion] +=
						detectionPrecoceCancerElement.femmeRefere.cancerSein;
					data.femmeRefereCancerCol.data[regionElement.codeRegion] +=
						detectionPrecoceCancerElement.femmeRefere.cancerCol;
				}
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince() {
	try {
		var data = {
				femmeExamineCancerSein: {
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
				femmeExamineCancerCol: {
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
				femmeRefereCancerSein: {
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
				femmeRefereCancerCol: {
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
			detectionPrecoceCancer =
				await detectionPrecoceCancerData.getDetectionPrecoceCancer();
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			// detectionPrecoceCancer
			for (let j = 0; j < detectionPrecoceCancer.length; j++) {
				const detectionPrecoceCancerElement = detectionPrecoceCancer[j];
				if (
					provinceElement.province ===
					detectionPrecoceCancerElement.csr.province
				) {
					data.femmeExamineCancerSein.data[provinceElement.codeProvince] +=
						detectionPrecoceCancerElement.femmeExamine.cancerSein;
					data.femmeExamineCancerCol.data[provinceElement.codeProvince] +=
						detectionPrecoceCancerElement.femmeExamine.cancerCol;
					data.femmeRefereCancerSein.data[provinceElement.codeProvince] +=
						detectionPrecoceCancerElement.femmeRefere.cancerSein;
					data.femmeRefereCancerCol.data[provinceElement.codeProvince] +=
						detectionPrecoceCancerElement.femmeRefere.cancerCol;
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
async function detectionPrecoceCancer(req, res, next) {
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
		res.status(200).render('central/dashboard/detectionPrecoceCancer', {
			title:
				'Tableau de bord | Planification familiale | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
			page: 'prestation',
			listItem: 'detectionPrecoceCancer',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	detectionPrecoceCancer,
};
