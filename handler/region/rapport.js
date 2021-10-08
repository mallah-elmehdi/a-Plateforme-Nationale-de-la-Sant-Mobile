// SET UP
const fs = require('fs');
const regionData = require('../../data/region');
const rapportData = require('../../data/csr/rapport/rapport');
const programmeData = require('../../data/csr/planAction/programme');

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

// DATA GOLABAL
function getGlobalConsultationMedical(item) {
	var objOut = {};
	objOut.consultationRealise = {};
	objOut.consultationRealise.m = { moins5ans: 0, plus5ans: 0 };
	objOut.consultationRealise.f = { moins5ans: 0, plus5ans: 0 };
	objOut.pecParPem = { moins5ans: 0, plus5ans: 0 };
	objOut.reference = {};
	objOut.reference.consSpec = { moins5ans: 0, plus5ans: 0 };
	objOut.reference.hosp = { moins5ans: 0, plus5ans: 0 };
	objOut.reference.exLabo = { moins5ans: 0, plus5ans: 0 };
	objOut.reference.exRadio = { moins5ans: 0, plus5ans: 0 };
	objOut.budgetMedicamentDispenseEm = 0;
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].consultationMedical) {
			const element = item[i].consultationMedical;
			objOut.consultationRealise.m.moins5ans +=
				element.consultationRealise.m.moins5ans;
			objOut.consultationRealise.f.moins5ans +=
				element.consultationRealise.f.moins5ans;
			objOut.pecParPem.moins5ans += element.pecParPem.moins5ans;
			objOut.reference.consSpec.moins5ans +=
				element.reference.consSpec.moins5ans;
			objOut.reference.hosp.moins5ans += element.reference.hosp.moins5ans;
			objOut.reference.exLabo.moins5ans +=
				element.reference.exLabo.moins5ans;
			objOut.reference.exRadio.moins5ans +=
				element.reference.exRadio.moins5ans;
			objOut.consultationRealise.m.plus5ans +=
				element.consultationRealise.m.plus5ans;
			objOut.consultationRealise.f.plus5ans +=
				element.consultationRealise.f.plus5ans;
			objOut.pecParPem.plus5ans += element.pecParPem.plus5ans;
			objOut.reference.consSpec.plus5ans +=
				element.reference.consSpec.plus5ans;
			objOut.reference.hosp.plus5ans += element.reference.hosp.plus5ans;
			objOut.reference.exLabo.plus5ans +=
				element.reference.exLabo.plus5ans;
			objOut.reference.exRadio.plus5ans +=
				element.reference.exRadio.plus5ans;
			objOut.budgetMedicamentDispenseEm +=
				element.budgetMedicamentDispenseEm;
		}
	}
	return objOut;
}

function getGlobalPopulationCible(item) {
	var objOut = {};
	objOut.populationCible = 0;
	objOut.fmar = 0;
	objOut.enfant = {
		moins1ans: 0,
		moins5ans: 0,
	};
	objOut.naissanceAttendu = 0;
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].populationCible) {
			const element = item[i].populationCible;
			objOut.populationCible += element.populationCible;
			objOut.fmar += element.fmar;
			objOut.enfant.moins1ans += element.enfant.moins1ans;
			objOut.enfant.moins5ans += element.enfant.moins5ans;
			objOut.naissanceAttendu += element.naissanceAttendu;
		}
	}
	return objOut;
}

function getGlobalRessourceHumainMobile(item) {
	var objOut = {};
	objOut.ressourcesHumaineMobilise = {
		medecin: 0,
		infirmier: 0,
		sageFemme: 0,
		technicien: 0,
		chauffeur: 0,
		appuie: 0,
	};
	objOut.emOperationnelle = 0;
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].ressourceHumainMobile) {
			const element = item[i].ressourceHumainMobile;
			objOut.ressourcesHumaineMobilise.medecin +=
				element.ressourcesHumaineMobilise.medecin;
			objOut.ressourcesHumaineMobilise.infirmier +=
				element.ressourcesHumaineMobilise.infirmier;
			objOut.ressourcesHumaineMobilise.sageFemme +=
				element.ressourcesHumaineMobilise.sageFemme;
			objOut.ressourcesHumaineMobilise.technicien +=
				element.ressourcesHumaineMobilise.technicien;
			objOut.ressourcesHumaineMobilise.chauffeur +=
				element.ressourcesHumaineMobilise.chauffeur;
			objOut.ressourcesHumaineMobilise.appuie +=
				element.ressourcesHumaineMobilise.appuie;
			objOut.emOperationnelle += element.emOperationnelle;
		}
	}
	return objOut;
}

