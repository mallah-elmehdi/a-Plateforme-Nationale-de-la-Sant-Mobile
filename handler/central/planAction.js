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
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				2: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				3: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				4: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				5: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				6: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				7: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				8: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				9: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				10: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				11: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				12: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
			},
			planAction = await planActionData.getPlanAction();
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				if (regionElement.region === planActionElement.csr.region) {
					// POPULATION
					if (planActionElement.population) {
						data[
							regionElement.codeRegion
						].population.population.rurale +=
							planActionElement.population.population.rurale;
						// --
						data[
							regionElement.codeRegion
						].population.population.cible +=
							planActionElement.population.population.cible;
						// --
						data[
							regionElement.codeRegion
						].population.population.habitantMoins3km +=
							planActionElement.population.population.habitantMoins3km;
						// --
						data[
							regionElement.codeRegion
						].population.population.habitantEntre3km6km +=
							planActionElement.population.population.habitantEntre3km6km;
						// --
						data[
							regionElement.codeRegion
						].population.population.habitantEntre6km10km +=
							planActionElement.population.population.habitantEntre6km10km;
						// --
						data[
							regionElement.codeRegion
						].population.population.habitantPlus10km +=
							planActionElement.population.population.habitantPlus10km;
						// --
						data[
							regionElement.codeRegion
						].population.distanceMoyenneRouteProche +=
							planActionElement.population.distanceMoyenneRouteProche;
						// --
						data[
							regionElement.codeRegion
						].population.enfant.naissancesAttendues +=
							planActionElement.population.enfant.naissancesAttendues;
						// --
						data[
							regionElement.codeRegion
						].population.enfant.moins1ans +=
							planActionElement.population.enfant.moins1ans;
						// --
						data[
							regionElement.codeRegion
						].population.enfant.moins5ans +=
							planActionElement.population.enfant.moins5ans;
						// --
						data[regionElement.codeRegion].population.femme.far +=
							planActionElement.population.femme.far;
						// --
						data[regionElement.codeRegion].population.femme.fmar +=
							planActionElement.population.femme.fmar;
						// --
						data[
							regionElement.codeRegion
						].population.femme.femmeEnceinte +=
							planActionElement.population.femme.femmeEnceinte;
					}
					// --
					// RESSOURCE
					if (planActionElement.ressource) {
						for (
							let r = 0;
							r < planActionElement.ressource.vehicule.length;
							r++
						) {
							const vehiculeElement =
								planActionElement.ressource.vehicule[r];
							if (vehiculeElement.appartenance === 'Commune') {
								if (
									data[regionElement.codeRegion].ressource
										.commune[planActionElement.csr.cs]
								) {
									data[
										regionElement.codeRegion
									].ressource.commune[
										planActionElement.csr.cs
									].push({
										type: vehiculeElement.type,
										age: vehiculeElement.age,
										csr: {
											name: planActionElement.csr.csr,
											category:
												planActionElement.csr.category,
										},
									});
								} else {
									data[
										regionElement.codeRegion
									].ressource.commune[
										planActionElement.csr.cs
									] = [];
									data[
										regionElement.codeRegion
									].ressource.commune[
										planActionElement.csr.cs
									].push({
										type: vehiculeElement.type,
										age: vehiculeElement.age,
										csr: {
											name: planActionElement.csr.csr,
											category:
												planActionElement.csr.category,
										},
									});
								}
							} else if (
								vehiculeElement.appartenance ===
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
										type: vehiculeElement.type,
										age: vehiculeElement.age,
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
										type: vehiculeElement.type,
										age: vehiculeElement.age,
										csr: {
											name: planActionElement.csr.csr,
											category:
												planActionElement.csr.category,
										},
									});
								}
							} else if (
								vehiculeElement.appartenance ===
								'Organisation Non Gouvernementale (ONG)'
							) {
								if (
									data[regionElement.codeRegion].ressource
										.ong[planActionElement.csr.cs]
								) {
									data[
										regionElement.codeRegion
									].ressource.ong[
										planActionElement.csr.cs
									].push({
										type: vehiculeElement.type,
										age: vehiculeElement.age,
										csr: {
											name: planActionElement.csr.csr,
											category:
												planActionElement.csr.category,
										},
									});
								} else {
									data[
										regionElement.codeRegion
									].ressource.ong[planActionElement.csr.cs] =
										[];
									data[
										regionElement.codeRegion
									].ressource.ong[
										planActionElement.csr.cs
									].push({
										type: vehiculeElement.type,
										age: vehiculeElement.age,
										csr: {
											name: planActionElement.csr.csr,
											category:
												planActionElement.csr.category,
										},
									});
								}
							}
						}
					}
					if (planActionElement.ressourceHumain) {
						// ressource humain
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.fixe.medecin +=
							planActionElement.ressourceHumain.fixe.medecin;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.fixe.infirmier +=
							planActionElement.ressourceHumain.fixe.infirmier;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.fixe.sageFemme +=
							planActionElement.ressourceHumain.fixe.sageFemme;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.fixe.technicien +=
							planActionElement.ressourceHumain.fixe.technicien;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.fixe.chauffeur +=
							planActionElement.ressourceHumain.fixe.chauffeur;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.fixe.appuie +=
							planActionElement.ressourceHumain.fixe.appuie;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.medecin +=
							planActionElement.ressourceHumain.mobile.medecin;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.infirmier +=
							planActionElement.ressourceHumain.mobile.infirmier;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.sageFemme +=
							planActionElement.ressourceHumain.mobile.sageFemme;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.technicien +=
							planActionElement.ressourceHumain.mobile.technicien;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.chauffeur +=
							planActionElement.ressourceHumain.mobile.chauffeur;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.appuie +=
							planActionElement.ressourceHumain.mobile.appuie;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.appuie +=
							planActionElement.ressourceHumain.mobile.appuie;
						// --
						data[
							regionElement.codeRegion
						].ressourceHumain.mobile.emOperationnelle +=
							planActionElement.ressourceHumain.mobile.emOperationnelle;
					}
					// PDR
					for (
						let p = 0;
						p < planActionElement.programme.length;
						p++
					) {
						const programmeElement = planActionElement.programme[p];

						if (
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.commune
							]
						) {
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.commune
							].push({
								pdr: programmeElement.pdr,
								localite: programmeElement.localite,
							});
						} else {
							data[regionElement.codeRegion].pdr[
								planActionElement.csr.commune
							] = [];
							data[regionElement.codeRegion].pdr[
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
							data[regionElement.codeRegion].programme[
								planActionElement.csr.commune
							]
						) {
							data[regionElement.codeRegion].programme[
								planActionElement.csr.commune
							].push({
								pdr: programmeElement.pdr,
								t1: programmeElement.t1,
								t2: programmeElement.t2,
								t3: programmeElement.t3,
								t4: programmeElement.t4,
							});
						} else {
							data[regionElement.codeRegion].programme[
								planActionElement.csr.commune
							] = [];
							data[regionElement.codeRegion].programme[
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

// DATA REGION
async function dataProvince() {
	try {
		var data = {
				1: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				2: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				3: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				4: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				5: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				6: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				7: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				8: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				9: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				10: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				11: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				12: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				13: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				14: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				15: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				16: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				17: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				18: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				19: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				20: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				21: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				22: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				23: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				24: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				25: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				26: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				27: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				28: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				29: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				30: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				31: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				32: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				33: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				34: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				35: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				36: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				37: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				38: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				39: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				40: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				41: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				42: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				43: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				44: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				45: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				46: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				47: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				48: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				49: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				50: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				51: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				52: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				53: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				54: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				55: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				56: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				57: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				58: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				59: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				60: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				61: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				62: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				63: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				64: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				65: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				66: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				67: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				68: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				69: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				70: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				71: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				72: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				73: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				74: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
				75: {
					population: {
						population: {
							rurale: 0,
							cible: 0,
							habitantMoins3km: 0,
							habitantEntre3km6km: 0,
							habitantEntre6km10km: 0,
							habitantPlus10km: 0,
						},
						distanceMoyenneRouteProche: 0,
						femme: {
							far: 0,
							fmar: 0,
							femmeEnceinte: 0,
						},
						enfant: {
							naissancesAttendues: 0,
							moins1ans: 0,
							moins5ans: 0,
						},
					},
					programme: {},
					pdr: {},
					ressource: {
						ms: {},
						commune: {},
						ong: {},
					},
					ressourceHumain: {
						fixe: {
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
							emOperationnelle: 0,
						},
					},
				},
			},
			planAction = await planActionData.getPlanAction();
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				// POPULATION
				if (planActionElement.population) {
					data[
						provinceElement.codeProvince
					].population.population.rurale +=
						planActionElement.population.population.rurale;
					// --
					data[
						provinceElement.codeProvince
					].population.population.cible +=
						planActionElement.population.population.cible;
					// --
					data[
						provinceElement.codeProvince
					].population.population.habitantMoins3km +=
						planActionElement.population.population.habitantMoins3km;
					// --
					data[
						provinceElement.codeProvince
					].population.population.habitantEntre3km6km +=
						planActionElement.population.population.habitantEntre3km6km;
					// --
					data[
						provinceElement.codeProvince
					].population.population.habitantEntre6km10km +=
						planActionElement.population.population.habitantEntre6km10km;
					// --
					data[
						provinceElement.codeProvince
					].population.population.habitantPlus10km +=
						planActionElement.population.population.habitantPlus10km;
					// --
					data[
						provinceElement.codeProvince
					].population.distanceMoyenneRouteProche +=
						planActionElement.population.distanceMoyenneRouteProche;
					// --
					data[
						provinceElement.codeProvince
					].population.enfant.naissancesAttendues +=
						planActionElement.population.enfant.naissancesAttendues;
					// --
					data[
						provinceElement.codeProvince
					].population.enfant.moins1ans +=
						planActionElement.population.enfant.moins1ans;
					// --
					data[
						provinceElement.codeProvince
					].population.enfant.moins5ans +=
						planActionElement.population.enfant.moins5ans;
					// --
					data[provinceElement.codeProvince].population.femme.far +=
						planActionElement.population.femme.far;
					// --
					data[provinceElement.codeProvince].population.femme.fmar +=
						planActionElement.population.femme.fmar;
					// --
					data[
						provinceElement.codeProvince
					].population.femme.femmeEnceinte +=
						planActionElement.population.femme.femmeEnceinte;
				}
				// --
				// RESSOURCE
				if (planActionElement.ressource) {
					for (
						let r = 0;
						r < planActionElement.ressource.vehicule.length;
						r++
					) {
						const vehiculeElement =
							planActionElement.ressource.vehicule[r];
						if (vehiculeElement.appartenance === 'Commune') {
							if (
								data[provinceElement.codeProvince].ressource
									.commune[planActionElement.csr.cs]
							) {
								data[
									provinceElement.codeProvince
								].ressource.commune[
									planActionElement.csr.cs
								].push({
									type: vehiculeElement.type,
									age: vehiculeElement.age,
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
									type: vehiculeElement.type,
									age: vehiculeElement.age,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						} else if (
							vehiculeElement.appartenance ===
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
									type: vehiculeElement.type,
									age: vehiculeElement.age,
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
									type: vehiculeElement.type,
									age: vehiculeElement.age,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						} else if (
							vehiculeElement.appartenance ===
							'Organisation Non Gouvernementale (ONG)'
						) {
							if (
								data[provinceElement.codeProvince].ressource
									.ong[planActionElement.csr.cs]
							) {
								data[
									provinceElement.codeProvince
								].ressource.ong[planActionElement.csr.cs].push({
									type: vehiculeElement.type,
									age: vehiculeElement.age,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							} else {
								data[
									provinceElement.codeProvince
								].ressource.ong[planActionElement.csr.cs] = [];
								data[
									provinceElement.codeProvince
								].ressource.ong[planActionElement.csr.cs].push({
									type: vehiculeElement.type,
									age: vehiculeElement.age,
									csr: {
										name: planActionElement.csr.csr,
										category:
											planActionElement.csr.category,
									},
								});
							}
						}
					}
				}
				// ressource humain
				// --
				if (provinceElement.ressourceHumain) {
					data[
						provinceElement.codeProvince
					].ressourceHumain.fixe.medecin +=
						planActionElement.ressourceHumain.fixe.medecin;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.fixe.infirmier +=
						planActionElement.ressourceHumain.fixe.infirmier;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.fixe.sageFemme +=
						planActionElement.ressourceHumain.fixe.sageFemme;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.fixe.technicien +=
						planActionElement.ressourceHumain.fixe.technicien;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.fixe.chauffeur +=
						planActionElement.ressourceHumain.fixe.chauffeur;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.fixe.appuie +=
						planActionElement.ressourceHumain.fixe.appuie;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.medecin +=
						planActionElement.ressourceHumain.mobile.medecin;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.infirmier +=
						planActionElement.ressourceHumain.mobile.infirmier;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.sageFemme +=
						planActionElement.ressourceHumain.mobile.sageFemme;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.technicien +=
						planActionElement.ressourceHumain.mobile.technicien;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.chauffeur +=
						planActionElement.ressourceHumain.mobile.chauffeur;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.appuie +=
						planActionElement.ressourceHumain.mobile.appuie;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.appuie +=
						planActionElement.ressourceHumain.mobile.appuie;
					// --
					data[
						provinceElement.codeProvince
					].ressourceHumain.mobile.emOperationnelle +=
						planActionElement.ressourceHumain.mobile.emOperationnelle;
				}
				// PDR
				for (let p = 0; p < planActionElement.programme.length; p++) {
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
				for (let p = 0; p < planActionElement.programme.length; p++) {
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
			planAction = await planActionData.getPlanAction(),
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
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				// -----------------------------------
				if (
					planActionElement.csr.region === csrElement.region &&
					planActionElement.csr.province === csrElement.province &&
					planActionElement.csr.csr === csrElement.name
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
			planAction = await planActionData.getPlanAction(),
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
			// planAction
			for (let j = 0; j < planAction.length; j++) {
				const planActionElement = planAction[j];
				// -----------------------------------
				if (
					planActionElement.csr.region === csrElement.region &&
					planActionElement.csr.province === csrElement.province &&
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
			title: 'Tableau de bord | Plan Action | ' + today.getFullYear(),
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
