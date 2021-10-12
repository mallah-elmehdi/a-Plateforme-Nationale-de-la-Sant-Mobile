// SET UP
const fs = require('fs');
const centralData = require('../../../data/central');
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

// DATA REGION
async function dataRegion() {
	try {
		var data = {
				etablissementVisite: {
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
				eleveExamineVmsCible: {
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
				eleveExamineVmsRealisation: {
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
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
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
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
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
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
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
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
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
			santeScolaire = await santeScolaireData.getSanteScolaire();
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			// santeScolaire
			for (let j = 0; j < santeScolaire.length; j++) {
				const santeScolaireElement = santeScolaire[j];
				if (regionElement.region === santeScolaireElement.csr.region) {
					data.etablissementVisite.data[regionElement.codeRegion] +=
						santeScolaireElement.etablissementVisite;
					data.eleveExamineVmsCible.data[regionElement.codeRegion] +=
						santeScolaireElement.eleveExamineVms.cible;
					data.eleveExamineVmsRealisation.data[
						regionElement.codeRegion
					] += santeScolaireElement.eleveExamineVms.realisation;
					data.lutteContreDeficienceVisuelleEchelleMetriqueCible.data[
						regionElement.codeRegion
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.cible;
					data.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data[
						regionElement.codeRegion
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.realisation;
					data.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data[
						regionElement.codeRegion
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
					data.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data[
						regionElement.codeRegion
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

// DATA REGION
async function dataProvince() {
	try {
		var data = {
				etablissementVisite: {
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
				eleveExamineVmsCible: {
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
				eleveExamineVmsRealisation: {
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
				lutteContreDeficienceVisuelleEchelleMetriqueCible: {
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
				lutteContreDeficienceVisuelleEchelleMetriqueRealisation: {
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
				lutteContreDeficienceVisuelleRefractionAutomatiqueCible: {
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
				lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation: {
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
			santeScolaire = await santeScolaireData.getSanteScolaire();
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			// santeScolaire
			for (let j = 0; j < santeScolaire.length; j++) {
				const santeScolaireElement = santeScolaire[j];
				if (
					provinceElement.province ===
					santeScolaireElement.csr.province
				) {
					data.etablissementVisite.data[
						provinceElement.codeProvince
					] += santeScolaireElement.etablissementVisite;
					data.eleveExamineVmsCible.data[
						provinceElement.codeProvince
					] += santeScolaireElement.eleveExamineVms.cible;
					data.eleveExamineVmsRealisation.data[
						provinceElement.codeProvince
					] += santeScolaireElement.eleveExamineVms.realisation;
					data.lutteContreDeficienceVisuelleEchelleMetriqueCible.data[
						provinceElement.codeProvince
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.cible;
					data.lutteContreDeficienceVisuelleEchelleMetriqueRealisation.data[
						provinceElement.codeProvince
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.echelleMetrique.realisation;
					data.lutteContreDeficienceVisuelleRefractionAutomatiqueCible.data[
						provinceElement.codeProvince
					] +=
						santeScolaireElement.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
					data.lutteContreDeficienceVisuelleRefractionAutomatiqueRealisation.data[
						provinceElement.codeProvince
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
			today = new Date();
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux pdr visite
		data.carte = {
			region: await dataRegion(),
			province: await dataProvince(),
		};
		// render the page
		res.status(200).render('central/dashboard/santeScolaire', {
			title: 'Tableau de bord | Santé scolaire | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
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
