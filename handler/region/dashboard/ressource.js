// SET UP
const fs = require('fs');
const regionData = require('../../../data/region');
const ressourceData = require('../../../data/csr/planAction/ressource');

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

function getDataInitType(list) {
	var datainit = {};
	for (let i = 0; i < list.length; i++) {
		const listElement = list[i];
		datainit[listElement] = {
			ambulance: {
				appartenance: {
					commune: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ms: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ong: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
				},
			},
			camionMobile: {
				appartenance: {
					commune: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ms: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ong: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
				},
			},
			usm: {
				appartenance: {
					commune: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ms: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ong: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
				},
			},
			vtt: {
				appartenance: {
					commune: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ms: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
					ong: {
						age: {
							moins5ans: 0,
							plus5ans: 0,
						},
					},
				},
			},
		};
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
				type: {
					data: {
						[codeRegion]: {
							ambulance: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ong: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
							camionMobile: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ong: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
							usm: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ong: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
							vtt: {
								appartenance: {
									commune: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ms: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
									ong: {
										age: {
											moins5ans: 0,
											plus5ans: 0,
										},
									},
								},
							},
						},
					},
				},
				budgetKmsParcourir: {
					data: { [codeRegion]: 0 },
				},
				budgetBesoinCarburant: {
					data: { [codeRegion]: 0 },
				},
				besoinUsm: {
					data: { [codeRegion]: 0 },
				},
			},
			ressource = await ressourceData.getRessourceByRegion(region);
		// ------------------------
		// ressource
		for (let j = 0; j < ressource.length; j++) {
			const ressourceElement = ressource[j];

			data.besoinUsm.data[codeRegion] += ressourceElement.besoinUsm;
			data.budgetKmsParcourir.data[codeRegion] +=
				ressourceElement.budget.kmsParcourir;
			data.budgetBesoinCarburant.data[codeRegion] +=
				ressourceElement.budget.besoinCarburant;
			for (let i = 0; i < ressourceElement.vehicule.length; i++) {
				const vehicule = ressourceElement.vehicule[i];
				// type
				if (vehicule.type === 'Ambulance') {
					// appartenance
					if (vehicule.appartenance === 'Ministère de la Santé') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].ambulance.appartenance.ms.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].ambulance.appartenance.ms.age.plus5ans += 1;
						}
					} else if (vehicule.appartenance === 'Commune') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].ambulance.appartenance.commune.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].ambulance.appartenance.commune.age.plus5ans += 1;
						}
					}else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].ambulance.appartenance.ong.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].ambulance.appartenance.ong.age.plus5ans += 1;
						}
					}
				} else if (vehicule.type === 'Camion mobile') {
					// appartenance
					if (vehicule.appartenance === 'Ministère de la Santé') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].camionMobile.appartenance.ms.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].camionMobile.appartenance.ms.age.plus5ans += 1;
						}
					} else if (vehicule.appartenance === 'Commune') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].camionMobile.appartenance.commune.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].camionMobile.appartenance.commune.age.plus5ans += 1;
						}
					}
					else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].camionMobile.appartenance.ong.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].camionMobile.appartenance.ong.age.plus5ans += 1;
						}
					}
				} else if (vehicule.type === 'Unité Sanitaire Mobile (USM)') {
					// appartenance
					if (vehicule.appartenance === 'Ministère de la Santé') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].usm.appartenance.ms.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].usm.appartenance.ms.age.plus5ans += 1;
						}
					} else if (vehicule.appartenance === 'Commune') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].usm.appartenance.commune.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].usm.appartenance.commune.age.plus5ans += 1;
						}
					}
					else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].usm.appartenance.ong.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].usm.appartenance.ong.age.plus5ans += 1;
						}
					}
				} else if (vehicule.type === 'Véhicule Tout Terrain (VTT)') {
					// appartenance
					if (vehicule.appartenance === 'Ministère de la Santé') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].vtt.appartenance.ms.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].vtt.appartenance.ms.age.plus5ans += 1;
						}
					} else if (vehicule.appartenance === 'Commune') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].vtt.appartenance.commune.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].vtt.appartenance.commune.age.plus5ans += 1;
						}
					}
					else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
						// age
						if (vehicule.age <= 5) {
							data.type.data[
								codeRegion
							].vtt.appartenance.ong.age.moins5ans += 1;
						} else {
							data.type.data[
								codeRegion
							].vtt.appartenance.ong.age.plus5ans += 1;
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
async function dataProvince(region, provinceList) {
	try {
		var data = {
				type: {
					data: getDataInitType(provinceList),
				},
				budgetKmsParcourir: {
					data: getDataInit(provinceList),
				},
				budgetBesoinCarburant: {
					data: getDataInit(provinceList),
				},
				besoinUsm: {
					data: getDataInit(provinceList),
				},
			},
			ressource = await ressourceData.getRessourceByRegion(region);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			// ressource
			for (let j = 0; j < ressource.length; j++) {
				const ressourceElement = ressource[j];
				if (
					provinceListElement ===
					getProvinceCode(ressourceElement.csr.province)
				) {
					data.besoinUsm.data[provinceListElement] +=
						ressourceElement.besoinUsm;
					data.budgetKmsParcourir.data[provinceListElement] +=
						ressourceElement.budget.kmsParcourir;
					data.budgetBesoinCarburant.data[provinceListElement] +=
						ressourceElement.budget.besoinCarburant;
					for (let i = 0; i < ressourceElement.vehicule.length; i++) {
						const vehicule = ressourceElement.vehicule[i];
						// type
						if (vehicule.type === 'Ambulance') {
							// appartenance
							if (
								vehicule.appartenance ===
								'Ministère de la Santé'
							) {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].ambulance.appartenance.ms.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].ambulance.appartenance.ms.age.plus5ans += 1;
								}
							} else if (vehicule.appartenance === 'Commune') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].ambulance.appartenance.commune.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].ambulance.appartenance.commune.age.plus5ans += 1;
								}
							}
							else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].ambulance.appartenance.ong.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].ambulance.appartenance.ong.age.plus5ans += 1;
								}
							}
						} else if (vehicule.type === 'Camion mobile') {
							// appartenance
							if (
								vehicule.appartenance ===
								'Ministère de la Santé'
							) {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].camionMobile.appartenance.ms.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].camionMobile.appartenance.ms.age.plus5ans += 1;
								}
							} else if (vehicule.appartenance === 'Commune') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].camionMobile.appartenance.commune.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].camionMobile.appartenance.commune.age.plus5ans += 1;
								}
							}
							else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].camionMobile.appartenance.ong.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].camionMobile.appartenance.ong.age.plus5ans += 1;
								}
							}
						} else if (
							vehicule.type === 'Unité Sanitaire Mobile (USM)'
						) {
							// appartenance
							if (
								vehicule.appartenance ===
								'Ministère de la Santé'
							) {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].usm.appartenance.ms.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].usm.appartenance.ms.age.plus5ans += 1;
								}
							} else if (vehicule.appartenance === 'Commune') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].usm.appartenance.commune.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].usm.appartenance.commune.age.plus5ans += 1;
								}
							}
							else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].usm.appartenance.ong.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].usm.appartenance.ong.age.plus5ans += 1;
								}
							}
						} else if (
							vehicule.type === 'Véhicule Tout Terrain (VTT)'
						) {
							// appartenance
							if (
								vehicule.appartenance ===
								'Ministère de la Santé'
							) {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].vtt.appartenance.ms.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].vtt.appartenance.ms.age.plus5ans += 1;
								}
							} else if (vehicule.appartenance === 'Commune') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].vtt.appartenance.commune.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].vtt.appartenance.commune.age.plus5ans += 1;
								}
							}
							else if (vehicule.appartenance === 'Organisation Non Gouvernementale (ONG)') {
								// age
								if (vehicule.age <= 5) {
									data.type.data[
										provinceListElement
									].vtt.appartenance.ong.age.moins5ans += 1;
								} else {
									data.type.data[
										provinceListElement
									].vtt.appartenance.ong.age.plus5ans += 1;
								}
							}
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

// get the dashbord
async function ressource(req, res, next) {
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
		res.status(200).render('region/dashboard/ressource', {
			title:
				'Tableau de bord | Ressource mobilisable | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			page: 'ressource',
			listItem: 'ressource',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	ressource,
};
