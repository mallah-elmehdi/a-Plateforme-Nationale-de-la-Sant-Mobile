// SET UP
const provinceData = require('../../../data/province');
const populationData = require('../../../data/csr/planAction/population');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function cartePopulationCibleProvince(province, csrList) {
	try {
		var data = {
				populationRurale: {
					data: carte.initCsrData(csrList),
				},
				populationCible: {
					data: carte.initCsrData(csrList),
				},
				populationHabitantMoins3km: {
					data: carte.initCsrData(csrList),
				},
				populationHabitantEntre3km6km: {
					data: carte.initCsrData(csrList),
				},
				populationHabitantEntre6km10km: {
					data: carte.initCsrData(csrList),
				},
				populationHabitantPlus10km: {
					data: carte.initCsrData(csrList),
				},
				enfantNaissancesAttendues: {
					data: carte.initCsrData(csrList),
				},
				enfantMoins1ans: {
					data: carte.initCsrData(csrList),
				},
				enfantMoins5ans: {
					data: carte.initCsrData(csrList),
				},
				femmeFar: {
					data: carte.initCsrData(csrList),
				},
				femmeFmar: {
					data: carte.initCsrData(csrList),
				},
				femmeFemmeEnceinte: {
					data: carte.initCsrData(csrList),
				},
			},
			population = await populationData.getPopulationByProvince(province);
		// population
		for (let j = 0; j < population.length; j++) {
			// population element
			const populationElement = population[j];
			// sum
			// populationRurale
			data.populationRurale.data[populationElement.csr.csr].value +=
				populationElement.population.rurale;
			// populationCible
			data.populationCible.data[populationElement.csr.csr].value +=
				populationElement.population.cible;
			// populationHabitantMoins3km
			data.populationHabitantMoins3km.data[
				populationElement.csr.csr
			].value += populationElement.population.habitantMoins3km;
			// populationHabitantEntre3km6km
			data.populationHabitantEntre3km6km.data[
				populationElement.csr.csr
			].value += populationElement.population.habitantEntre3km6km;
			// populationHabitantEntre6km10km
			data.populationHabitantEntre6km10km.data[
				populationElement.csr.csr
			].value += populationElement.population.habitantEntre6km10km;
			// populationHabitantPlus10km
			data.populationHabitantPlus10km.data[
				populationElement.csr.csr
			].value += populationElement.population.habitantPlus10km;
			// enfantNaissancesAttendues
			data.enfantNaissancesAttendues.data[
				populationElement.csr.csr
			].value += populationElement.enfant.naissancesAttendues;
			// enfantMoins1ans
			data.enfantMoins1ans.data[populationElement.csr.csr].value +=
				populationElement.enfant.moins1ans;
			// enfantMoins5ans
			data.enfantMoins5ans.data[populationElement.csr.csr].value +=
				populationElement.enfant.moins5ans;
			// femmeFar
			data.femmeFar.data[populationElement.csr.csr].value +=
				populationElement.femme.far;
			// femmeFmar
			data.femmeFmar.data[populationElement.csr.csr].value +=
				populationElement.femme.fmar;
			// femmeFemmeEnceinte
			data.femmeFemmeEnceinte.data[populationElement.csr.csr].value +=
				populationElement.femme.femmeEnceinte;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function populationCible(req, res, next) {
	try {
		// variable
		var data = {},
			today = new Date();
		// get the document
		data.document = await provinceData.getDocument(req.params.id);
		// variable
		var csrList = carte.getCsrListByProvince(data.document.province),
			codeProvince = carte.getCodeProvince(data.document.province);
		// carte
		data.provinceData = await cartePopulationCibleProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/populationCible', {
			title:
				'Tableau de bord | Population ciblée | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'dashboard',
			listItem: 'populationCible',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	populationCible,
};