function getGlobalSanteMaternelle(item) {
	var objOut = {};
	objOut.femmePriseCharge = 0;
	objOut.cpn = {
		nouvelleInscrite: 0,
		autreConsultation: 0,
	};
	objOut.femmeExaminePostNatal = 0;
	objOut.gahrDepiste = 0;
	objOut.vat = 0;
	objOut.reference = 0;
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].santeMaternelle) {
			const element = item[i].santeMaternelle;
			objOut.femmePriseCharge += element.femmePriseCharge;
			objOut.cpn.nouvelleInscrite += element.cpn.nouvelleInscrite;
			objOut.cpn.autreConsultation += element.cpn.autreConsultation;
			objOut.femmeExaminePostNatal += element.femmeExaminePostNatal;
			objOut.gahrDepiste += element.gahrDepiste;
			objOut.vat += element.vat;
			objOut.reference += element.reference;
		}
	}
	return objOut;
}

function getGlobalSanteInfantile(item) {
	var objOut = {};
	objOut.enfantPrisesCharge = 0;
	objOut.vaccination = {
		dtc3Hib3: 0,
		var: 0,
	};
	objOut.vitamineA = 0;
	objOut.vitamineD = 0;
	objOut.pesee = 0;
	objOut.diarrhe = 0;
	objOut.ira = 0;
	objOut.reference = 0;
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].santeInfantile) {
			const element = item[i].santeInfantile;
			objOut.enfantPrisesCharge += element.enfantPrisesCharge;
			objOut.vaccination.dtc3Hib3 += element.vaccination.dtc3Hib3;
			objOut.vaccination.var += element.vaccination.var;
			objOut.vitamineA += element.vitamineA;
			objOut.vitamineD += element.vitamineD;
			objOut.pesee += element.pesee;
			objOut.diarrhe += element.diarrhe;
			objOut.ira += element.ira;
			objOut.reference += element.reference;
		}
	}
	return objOut;
}

function getGlobalPlanificationFamiliale(item) {
	var objOut = {};
	objOut.pilule = {
		na: 0,
		aa: 0,
	};
	objOut.injectable = {
		na: 0,
		aa: 0,
	};
	objOut.diu = {
		na: 0,
		aa: 0,
	};
	objOut.condom = {
		na: 0,
		aa: 0,
	};
	objOut.reference = {
		diu: 0,
		lt: 0,
	};
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].planificationFamiliale) {
			const element = item[i].planificationFamiliale;
			objOut.pilule.na += element.pilule.na;
			objOut.pilule.aa += element.pilule.aa;
			objOut.injectable.na += element.injectable.na;
			objOut.injectable.aa += element.injectable.aa;
			objOut.diu.na += element.diu.na;
			objOut.diu.aa += element.diu.aa;
			objOut.condom.na += element.condom.na;
			objOut.condom.aa += element.condom.aa;
			objOut.reference.diu += element.reference.diu;
			objOut.reference.lt += element.reference.lt;
		}
	}
	return objOut;
}

