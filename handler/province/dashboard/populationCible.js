// SET UP
const fs = require('fs');
const provinceData = require('../../../data/province');
const populationData = require('../../../data/csr/planAction/population');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}

// DATA REGION
async function dataProvince(province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {
				populationCible: {
					data: { [codeProvince]: 0 },
				},
				populationHabitantMoins3km: {
					data: { [codeProvince]: 0 },
				},
				populationHabitantEntre3km6km: {
					data: { [codeProvince]: 0 },
				},
				populationHabitantEntre6km10km: {
					data: { [codeProvince]: 0 },
				},
				populationHabitantPlus10km: {
					data: { [codeProvince]: 0 },
				},
				enfantMoins1ans: {
					data: { [codeProvince]: 0 },
				},
				enfantMoins5ans: {
					data: { [codeProvince]: 0 },
				},
				naissancesAttendues: {
					data: { [codeProvince]: 0 },
				},
				far: {
					data: { [codeProvince]: 0 },
				},
				fmar: {
					data: { [codeProvince]: 0 },
				},
				femmeEnceinte: {
					data: { [codeProvince]: 0 },
				},
				distanceMoyenneRouteProche: {
					data: { [codeProvince]: 0 },
				},
				indiceSynthetiqueFecondite: {
					data: { [codeProvince]: 0 },
				},
				personneAge: {
					data: { [codeProvince]: 0 },
				},
			},
			population = await populationData.getPopulationByProvinceYear(
				province
			);
		// ------------------------
		// population
		for (let j = 0; j < population.length; j++) {
			const populationElement = population[j];
			data.populationCible.data[codeProvince] +=
				populationElement.population.cible;
			data.populationHabitantMoins3km.data[codeProvince] +=
				populationElement.population.habitantMoins3km;
			data.populationHabitantEntre3km6km.data[codeProvince] +=
				populationElement.population.habitantEntre3km6km;
			data.populationHabitantEntre6km10km.data[codeProvince] +=
				populationElement.population.habitantEntre6km10km;
			data.populationHabitantPlus10km.data[codeProvince] +=
				populationElement.population.habitantPlus10km;
			data.enfantMoins1ans.data[codeProvince] +=
				populationElement.enfant.moins1ans;
			data.enfantMoins5ans.data[codeProvince] +=
				populationElement.enfant.moins5ans;
			data.naissancesAttendues.data[codeProvince] +=
				populationElement.naissancesAttendues;
			data.far.data[codeProvince] += populationElement.far;
			data.fmar.data[codeProvince] += populationElement.fmar;
			data.femmeEnceinte.data[codeProvince] +=
				populationElement.femmeEnceinte;
			data.distanceMoyenneRouteProche.data[codeProvince] +=
				populationElement.distanceMoyenneRouteProche;
			data.indiceSynthetiqueFecondite.data[codeProvince] +=
				populationElement.indiceSynthetiqueFecondite;
			data.personneAge.data[codeProvince] +=
				populationElement.personneAge;
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
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// taux pdr visite
		data.carte = {
			
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/dashboard/populationCible', {
			title:
				'Tableau de bord | Population ciblée | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			codeProvince: getProvinceCode(data.document.province),
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
