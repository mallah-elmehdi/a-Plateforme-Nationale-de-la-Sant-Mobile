// SET UP
const fs = require('fs');
const centralData = require('../../data/central');
const planActionData = require('../../data/csr/planAction/planAction');

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

// DATA REGION
async function dataRegion() {
	try {
		var data = {
				1: {
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
				2: {
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
				3: {
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
				4: {
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
				5: {
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
				6: {
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
				7: {
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
				8: {
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
				9: {
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
				10: {
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
				11: {
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
				12: {
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
			planAction = await planActionData.getPlanActionByYear();
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				if (regionElement.region === planActionElement.csr.region) {
					// POPULATION
					data[
						regionElement.codeRegion
					].population.population.cible +=
						planActionElement.population.population.cible;
					data[
						regionElement.codeRegion
					].population.population.habitantMoins3km +=
						planActionElement.population.population.habitantMoins3km;
					data[
						regionElement.codeRegion
					].population.population.habitantEntre3km6km +=
						planActionElement.population.population.habitantEntre3km6km;
					data[
						regionElement.codeRegion
					].population.population.habitantEntre6km10km +=
						planActionElement.population.population.habitantEntre6km10km;
					data[
						regionElement.codeRegion
					].population.population.habitantPlus10km +=
						planActionElement.population.population.habitantPlus10km;
					data[
						regionElement.codeRegion
					].population.distanceMoyenneRouteProche +=
						planActionElement.population.distanceMoyenneRouteProche;
					data[
						regionElement.codeRegion
					].population.indiceSynthetiqueFecondite +=
						planActionElement.population.indiceSynthetiqueFecondite;
					data[
						regionElement.codeRegion
					].population.naissancesAttendues +=
						planActionElement.population.naissancesAttendues;
					data[regionElement.codeRegion].population.far +=
						planActionElement.population.far;
					data[regionElement.codeRegion].population.fmar +=
						planActionElement.population.fmar;
					data[
						regionElement.codeRegion
					].population.enfant.moins1ans +=
						planActionElement.population.enfant.moins1ans;
					data[
						regionElement.codeRegion
					].population.enfant.moins5ans +=
						planActionElement.population.enfant.moins5ans;
					data[regionElement.codeRegion].population.femmeEnceinte +=
						planActionElement.population.femmeEnceinte;
					data[regionElement.codeRegion].population.personneAge +=
						planActionElement.population.personneAge;
					// RESSOURCE
					for (
						let r = 0;
						r < planActionElement.ressource.length;
						r++
					) {
						const ressourceElement = planActionElement.ressource[r];
						if (ressourceElement.appartenance === 'Commune') {
							if (
								data[regionElement.codeRegion].ressource
									.commune[planActionElement.csr.cs]
							) {
								data[
									regionElement.codeRegion
								].ressource.commune[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							} else {
								data[
									regionElement.codeRegion
								].ressource.commune[planActionElement.csr.cs] =
									[];
								data[
									regionElement.codeRegion
								].ressource.commune[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						} else if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							if (
								data[regionElement.codeRegion].ressource.ms[
									planActionElement.csr.cs
								]
							) {
								data[regionElement.codeRegion].ressource.ms[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							} else {
								data[regionElement.codeRegion].ressource.ms[
									planActionElement.csr.cs
								] = [];
								data[regionElement.codeRegion].ressource.ms[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						}
					}
					// ressource humain
					data[
						regionElement.codeRegion
					].ressourceHumain.fix.medecin +=
						planActionElement.ressourceHumain.fix.medecin;
					data[
						regionElement.codeRegion
					].ressourceHumain.fix.infirmier +=
						planActionElement.ressourceHumain.fix.infirmier;
					data[
						regionElement.codeRegion
					].ressourceHumain.fix.sageFemme +=
						planActionElement.ressourceHumain.fix.sageFemme;
					data[
						regionElement.codeRegion
					].ressourceHumain.fix.technicien +=
						planActionElement.ressourceHumain.fix.technicien;
					data[
						regionElement.codeRegion
					].ressourceHumain.fix.chauffeur +=
						planActionElement.ressourceHumain.fix.chauffeur;
					data[regionElement.codeRegion].ressourceHumain.fix.appuie +=
						planActionElement.ressourceHumain.fix.appuie;
					data[
						regionElement.codeRegion
					].ressourceHumain.mobile.medecin +=
						planActionElement.ressourceHumain.mobile.medecin;
					data[
						regionElement.codeRegion
					].ressourceHumain.mobile.infirmier +=
						planActionElement.ressourceHumain.mobile.infirmier;
					data[
						regionElement.codeRegion
					].ressourceHumain.mobile.sageFemme +=
						planActionElement.ressourceHumain.mobile.sageFemme;
					data[
						regionElement.codeRegion
					].ressourceHumain.mobile.technicien +=
						planActionElement.ressourceHumain.mobile.technicien;
					data[
						regionElement.codeRegion
					].ressourceHumain.mobile.chauffeur +=
						planActionElement.ressourceHumain.mobile.chauffeur;
					data[
						regionElement.codeRegion
					].ressourceHumain.mobile.appuie +=
						planActionElement.ressourceHumain.mobile.appuie;
					// PDR
					for (
						let p = 0;
						p < planActionElement.programme.length;
						p++
					) {
						const programmeElement = planActionElement.programme[p];
						if (
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.province
							]
						) {
							if (
								data[regionElement.codeRegion].pdr[
									planActionElement.csr.province
								][planActionElement.csr.commune]
							) {
								data[regionElement.codeRegion].pdr[
									planActionElement.csr.province
								][planActionElement.csr.commune].push({
									pdr: programmeElement.pdr,
									localite: programmeElement.localite,
								});
							} else {
								data[regionElement.codeRegion].pdr[
									planActionElement.csr.province
								][planActionElement.csr.commune] = [];
								data[regionElement.codeRegion].pdr[
									planActionElement.csr.province
								][planActionElement.csr.commune].push({
									pdr: programmeElement.pdr,
									localite: programmeElement.localite,
								});
							}
						} else {
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.province
							] = {};
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.province
							][planActionElement.csr.commune] = [];
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.province
							][planActionElement.csr.commune].push({
								pdr: programmeElement.pdr,
								localite: programmeElement.localite,
							});
						}
					}
					// PROGRAMME
					for (
						let p = 0;
						p < planActionElement.programme.length;
						p++
					) {
						const programmeElement = planActionElement.programme[p];
						if (
							data[regionElement.codeRegion].programme[
								planActionElement.csr.province
							]
						) {
							if (
								data[regionElement.codeRegion].programme[
									planActionElement.csr.province
								][planActionElement.csr.commune]
							) {
								data[regionElement.codeRegion].programme[
									planActionElement.csr.province
								][planActionElement.csr.commune].push({
									pdr: programmeElement.pdr,
									t1: programmeElement.t1,
									t2: programmeElement.t2,
									t3: programmeElement.t3,
									t4: programmeElement.t4,
								});
							} else {
								data[regionElement.codeRegion].programme[
									planActionElement.csr.province
								][planActionElement.csr.commune] = [];
								data[regionElement.codeRegion].programme[
									planActionElement.csr.province
								][planActionElement.csr.commune].push({
									pdr: programmeElement.pdr,
									t1: programmeElement.t1,
									t2: programmeElement.t2,
									t3: programmeElement.t3,
									t4: programmeElement.t4,
								});
							}
						} else {
							data[regionElement.codeRegion].programme[
								planActionElement.csr.province
							] = {};
							data[regionElement.codeRegion].programme[
								planActionElement.csr.province
							][planActionElement.csr.commune] = [];
							data[regionElement.codeRegion].programme[
								planActionElement.csr.province
							][planActionElement.csr.commune].push({
								pdr: programmeElement.pdr,
								t1: programmeElement.t1,
								t2: programmeElement.t2,
								t3: programmeElement.t3,
								t4: programmeElement.t4,
							});
						}
					}
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
				1: {
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
				2: {
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
				3: {
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
				4: {
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
				5: {
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
				6: {
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
				7: {
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
				8: {
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
				9: {
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
				10: {
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
				11: {
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
				12: {
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
				13: {
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
				14: {
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
				15: {
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
				16: {
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
				17: {
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
				18: {
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
				19: {
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
				20: {
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
				21: {
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
				22: {
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
				23: {
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
				24: {
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
				25: {
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
				26: {
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
				27: {
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
				28: {
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
				29: {
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
				30: {
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
				31: {
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
				32: {
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
				33: {
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
				34: {
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
				35: {
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
				36: {
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
				37: {
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
				38: {
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
				39: {
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
				40: {
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
				41: {
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
				42: {
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
				43: {
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
				44: {
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
				45: {
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
				46: {
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
				47: {
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
				48: {
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
				49: {
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
				50: {
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
				51: {
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
				52: {
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
				53: {
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
				54: {
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
				55: {
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
				56: {
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
				57: {
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
				58: {
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
				59: {
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
				60: {
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
				61: {
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
				62: {
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
				63: {
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
				64: {
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
				65: {
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
				66: {
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
				67: {
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
				68: {
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
				69: {
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
				70: {
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
				71: {
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
				72: {
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
				73: {
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
				74: {
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
				75: {
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
			planAction = await planActionData.getPlanActionByYear();
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				if (
					provinceElement.province === planActionElement.csr.province
				) {
					// POPULATION
					data[
						provinceElement.codeProvince
					].population.population.cible +=
						planActionElement.population.population.cible;
					data[
						provinceElement.codeProvince
					].population.population.habitantMoins3km +=
						planActionElement.population.population.habitantMoins3km;
					data[
						provinceElement.codeProvince
					].population.population.habitantEntre3km6km +=
						planActionElement.population.population.habitantEntre3km6km;
					data[
						provinceElement.codeProvince
					].population.population.habitantEntre6km10km +=
						planActionElement.population.population.habitantEntre6km10km;
					data[
						provinceElement.codeProvince
					].population.population.habitantPlus10km +=
						planActionElement.population.population.habitantPlus10km;
					data[
						provinceElement.codeProvince
					].population.distanceMoyenneRouteProche +=
						planActionElement.population.distanceMoyenneRouteProche;
					data[
						provinceElement.codeProvince
					].population.indiceSynthetiqueFecondite +=
						planActionElement.population.indiceSynthetiqueFecondite;
					data[
						provinceElement.codeProvince
					].population.naissancesAttendues +=
						planActionElement.population.naissancesAttendues;
					data[provinceElement.codeProvince].population.far +=
						planActionElement.population.far;
					data[provinceElement.codeProvince].population.fmar +=
						planActionElement.population.fmar;
					data[
						provinceElement.codeProvince
					].population.enfant.moins1ans +=
						planActionElement.population.enfant.moins1ans;
					data[
						provinceElement.codeProvince
					].population.enfant.moins5ans +=
						planActionElement.population.enfant.moins5ans;
					data[
						provinceElement.codeProvince
					].population.femmeEnceinte +=
						planActionElement.population.femmeEnceinte;
					data[provinceElement.codeProvince].population.personneAge +=
						planActionElement.population.personneAge;
					// RESSOURCE
					for (
						let r = 0;
						r < planActionElement.ressource.length;
						r++
					) {
						const ressourceElement = planActionElement.ressource[r];
						if (ressourceElement.appartenance === 'Commune') {
							if (
								data[provinceElement.codeProvince].ressource
									.commune[planActionElement.csr.cs]
							) {
								data[
									provinceElement.codeProvince
								].ressource.commune[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							} else {
								data[
									provinceElement.codeProvince
								].ressource.commune[planActionElement.csr.cs] =
									[];
								data[
									provinceElement.codeProvince
								].ressource.commune[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						} else if (
							ressourceElement.appartenance ===
							'Ministère de la Santé'
						) {
							if (
								data[provinceElement.codeProvince].ressource.ms[
									planActionElement.csr.cs
								]
							) {
								data[provinceElement.codeProvince].ressource.ms[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							} else {
								data[provinceElement.codeProvince].ressource.ms[
									planActionElement.csr.cs
								] = [];
								data[provinceElement.codeProvince].ressource.ms[
									planActionElement.csr.cs
								].push({
									type: ressourceElement.type,
									age: ressourceElement.age,
									besoinUsm: ressourceElement.besoinUsm,
									budget: ressourceElement.budget,
									observation: ressourceElement.observation,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						}
					}
					// ressource humain
					data[
						provinceElement.codeProvince
					].ressourceHumain.fix.medecin +=
						planActionElement.ressourceHumain.fix.medecin;
					data[
						provinceElement.codeProvince
					].ressourceHumain.fix.infirmier +=
						planActionElement.ressourceHumain.fix.infirmier;
					data[
						provinceElement.codeProvince
					].ressourceHumain.fix.sageFemme +=
						planActionElement.ressourceHumain.fix.sageFemme;
					data[
						provinceElement.codeProvince
					].ressourceHumain.fix.technicien +=
						planActionElement.ressourceHumain.fix.technicien;
					data[
						provinceElement.codeProvince
					].ressourceHumain.fix.chauffeur +=
						planActionElement.ressourceHumain.fix.chauffeur;
					data[
						provinceElement.codeProvince
					].ressourceHumain.fix.appuie +=
						planActionElement.ressourceHumain.fix.appuie;
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.medecin +=
						planActionElement.ressourceHumain.mobile.medecin;
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.infirmier +=
						planActionElement.ressourceHumain.mobile.infirmier;
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.sageFemme +=
						planActionElement.ressourceHumain.mobile.sageFemme;
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.technicien +=
						planActionElement.ressourceHumain.mobile.technicien;
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.chauffeur +=
						planActionElement.ressourceHumain.mobile.chauffeur;
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.appuie +=
						planActionElement.ressourceHumain.mobile.appuie;
					// PDR
					for (
						let p = 0;
						p < planActionElement.programme.length;
						p++
					) {
						const programmeElement = planActionElement.programme[p];

						if (
							data[provinceElement.codeProvince].pdr[
								planActionElement.csr.commune
							]
						) {
							data[provinceElement.codeProvince].pdr[
								planActionElement.csr.commune
							].push({
								pdr: programmeElement.pdr,
								localite: programmeElement.localite,
							});
						} else {
							data[provinceElement.codeProvince].pdr[
								planActionElement.csr.commune
							] = [];
							data[provinceElement.codeProvince].pdr[
								planActionElement.csr.commune
							].push({
								pdr: programmeElement.pdr,
								localite: programmeElement.localite,
							});
						}
					}
					// PROGRAMME
					for (
						let p = 0;
						p < planActionElement.programme.length;
						p++
					) {
						const programmeElement = planActionElement.programme[p];

						if (
							data[provinceElement.codeProvince].programme[
								planActionElement.csr.commune
							]
						) {
							data[provinceElement.codeProvince].programme[
								planActionElement.csr.commune
							].push({
								pdr: programmeElement.pdr,
								t1: programmeElement.t1,
								t2: programmeElement.t2,
								t3: programmeElement.t3,
								t4: programmeElement.t4,
							});
						} else {
							data[provinceElement.codeProvince].programme[
								planActionElement.csr.commune
							] = [];
							data[provinceElement.codeProvince].programme[
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
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataRegion() {
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
			planAction = await planActionData.getPlanActionByYear(),
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
			var exist = false
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				// -----------------------------------
				if (
					planActionElement.csr.region === csrElement.region &&
					planActionElement.csr.province === csrElement.province &&
					planActionElement.csr.csr === csrElement.name
				) {
					exist = true
				}
			}
			if (exist) {
				listData[csrElement.codeRegion].push(100)
			} else {
				listData[csrElement.codeRegion].push(0)
			} 
		}
		for (const key in listData) {
			const array = listData[key];
			var res, total = 0;
			for (let a = 0; a < array.length; a++) {
				total +=  array[a]
			}
			res = parseFloat(total / array.length)
			if (res === 0) {
				data[key] = 0
			}
			else if (res < 1) {
				data[key] = res.toFixed(1)
			} else {
				data[key] = parseInt(res)
			}
		}
		return data
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataProvince() {
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
			planAction = await planActionData.getPlanActionByYear(),
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
			var exist = false
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				// -----------------------------------
				if (
					planActionElement.csr.region === csrElement.region &&
					planActionElement.csr.province === csrElement.province &&
					planActionElement.csr.csr === csrElement.name
				) {
					exist = true
				}
			}
			if (exist) {
				listData[csrElement.codeProvince].push(100)
			} else {
				listData[csrElement.codeProvince].push(0)
			} 
		}
		for (const key in listData) {
			const array = listData[key];
			var res, total = 0;
			if (!array.length) listData[key].push(0)
			for (let a = 0; a < array.length; a++) {
				total +=  array[a]
			}
			res = parseFloat(total / array.length)
			if (res === 0) {
				data[key] = 0
			}
			else if (res < 1) {
				data[key] = res.toFixed(1)
			} else {
				data[key] = parseInt(res)
			}
		}
		return data
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
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux de remplissage
		data.carte = {
			region: await tauxDataRegion(),
			province: await tauxDataProvince(),
		};
		// pla action
		data.planAction = {
			region: await dataRegion(),
			province: await dataProvince(),
		};
		// render the page
		res.status(200).render('central/planAction', {
			title:
				'Tableau de bord | Plan Action | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
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