function getGlobalMaladieDepiste(item) {
	var objOut = {};
	objOut.diabete = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.hta = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.angine = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.carie = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.parodontopathie = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.maladieMentale = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.ist = {
		cas: 0,
		casPec: 0,
		reference: 0,
	};

	objOut.raa = {
		avecCardites: {
			cas: 0,
			casPec: 0,
			reference: 0,
		},
		sansCardites: {
			cas: 0,
			casPec: 0,
			reference: 0,
		},
	};
	objOut.cancer = {
		sein: {
			cas: 0,
			casPec: 0,
			reference: 0,
		},
		col: {
			cas: 0,
			casPec: 0,
			reference: 0,
		},
	};
	objOut.tuberculose = {
		polmonaire: {
			cas: 0,
			casPec: 0,
			reference: 0,
		},
		extraPolmonaire: {
			cas: 0,
			casPec: 0,
			reference: 0,
		},
	};

	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].maladieDepiste) {
			const element = item[i].maladieDepiste;
			objOut.diabete.cas += element.diabete.cas;
			objOut.diabete.casPec += element.diabete.casPec;
			objOut.diabete.reference += element.diabete.reference;
			objOut.hta.cas += element.hta.cas;
			objOut.hta.casPec += element.hta.casPec;
			objOut.hta.reference += element.hta.reference;
			objOut.angine.cas += element.angine.cas;
			objOut.angine.casPec += element.angine.casPec;
			objOut.angine.reference += element.angine.reference;
			objOut.carie.cas += element.carie.cas;
			objOut.carie.casPec += element.carie.casPec;
			objOut.carie.reference += element.carie.reference;
			objOut.parodontopathie.cas += element.parodontopathie.cas;
			objOut.parodontopathie.casPec += element.parodontopathie.casPec;
			objOut.parodontopathie.reference +=
				element.parodontopathie.reference;
			objOut.maladieMentale.cas += element.maladieMentale.cas;
			objOut.maladieMentale.casPec += element.maladieMentale.casPec;
			objOut.maladieMentale.reference += element.maladieMentale.reference;
			objOut.ist.cas += element.ist.cas;
			objOut.ist.casPec += element.ist.casPec;
			objOut.ist.reference += element.ist.reference;
			objOut.raa.avecCardites.cas += element.raa.avecCardites.cas;
			objOut.raa.avecCardites.casPec += element.raa.avecCardites.casPec;
			objOut.raa.avecCardites.reference +=
				element.raa.avecCardites.reference;
			objOut.raa.sansCardites.cas += element.raa.sansCardites.cas;
			objOut.raa.sansCardites.casPec += element.raa.sansCardites.casPec;
			objOut.raa.sansCardites.reference +=
				element.raa.sansCardites.reference;
			objOut.cancer.sein.cas += element.cancer.sein.cas;
			objOut.cancer.sein.casPec += element.cancer.sein.casPec;
			objOut.cancer.sein.reference += element.cancer.sein.reference;
			objOut.cancer.col.cas += element.cancer.col.cas;
			objOut.cancer.col.casPec += element.cancer.col.casPec;
			objOut.cancer.col.reference += element.cancer.col.reference;
			objOut.tuberculose.polmonaire.cas +=
				element.tuberculose.polmonaire.cas;
			objOut.tuberculose.polmonaire.casPec +=
				element.tuberculose.polmonaire.casPec;
			objOut.tuberculose.polmonaire.reference +=
				element.tuberculose.polmonaire.reference;
			objOut.tuberculose.extraPolmonaire.cas +=
				element.tuberculose.extraPolmonaire.cas;
			objOut.tuberculose.extraPolmonaire.casPec +=
				element.tuberculose.extraPolmonaire.casPec;
			objOut.tuberculose.extraPolmonaire.reference +=
				element.tuberculose.extraPolmonaire.reference;
		}
	}
	return objOut;
}

function getGlobalSanteScolaire(item) {
	var objOut = {};
	objOut.visite = {
		etablissementVisite: 0,
		eleveVue: 0,
	};
	objOut.eleveExamineVms = {
		cible: 0,
		realisation: 0,
	};
	objOut.lutteContreDeficienceVisuelle = {
		echelleMetrique: {
			cible: 0,
			realisation: 0,
		},
		refractionAutomatique: {
			cible: 0,
			realisation: 0,
		},
	};
	for (let i = 0; i < item.length; i++) {
		if (
			item[i] &&
			item[i].santeScolaire &&
			!JSON.stringify(item[i].santeScolaire).includes('"ignore":true')
		) {
			const element = item[i].santeScolaire;
			objOut.visite.etablissementVisite +=
				element.visite.etablissementVisite;
			objOut.visite.eleveVue += element.visite.eleveVue;
			objOut.eleveExamineVms.cible += element.eleveExamineVms.cible;
			objOut.lutteContreDeficienceVisuelle.echelleMetrique.cible +=
				element.lutteContreDeficienceVisuelle.echelleMetrique.cible;
			objOut.lutteContreDeficienceVisuelle.refractionAutomatique.cible +=
				element.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
			objOut.eleveExamineVms.realisation +=
				element.eleveExamineVms.realisation;
			objOut.lutteContreDeficienceVisuelle.echelleMetrique.realisation +=
				element.lutteContreDeficienceVisuelle.echelleMetrique.realisation;
			objOut.lutteContreDeficienceVisuelle.refractionAutomatique.realisation +=
				element.lutteContreDeficienceVisuelle.refractionAutomatique.realisation;
		}
	}
	return objOut;
}

