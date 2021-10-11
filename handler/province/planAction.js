// SET UP
// const fs = require('fs');
const provinceData = require('../../data/province');
const planActionData = require('../../data/csr/planAction/planAction');
const { Carte } = require('../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../util/error');

// DATA REGION
async function dataProvince(province) {
	try {
		var codeProvince = carte.getCodeProvince(province),
			data = {
				[codeProvince]: {
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
			planAction = await planActionData.getPlanActionByProvince(province);
		// planAction
		for (let j = 0; j < planAction.length; j++) {
			const planActionElement = planAction[j];
			// POPULATION
			// --
			data[codeProvince].population.population.rurale +=
				planActionElement.population.population.rurale;
			// --
			data[codeProvince].population.population.cible +=
				planActionElement.population.population.cible;
			// --
			data[codeProvince].population.population.habitantMoins3km +=
				planActionElement.population.population.habitantMoins3km;
			// --
			data[codeProvince].population.population.habitantEntre3km6km +=
				planActionElement.population.population.habitantEntre3km6km;
			// --
			data[codeProvince].population.population.habitantEntre6km10km +=
				planActionElement.population.population.habitantEntre6km10km;
			// --
			data[codeProvince].population.population.habitantPlus10km +=
				planActionElement.population.population.habitantPlus10km;
			// --
			data[codeProvince].population.distanceMoyenneRouteProche +=
				planActionElement.population.distanceMoyenneRouteProche;
			// --
			data[codeProvince].population.enfant.naissancesAttendues +=
				planActionElement.population.enfant.naissancesAttendues;
			// --
			data[codeProvince].population.enfant.moins1ans +=
				planActionElement.population.enfant.moins1ans;
			// --
			data[codeProvince].population.enfant.moins5ans +=
				planActionElement.population.enfant.moins5ans;
			// --
			data[codeProvince].population.femme.far +=
				planActionElement.population.femme.far;
			// --
			data[codeProvince].population.femme.fmar +=
				planActionElement.population.femme.fmar;
			// --
			data[codeProvince].population.femme.femmeEnceinte +=
				planActionElement.population.femme.femmeEnceinte;
			// --
			// RESSOURCE
			for (
				let r = 0;
				r < planActionElement.ressource.vehicule.length;
				r++
			) {
				const vehiculeElement = planActionElement.ressource.vehicule[r];
				console.log(vehiculeElement);
				if (vehiculeElement.appartenance === 'Commune') {
					if (
						data[codeProvince].ressource.commune[
							planActionElement.csr.cs
						]
					) {
						data[codeProvince].ressource.commune[
							planActionElement.csr.cs
						].push({
							type: vehiculeElement.type,
							age: vehiculeElement.age,
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
							type: vehiculeElement.type,
							age: vehiculeElement.age,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					}
				} else if (
					vehiculeElement.appartenance === 'Ministère de la Santé'
				) {
					if (
						data[codeProvince].ressource.ms[
							planActionElement.csr.cs
						]
					) {
						data[codeProvince].ressource.ms[
							planActionElement.csr.cs
						].push({
							type: vehiculeElement.type,
							age: vehiculeElement.age,
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
							type: vehiculeElement.type,
							age: vehiculeElement.age,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					}
				} else if (
					vehiculeElement.appartenance ===
					'Organisation Non Gouvernementale (ONG)'
				) {
					if (
						data[codeProvince].ressource.ong[
							planActionElement.csr.cs
						]
					) {
						data[codeProvince].ressource.ong[
							planActionElement.csr.cs
						].push({
							type: vehiculeElement.type,
							age: vehiculeElement.age,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					} else {
						data[codeProvince].ressource.ong[
							planActionElement.csr.cs
						] = [];
						data[codeProvince].ressource.ong[
							planActionElement.csr.cs
						].push({
							type: vehiculeElement.type,
							age: vehiculeElement.age,
							csr: {
								name: planActionElement.csr.csr,
								category: planActionElement.csr.category,
							},
						});
					}
				}
			}
			// ressource humain
			// --
			data[codeProvince].ressourceHumain.fixe.medecin +=
				planActionElement.ressourceHumain.fixe.medecin;
			// --
			data[codeProvince].ressourceHumain.fixe.infirmier +=
				planActionElement.ressourceHumain.fixe.infirmier;
			// --
			data[codeProvince].ressourceHumain.fixe.sageFemme +=
				planActionElement.ressourceHumain.fixe.sageFemme;
			// --
			data[codeProvince].ressourceHumain.fixe.technicien +=
				planActionElement.ressourceHumain.fixe.technicien;
			// --
			data[codeProvince].ressourceHumain.fixe.chauffeur +=
				planActionElement.ressourceHumain.fixe.chauffeur;
			// --
			data[codeProvince].ressourceHumain.fixe.appuie +=
				planActionElement.ressourceHumain.fixe.appuie;
			// --
			data[codeProvince].ressourceHumain.mobile.medecin +=
				planActionElement.ressourceHumain.mobile.medecin;
			// --
			data[codeProvince].ressourceHumain.mobile.infirmier +=
				planActionElement.ressourceHumain.mobile.infirmier;
			// --
			data[codeProvince].ressourceHumain.mobile.sageFemme +=
				planActionElement.ressourceHumain.mobile.sageFemme;
			// --
			data[codeProvince].ressourceHumain.mobile.technicien +=
				planActionElement.ressourceHumain.mobile.technicien;
			// --
			data[codeProvince].ressourceHumain.mobile.chauffeur +=
				planActionElement.ressourceHumain.mobile.chauffeur;
			// --
			data[codeProvince].ressourceHumain.mobile.appuie +=
				planActionElement.ressourceHumain.mobile.appuie;
			// --
			data[codeProvince].ressourceHumain.mobile.appuie +=
				planActionElement.ressourceHumain.mobile.appuie;
			// --
			data[codeProvince].ressourceHumain.mobile.emOperationnelle +=
				planActionElement.ressourceHumain.mobile.emOperationnelle;
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
		// taux de remplissage
		var csrList = carte.getCsrListByProvince(province),
			taux = 0,
			tauxByCsr = {};
		for (let i = 0; i < planAction.length; i++) {
			const planActionElement = planAction[i];
			var exist = false;
			for (let j = 0; j < csrList.length; j++) {
				const csrElement = csrList[j];
				if (csrElement.csr === planActionElement.csr.csr) {
					exist = true;
				}
			}
			if (exist) {
				var temp = 0;
				if (planActionElement.population) temp += 25;
				if (planActionElement.programme.length) temp += 25;
				if (planActionElement.ressource) temp += 25;
				if (planActionElement.ressourceHumain) temp += 25;
				tauxByCsr[planActionElement.csr.csr] = {
					taux: temp,
					submit: planActionElement.submit,
				};
				taux += temp;
			} else {
				tauxByCsr[planActionElement.csr.csr] = {
					taux: 0,
					submit: planActionElement.submit,
				};
			}
		}
		return {
			planAction: data,
			tauxRemplissage: Math.ceil(taux / csrList.length),
			tauxRemplissageByCsr: tauxByCsr,
		};
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
		// taux de remplissage
		data.provinceData = await dataProvince(data.document.province);
		// render the page
		res.status(200).render('province/planAction', {
			title: 'Tableau de bord | Plan Action | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince: carte.getCodeProvince(data.document.province),
			csrList: carte.getCsrListByProvince(data.document.province),
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
