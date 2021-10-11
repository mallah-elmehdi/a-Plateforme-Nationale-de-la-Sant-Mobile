// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const populationData = require('../../../data/csr/planAction/population');

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
				populationRurale: {
					data: { [codeRegion]: 0 },
				},
				populationCible: {
					data: { [codeRegion]: 0 },
				},
				populationHabitantMoins3km: {
					data: { [codeRegion]: 0 },
				},
				populationHabitantEntre3km6km: {
					data: { [codeRegion]: 0 },
				},
				populationHabitantEntre6km10km: {
					data: { [codeRegion]: 0 },
				},
				populationHabitantPlus10km: {
					data: { [codeRegion]: 0 },
				},
				enfantMoins1ans: {
					data: { [codeRegion]: 0 },
				},
				enfantMoins5ans: {
					data: { [codeRegion]: 0 },
				},
				naissancesAttendues: {
					data: { [codeRegion]: 0 },
				},
				far: {
					data: { [codeRegion]: 0 },
				},
				fmar: {
					data: { [codeRegion]: 0 },
				},
				femmeEnceinte: {
					data: { [codeRegion]: 0 },
				},
				distanceMoyenneRouteProche: {
					data: { [codeRegion]: 0 },
				},
			},
			population = await populationData.getPopulationByRegion(region);
		// ------------------------
		// population
		for (let j = 0; j < population.length; j++) {
			const populationElement = population[j];
			data.populationRurale.data[codeRegion] +=
			populationElement.population.rurale;
			// --
			data.populationCible.data[codeRegion] +=
				populationElement.population.cible;
			// --
			data.populationHabitantMoins3km.data[codeRegion] +=
				populationElement.population.habitantMoins3km;
			// --
			data.populationHabitantEntre3km6km.data[codeRegion] +=
				populationElement.population.habitantEntre3km6km;
			// --
			data.populationHabitantEntre6km10km.data[codeRegion] +=
				populationElement.population.habitantEntre6km10km;
			// --
			data.populationHabitantPlus10km.data[codeRegion] +=
				populationElement.population.habitantPlus10km;
			// --
			data.enfantMoins1ans.data[codeRegion] +=
				populationElement.enfant.moins1ans;
			// --
			data.enfantMoins5ans.data[codeRegion] +=
				populationElement.enfant.moins5ans;
			// --
			data.naissancesAttendues.data[codeRegion] +=
				populationElement.enfant.naissancesAttendues;
			// --
			data.far.data[codeRegion] += populationElement.femme.far;
			// --
			data.fmar.data[codeRegion] += populationElement.femme.fmar;
			// --
			data.femmeEnceinte.data[codeRegion] +=
				populationElement.femme.femmeEnceinte;
			// --
			data.distanceMoyenneRouteProche.data[codeRegion] +=
				populationElement.distanceMoyenneRouteProche;
			// --
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
				populationRurale: {
					data: getDataInit(provinceList),
				},
				populationCible: {
					data: getDataInit(provinceList),
				},
				populationHabitantMoins3km: {
					data: getDataInit(provinceList),
				},
				populationHabitantEntre3km6km: {
					data: getDataInit(provinceList),
				},
				populationHabitantEntre6km10km: {
					data: getDataInit(provinceList),
				},
				populationHabitantPlus10km: {
					data: getDataInit(provinceList),
				},
				enfantMoins1ans: {
					data: getDataInit(provinceList),
				},
				enfantMoins5ans: {
					data: getDataInit(provinceList),
				},
				naissancesAttendues: {
					data: getDataInit(provinceList),
				},
				far: {
					data: getDataInit(provinceList),
				},
				fmar: {
					data: getDataInit(provinceList),
				},
				femmeEnceinte: {
					data: getDataInit(provinceList),
				},
				distanceMoyenneRouteProche: {
					data: getDataInit(provinceList),
				},
			},
			population = await populationData.getPopulationByRegion(region);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// population
			for (let j = 0; j < population.length; j++) {
				const populationElement = population[j];
				if (
					provinceListElement ===
					getProvinceCode(populationElement.csr.province)
				) {
					data.populationRurale.data[provinceListElement] +=
						populationElement.population.rurale;
					// ---
					data.populationCible.data[provinceListElement] +=
						populationElement.population.cible;
					// --
					data.populationHabitantMoins3km.data[provinceListElement] +=
						populationElement.population.habitantMoins3km;
					// --
					data.populationHabitantEntre3km6km.data[
						provinceListElement
					] += populationElement.population.habitantEntre3km6km;
					// --
					data.populationHabitantEntre6km10km.data[
						provinceListElement
					] += populationElement.population.habitantEntre6km10km;
					// --
					data.populationHabitantPlus10km.data[provinceListElement] +=
						populationElement.population.habitantPlus10km;
					// --
					data.enfantMoins1ans.data[provinceListElement] +=
						populationElement.enfant.moins1ans;
					// --
					data.enfantMoins5ans.data[provinceListElement] +=
						populationElement.enfant.moins5ans;
					// --
					data.naissancesAttendues.data[provinceListElement] +=
						populationElement.enfant.naissancesAttendues;
					// --
					data.far.data[provinceListElement] +=
						populationElement.femme.far;
					// --
					data.fmar.data[provinceListElement] +=
						populationElement.femme.fmar;
					// --
					data.femmeEnceinte.data[provinceListElement] +=
						populationElement.femme.femmeEnceinte;
					// --
					data.distanceMoyenneRouteProche.data[provinceListElement] +=
						populationElement.distanceMoyenneRouteProche;
					// --
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
async function populationCible(req, res, next) {
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
		res.status(200).render('region/dashboard/populationCible', {
			title:
				'Tableau de bord | Population ciblée | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
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
