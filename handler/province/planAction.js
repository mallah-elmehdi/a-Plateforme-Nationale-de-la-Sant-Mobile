// SET UP
const fs = require('fs');
const provinceData = require('../../data/province');
const planActionData = require('../../data/csr/planAction/planAction');
const populationData = require('../../data/csr/planAction/population');
const programmeData = require('../../data/csr/planAction/programme');
const ressourceData = require('../../data/csr/planAction/ressource');
const ressourceHumainData = require('../../data/csr/planAction/ressourceHumain');

// ERROR
const { newError } = require('../../util/error');

// JSON
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/province.json`)
);
const csr = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/csr.json`)
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
				[codeProvince]: {
					population: {
						population: {
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						indiceSynthetiqueFecondite: 0,
						naissancesAttendues: 0,
						far: 0,
						fmar: 0,
						enfant: {
							moins1ans: 0,
							moins5ans: 0,
						},
						femmeEnceinte: 0,
						personneAge: 0,
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
					},
					ressourceHumain: {
						fix: {
							medecin: 0,
							infirmier: 0,
							sageFemme: 0,
							technicien: 0,
							chauffeur: 0,
							appuie: 0,
						},
						mobile: {
							medecin: 0,
							infirmier: 0,
							sageFemme: 0,
							technicien: 0,
							chauffeur: 0,
							appuie: 0,
						},
					},
				},
			},
			planAction = await planActionData.getPlanActionByProvinceAndYear(
				province
			);
		// planAction
		for (let j = 0; j < planAction.length; j++) {
			const planActionElement = planAction[j];
			// POPULATION
			data[codeProvince].population.population.cible +=
				planActionElement.population.population.cible;
			data[codeProvince].population.population.habitantMoins3km +=
				planActionElement.population.population.habitantMoins3km;
			data[codeProvince].population.population.habitantEntre3km6km +=
				planActionElement.population.population.habitantEntre3km6km;
			data[codeProvince].population.population.habitantEntre6km10km +=
				planActionElement.population.population.habitantEntre6km10km;
			data[codeProvince].population.population.habitantPlus10km +=
				planActionElement.population.population.habitantPlus10km;
			data[codeProvince].population.distanceMoyenneRouteProche +=
				planActionElement.population.distanceMoyenneRouteProche;
			data[codeProvince].population.indiceSynthetiqueFecondite +=
				planActionElement.population.indiceSynthetiqueFecondite;
			data[codeProvince].population.naissancesAttendues +=
				planActionElement.population.naissancesAttendues;
			data[codeProvince].population.far +=
				planActionElement.population.far;
			data[codeProvince].population.fmar +=
				planActionElement.population.fmar;
			data[codeProvince].population.enfant.moins1ans +=
				planActionElement.population.enfant.moins1ans;
			data[codeProvince].population.enfant.moins5ans +=
				planActionElement.population.enfant.moins5ans;
			data[codeProvince].population.femmeEnceinte +=
				planActionElement.population.femmeEnceinte;
			data[codeProvince].population.personneAge +=
				planActionElement.population.personneAge;
			// RESSOURCE
			for (let r = 0; r < planActionElement.ressource.length; r++) {
				const ressourceElement = planActionElement.ressource[r];
				if (ressourceElement.appartenance === 'Commune') {
					if (
						data[codeProvince].ressource.commune[
							planActionElement.csr.cs
						]
					) {
						data[codeProvince].ressource.commune[
							planActionElement.csr.cs
						].push({
							type: ressourceElement.type,
							age: ressourceElement.age,
							besoinUsm: ressourceElement.besoinUsm,
							budget: ressourceElement.budget,
							observation: ressourceElement.observation,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					} else {
						data[codeProvince].ressource.commune[
							planActionElement.csr.cs
						] = [];
						data[codeProvince].ressource.commune[
							planActionElement.csr.cs
						].push({
							type: ressourceElement.type,
							age: ressourceElement.age,
							besoinUsm: ressourceElement.besoinUsm,
							budget: ressourceElement.budget,
							observation: ressourceElement.observation,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					}
				} else if (
					ressourceElement.appartenance === 'Ministre de la santé'
				) {
					if (
						data[codeProvince].ressource.ms[
							planActionElement.csr.cs
						]
					) {
						data[codeProvince].ressource.ms[
							planActionElement.csr.cs
						].push({
							type: ressourceElement.type,
							age: ressourceElement.age,
							besoinUsm: ressourceElement.besoinUsm,
							budget: ressourceElement.budget,
							observation: ressourceElement.observation,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					} else {
						data[codeProvince].ressource.ms[
							planActionElement.csr.cs
						] = [];
						data[codeProvince].ressource.ms[
							planActionElement.csr.cs
						].push({
							type: ressourceElement.type,
							age: ressourceElement.age,
							besoinUsm: ressourceElement.besoinUsm,
							budget: ressourceElement.budget,
							observation: ressourceElement.observation,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					}
				}
			}
			// ressource humain
			data[codeProvince].ressourceHumain.fix.medecin +=
				planActionElement.ressourceHumain.fix.medecin;
			data[codeProvince].ressourceHumain.fix.infirmier +=
				planActionElement.ressourceHumain.fix.infirmier;
			data[codeProvince].ressourceHumain.fix.sageFemme +=
				planActionElement.ressourceHumain.fix.sageFemme;
			data[codeProvince].ressourceHumain.fix.technicien +=
				planActionElement.ressourceHumain.fix.technicien;
			data[codeProvince].ressourceHumain.fix.chauffeur +=
				planActionElement.ressourceHumain.fix.chauffeur;
			data[codeProvince].ressourceHumain.fix.appuie +=
				planActionElement.ressourceHumain.fix.appuie;
			data[codeProvince].ressourceHumain.mobile.medecin +=
				planActionElement.ressourceHumain.mobile.medecin;
			data[codeProvince].ressourceHumain.mobile.infirmier +=
				planActionElement.ressourceHumain.mobile.infirmier;
			data[codeProvince].ressourceHumain.mobile.sageFemme +=
				planActionElement.ressourceHumain.mobile.sageFemme;
			data[codeProvince].ressourceHumain.mobile.technicien +=
				planActionElement.ressourceHumain.mobile.technicien;
			data[codeProvince].ressourceHumain.mobile.chauffeur +=
				planActionElement.ressourceHumain.mobile.chauffeur;
			data[codeProvince].ressourceHumain.mobile.appuie +=
				planActionElement.ressourceHumain.mobile.appuie;
			// PDR
			for (let p = 0; p < planActionElement.programme.length; p++) {
				const programmeElement = planActionElement.programme[p];

				if (data[codeProvince].pdr[planActionElement.csr.commune]) {
					data[codeProvince].pdr[planActionElement.csr.commune].push({
						pdr: programmeElement.pdr,
						localite: programmeElement.localite,
					});
				} else {
					data[codeProvince].pdr[planActionElement.csr.commune] = [];
					data[codeProvince].pdr[planActionElement.csr.commune].push({
						pdr: programmeElement.pdr,
						localite: programmeElement.localite,
					});
				}
			}
			// PROGRAMME
			for (let p = 0; p < planActionElement.programme.length; p++) {
				const programmeElement = planActionElement.programme[p];

				if (
					data[codeProvince].programme[planActionElement.csr.commune]
				) {
					data[codeProvince].programme[
						planActionElement.csr.commune
					].push({
						pdr: programmeElement.pdr,
						t1: programmeElement.t1,
						t2: programmeElement.t2,
						t3: programmeElement.t3,
						t4: programmeElement.t4,
					});
				} else {
					data[codeProvince].programme[
						planActionElement.csr.commune
					] = [];
					data[codeProvince].programme[
						planActionElement.csr.commune
					].push({
						pdr: programmeElement.pdr,
						t1: programmeElement.t1,
						t2: programmeElement.t2,
						t3: programmeElement.t3,
						t4: programmeElement.t4,
					});
				}
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataProvince(province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {},
			planAction = await planActionData.getPlanActionByProvinceAndYear(
				province
			),
			listData = {
				[codeProvince]: [],
			};
		for (let i = 0; i < csr.length; i++) {
			const csrElement = csr[i];
			var exist = false;
			if (csrElement.codeProvince == codeProvince) {
				// planAction
				for (let j = 0; j < planAction.length; j++) {
					const planActionElement = planAction[j];
					// -----------------------------------
					if (
						planActionElement.csr.region === csrElement.region &&
						planActionElement.csr.province ===
							csrElement.province &&
						planActionElement.csr.csr === csrElement.name
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

async function getCsrData(province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {},
			planAction = await planActionData.getPlanActionByProvinceAndYear(
				province
			);
		population = await populationData.getPopulationByProvinceYear(province);
		programme = await programmeData.getProgrammeByProvinceAndYear(province);
		ressource = await ressourceData.getRessourceByProvinceYear(province);
		ressourceHumain =
			await ressourceHumainData.getRessourceHumainByProvinceYear(
				province
			);
		for (let i = 0; i < csr.length; i++) {
			const csrElement = csr[i];
			var exist = false;
			if (csrElement.codeProvince == codeProvince) {
				// planAction
				data[csrElement.name] = {
					submited: false,
					rempli: 0,
				};
				// ----- planAction
				for (let j = 0; j < planAction.length; j++) {
					const planActionElement = planAction[j];
					// -----------------------------------
					if (
						planActionElement.csr.region === csrElement.region &&
						planActionElement.csr.province ===
							csrElement.province &&
						planActionElement.csr.csr === csrElement.name
					) {
						exist = true;
					}
				}
				if (exist) {
					data[csrElement.name].submited = true;
				} else {
					data[csrElement.name].submited = false;
				}
				// ----- population
				for (let j = 0; j < population.length; j++) {
					const populationElement = population[j];
					// -----------------------------------
					if (
						populationElement.csr.region === csrElement.region &&
						populationElement.csr.province ===
							csrElement.province &&
						populationElement.csr.csr === csrElement.name
					) {
						exist = true;
					}
				}
				if (exist) {
					data[csrElement.name].rempli += 100;
				} else {
					data[csrElement.name].rempli += 0;
				}
				// PROGRAMME
				exist = false;
				for (let j = 0; j < programme.length; j++) {
					const programmeElement = programme[j];
					// -----------------------------------
					if (
						programmeElement.csr.region === csrElement.region &&
						programmeElement.csr.province === csrElement.province &&
						programmeElement.csr.csr === csrElement.name
					) {
						exist = true;
					}
				}
				if (exist) {
					data[csrElement.name].rempli += 100;
				} else {
					data[csrElement.name].rempli += 0;
				}
				// RESSOURCE
				exist = false;
				for (let j = 0; j < ressource.length; j++) {
					const ressourceElement = ressource[j];
					// -----------------------------------
					if (
						ressourceElement.csr.region === csrElement.region &&
						ressourceElement.csr.province === csrElement.province &&
						ressourceElement.csr.csr === csrElement.name
					) {
						exist = true;
					}
				}
				if (exist) {
					data[csrElement.name].rempli += 100;
				} else {
					data[csrElement.name].rempli += 0;
				}
				// RESSOURCE humain
				exist = false;
				for (let j = 0; j < ressourceHumain.length; j++) {
					const ressourceHumainElement = ressourceHumain[j];
					// -----------------------------------
					if (
						ressourceHumainElement.csr.region ===
							csrElement.region &&
						ressourceHumainElement.csr.province ===
							csrElement.province &&
						ressourceHumainElement.csr.csr === csrElement.name
					) {
						exist = true;
					}
				}
				if (exist) {
					data[csrElement.name].rempli += 100;
				} else {
					data[csrElement.name].rempli += 0;
				}
				// math
				if (data[csrElement.name].rempli) {
					data[csrElement.name].rempli = 
						data[csrElement.name].rempli / 4
					;
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
async function planAction(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// list province
		data.chart = {
			csr: await getCsrData(data.document.province),
		};
		// taux de remplissage
		data.carte = {
			province: await tauxDataProvince(data.document.province),
		};
		// pla action
		data.planAction = {
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/planAction', {
			title:
				'Tableau de bord | Plan Action | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince: getProvinceCode(data.document.province),
			page: 'planAction',
			listItem: 'planAction',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	planAction,
};