function getGlobalAutreActiviteRegion(item) {
	var objOut = {};
	for (let i = 0; i < item.length; i++) {
		if (
			item[i] &&
			item[i].autreActivite &&
			!JSON.stringify(item[i].autreActivite).includes('"ignore":true')
		) {
			const autreActiviteElement = item[i].autreActivite;
			if (!objOut[autreActiviteElement.csr.province]) {
				objOut[autreActiviteElement.csr.province] = {};
				objOut[autreActiviteElement.csr.province][
					autreActiviteElement.csr.commune
				] = [];
			} else if (
				!objOut[autreActiviteElement.csr.province][
					autreActiviteElement.csr.commune
				]
			) {
				objOut[autreActiviteElement.csr.province][
					autreActiviteElement.csr.commune
				] = [];
			}
			for (let l = 0; l < autreActiviteElement.activity.length; l++) {
				const activityElement = autreActiviteElement.activity[l];
				objOut[autreActiviteElement.csr.province][
					autreActiviteElement.csr.commune
				].push(activityElement);
			}
		}
	}
	return objOut;
}

function getGlobalAutreActiviteProvince(item) {
	var objOut = {};
	for (let i = 0; i < item.length; i++) {
		if (
			item[i] &&
			item[i].autreActivite &&
			!JSON.stringify(item[i].autreActivite).includes('"ignore":true')
		) {
			const autreActiviteElement = item[i].autreActivite;
			if (!objOut[autreActiviteElement.csr.commune]) {
				objOut[autreActiviteElement.csr.commune] = [];
			}
			for (let l = 0; l < autreActiviteElement.activity.length; l++) {
				const activityElement = autreActiviteElement.activity[l];
				objOut[autreActiviteElement.csr.commune].push(activityElement);
			}
		}
	}
	return objOut;
}

async function getGlobalPdrVisiteRegion(item, trimestre, region) {
	var objOut = {},
		programme = await programmeData.getProgrammeByYear();
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].pdrVisite) {
			for (let i = 0; i < programme.length; i++) {
				const pdrElement = programme[i];
				if (pdrElement.csr.region === region) {
					if (!objOut[pdrElement.csr.province]) {
						objOut[pdrElement.csr.province] = {};
						objOut[pdrElement.csr.province][
							pdrElement.csr.commune
						] = {};
					} else if (
						!objOut[pdrElement.csr.province][pdrElement.csr.commune]
					) {
						objOut[pdrElement.csr.province][
							pdrElement.csr.commune
						] = {};
					}
					objOut[pdrElement.csr.province][pdrElement.csr.commune][
						pdrElement.id
					] = {
						pdr: pdrElement.pdr,
						realise: 0,
						programme: pdrElement['t' + trimestre],
					};
				}
			}

			const element = item[i].pdrVisite;

			for (let j = 0; j < element.pdrVisite.length; j++) {
				const pdrVisiteElement = element.pdrVisite[j];
				if (element.csr.region === region) {
					objOut[element.csr.province][element.csr.commune][
						pdrVisiteElement.id
					].realise += 1;
				}
			}
		}
	}
	return objOut;
}

async function getGlobalPdrVisiteProvince(item, trimestre, province) {
	var objOut = {},
		programme = await programmeData.getProgrammeByYear();
	for (let i = 0; i < item.length; i++) {
		if (item[i] && item[i].pdrVisite) {
			for (let i = 0; i < programme.length; i++) {
				const pdrElement = programme[i];
				if (pdrElement.csr.province === province) {
					if (!objOut[pdrElement.csr.commune]) {
						objOut[pdrElement.csr.commune] = {};
					}
					objOut[pdrElement.csr.commune][pdrElement.id] = {
						pdr: pdrElement.pdr,
						realise: 0,
						programme: pdrElement['t' + trimestre],
					};
				}
			}
			const element = item[i].pdrVisite;
			for (let j = 0; j < element.pdrVisite.length; j++) {
				const pdrVisiteElement = element.pdrVisite[j];
				if (element.csr.province === province) {
					objOut[element.csr.commune][
						pdrVisiteElement.id
					].realise += 1;
				}
			}
		}
	}
	return objOut;
}

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

function getProvince(code) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.codeProvince === code) {
			return provinceElement.province;
		}
	}
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
async function dataRegion(trimestre, region) {
	try {
		var codeRegion = getRegionCode(region),
			data = {
				[codeRegion]: {},
			},
			rapport = await rapportData.getSubmitedRapportByRegionAndYearDash(
				trimestre,
				region
			),
			item = [];
		// ------------------------
		// rapport
		for (let j = 0; j < rapport.length; j++) {
			const rapportElement = rapport[j];
			for (let k = 0; k < rapportElement.sortie.length; k++) {
				const sortieElement = rapportElement.sortie[k];
				item.push(sortieElement);
			}
		}
		data[codeRegion] = {
			pdrVisite: await getGlobalPdrVisiteRegion(
				item,
				trimestre,
				region
			),
			populationCible: getGlobalPopulationCible(item),
			ressourceHumainMobile: getGlobalRessourceHumainMobile(item),
			santeMaternelle: getGlobalSanteMaternelle(item),
			santeInfantile: getGlobalSanteInfantile(item),
			planificationFamiliale: getGlobalPlanificationFamiliale(item),
			santeScolaire: getGlobalSanteScolaire(item),
			consultationMedical: getGlobalConsultationMedical(item),
			maladieDepiste: getGlobalMaladieDepiste(item),
			autreActivite: getGlobalAutreActiviteRegion(item),
		};
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince(trimestre, region, provinceList) {
	try {
		var data = getDataInit(provinceList),
			rapport = await rapportData.getSubmitedRapportByRegionAndYearDash(
				trimestre,
				region
			);
		// ------------------------
		// province
		for (let i = 0; i < provinceList.length; i++) {
			const provinceListElement = provinceList[i];
			var item = [];
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				if (
					getProvinceCode(rapportElement.csr.province) ===
					provinceListElement
				)
					for (let k = 0; k < rapportElement.sortie.length; k++) {
						const sortieElement = rapportElement.sortie[k];
						item.push(sortieElement);
					}
			}
			data[provinceListElement] = {
				pdrVisite: await getGlobalPdrVisiteProvince(
					item,
					trimestre,
					getProvince(provinceListElement)
				),
				populationCible: getGlobalPopulationCible(item),
				ressourceHumainMobile: getGlobalRessourceHumainMobile(item),
				santeMaternelle: getGlobalSanteMaternelle(item),
				santeInfantile: getGlobalSanteInfantile(item),
				planificationFamiliale: getGlobalPlanificationFamiliale(item),
				santeScolaire: getGlobalSanteScolaire(item),
				consultationMedical: getGlobalConsultationMedical(item),
				maladieDepiste: getGlobalMaladieDepiste(item),
				autreActivite: getGlobalAutreActiviteProvince(item),
			};
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function tauxDataRegion(trimestre, region) {
	try {
		var data = {},
			rapport = await rapportData.getSubmitedRapportByRegionAndYearDash(
				trimestre,
				region
			),
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
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				// -----------------------------------
				if (
					rapportElement.csr.region === csrElement.region &&
					rapportElement.csr.province === csrElement.province &&
					rapportElement.csr.csr === csrElement.name
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
			if (array.length) res = parseFloat(total / array.length);
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

async function tauxDataProvince(trimestre, region) {
	try {
		var data = {},
			rapport = await rapportData.getSubmitedRapportByRegionAndYearDash(
				trimestre,
				region
			),
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
			// rapport
			for (let j = 0; j < rapport.length; j++) {
				const rapportElement = rapport[j];
				// -----------------------------------
				if (
					rapportElement.csr.region === csrElement.region &&
					rapportElement.csr.province === csrElement.province &&
					rapportElement.csr.csr === csrElement.name
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
async function rapport(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date(),
			provinceList;
		// get the document of the region
		data.document = await regionData.getDocument(req.params.id);
		// list province
		provinceList = getProvinceList(data.document.region);
		// taux
		data.carte = {
			region: await tauxDataRegion(
				parseInt(req.params.trimestre),
				data.document.region
			),
			province: await tauxDataProvince(
				parseInt(req.params.trimestre),
				data.document.region,
				provinceList
			),
		};
		// rapport
		data.rapport = {
			region: await dataRegion(
				req.params.trimestre,
				data.document.region
			),
			province: await dataProvince(
				req.params.trimestre,
				data.document.region,
				provinceList
			),
		};
		// render the page
		res.status(200).render('region/rapport', {
			title:
				'Tableau de bord | Rapport | Trimestre ' +
				req.params.trimestre +
				' | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			province,
			provinceList,
			trimestre: req.params.trimestre,
			page: 'rapport',
			listItem: req.params.trimestre.toString(),
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	rapport,
};
