// variables
var today = new Date();
// class
class GlobalTable {
	constructor(trimestre) {
		this.trimestre = trimestre;
		this.year = today.getFullYear();
	}
	globalPdrVisite(item, pdrVisite) {
		var objOut = {
			budgetCarburantEmConsomme: 0,
			kmParcouru: 0,
			pdr: [],
		};
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].pdrVisite) {
				const element = item[i].pdrVisite;
				objOut.kmParcouru += element.kmParcouru;
				objOut.budgetCarburantEmConsomme +=
					element.budgetCarburantEmConsomme;
			}
		}
		for (let j = 0; j < pdrVisite.length; j++) {
			const element = pdrVisite[j];
			if (element.sortieEffectue.total) {
				objOut.pdr.push({
					pdr: element.pdr,
					sortieEffectue: element.sortieEffectue.total,
					observation: element.sortieEffectue.observation,
					sortieProgramme: element.sortieProgramme,
				});
			}
		}
		if (
			objOut.budgetCarburantEmConsomme == 0 &&
			objOut.kmParcouru == 0 &&
			objOut.pdr.length == 0
		)
			return null;
		return objOut;
	}
	globalConsultationMedical(item) {
		var objOut = {};
		objOut.consultationRealise = {};
		objOut.consultationRealise.m = {
			moins5ans: 0,
			entre5ans18ans: 0,
			plus18ans: 0,
		};
		objOut.consultationRealise.f = {
			moins5ans: 0,
			entre5ans18ans: 0,
			plus18ans: 0,
		};
		objOut.pecParPem = { moins5ans: 0, entre5ans18ans: 0, plus18ans: 0 };
		objOut.reference = {};
		objOut.reference.consSpec = {
			moins5ans: 0,
			entre5ans18ans: 0,
			plus18ans: 0,
		};
		objOut.reference.urgence = {
			moins5ans: 0,
			entre5ans18ans: 0,
			plus18ans: 0,
		};
		objOut.reference.exLabo = {
			moins5ans: 0,
			entre5ans18ans: 0,
			plus18ans: 0,
		};
		objOut.reference.exRadio = {
			moins5ans: 0,
			entre5ans18ans: 0,
			plus18ans: 0,
		};
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
				objOut.reference.urgence.moins5ans +=
					element.reference.urgence.moins5ans;
				objOut.reference.exLabo.moins5ans +=
					element.reference.exLabo.moins5ans;
				objOut.reference.exRadio.moins5ans +=
					element.reference.exRadio.moins5ans;

				objOut.consultationRealise.m.entre5ans18ans +=
					element.consultationRealise.m.entre5ans18ans;
				objOut.consultationRealise.f.entre5ans18ans +=
					element.consultationRealise.f.entre5ans18ans;
				objOut.pecParPem.entre5ans18ans +=
					element.pecParPem.entre5ans18ans;
				objOut.reference.consSpec.entre5ans18ans +=
					element.reference.consSpec.entre5ans18ans;
				objOut.reference.urgence.entre5ans18ans +=
					element.reference.urgence.entre5ans18ans;
				objOut.reference.exLabo.entre5ans18ans +=
					element.reference.exLabo.entre5ans18ans;
				objOut.reference.exRadio.entre5ans18ans +=
					element.reference.exRadio.entre5ans18ans;

				objOut.consultationRealise.m.plus18ans +=
					element.consultationRealise.m.plus18ans;
				objOut.consultationRealise.f.plus18ans +=
					element.consultationRealise.f.plus18ans;
				objOut.pecParPem.plus18ans += element.pecParPem.plus18ans;
				objOut.reference.consSpec.plus18ans +=
					element.reference.consSpec.plus18ans;
				objOut.reference.urgence.plus18ans +=
					element.reference.urgence.plus18ans;
				objOut.reference.exLabo.plus18ans +=
					element.reference.exLabo.plus18ans;
				objOut.reference.exRadio.plus18ans +=
					element.reference.exRadio.plus18ans;

				objOut.budgetMedicamentDispenseEm +=
					element.budgetMedicamentDispenseEm;
			}
		}
		return objOut;
	}
	globalDetectionPrecoceCancer(item) {
		var objOut = {};
		objOut.femmeExamine = {
			cancerSein: 0,
			cancerCol: 0,
		};
		objOut.femmeRefere = {
			cancerSein: 0,
			cancerCol: 0,
		};
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].detectionPrecoceCancer) {
				const element = item[i].detectionPrecoceCancer;
				objOut.femmeExamine.cancerSein +=
					element.femmeExamine.cancerSein;
				objOut.femmeExamine.cancerCol += element.femmeExamine.cancerCol;
				objOut.femmeRefere.cancerSein += element.femmeRefere.cancerSein;
				objOut.femmeRefere.cancerCol += element.femmeRefere.cancerCol;
			}
		}
		return objOut;
	}
	globalPopulationCible(item) {
		var objOut = {};
		objOut.populationCible = 0;
		objOut.fmar = 0;
		objOut.enfant = {
			naissanceAttendu: 0,
			moins1ans: 0,
			moins5ans: 0,
		};
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].populationCible) {
				const element = item[i].populationCible;
				objOut.populationCible += element.populationCible;
				objOut.fmar += element.fmar;
				objOut.enfant.naissanceAttendu +=
					element.enfant.naissanceAttendu;
				objOut.enfant.moins1ans += element.enfant.moins1ans;
				objOut.enfant.moins5ans += element.enfant.moins5ans;
			}
		}
		return objOut;
	}
	globalRessourceHumainMobile(item) {
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
	globalRessourceHumain(item) {
		var objOut = {};
		objOut = {
			medecin: 0,
			infirmier: 0,
			sageFemme: 0,
			technicien: 0,
			chauffeur: 0,
			appuie: 0,
			emOperationnelle: 0
		};
		for (let i = 0; i < item.length; i++) {
			const element = item[i].mobile;
			objOut.medecin += element.medecin;
			objOut.infirmier += element.infirmier;
			objOut.sageFemme += element.sageFemme;
			objOut.technicien += element.technicien;
			objOut.chauffeur += element.chauffeur;
			objOut.appuie += element.appuie;
			objOut.emOperationnelle += element.emOperationnelle;
		}
		return objOut;
	}
	globalSanteMaternelle(item) {
		var objOut = {};
		objOut.femmePriseCharge = 0;
		objOut.cpn = {
			nouvelleInscrite: {
				t1: 0,
				t2: 0,
				t3: 0,
			},
			ancienneInscrite: {
				t1: 0,
				t2: 0,
				t3: 0,
			},
		};
		objOut.autreConsultation = 0;
		objOut.femmeExaminePostNatal = 0;
		objOut.garDepiste = 0;
		objOut.vat = 0;
		objOut.reference = 0;
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].santeMaternelle) {
				const element = item[i].santeMaternelle;
				objOut.femmePriseCharge += element.femmePriseCharge;

				objOut.cpn.nouvelleInscrite.t1 +=
					element.cpn.nouvelleInscrite.t1;
				objOut.cpn.nouvelleInscrite.t2 +=
					element.cpn.nouvelleInscrite.t2;
				objOut.cpn.nouvelleInscrite.t3 +=
					element.cpn.nouvelleInscrite.t3;

				objOut.cpn.ancienneInscrite.t1 +=
					element.cpn.ancienneInscrite.t1;
				objOut.cpn.ancienneInscrite.t2 +=
					element.cpn.ancienneInscrite.t2;
				objOut.cpn.ancienneInscrite.t3 +=
					element.cpn.ancienneInscrite.t3;

				objOut.autreConsultation += element.autreConsultation;
				objOut.femmeExaminePostNatal += element.femmeExaminePostNatal;
				objOut.garDepiste += element.garDepiste;
				objOut.vat += element.vat;
				objOut.reference += element.reference;
			}
		}
		return objOut;
	}
	globalSanteInfantile(item) {
		var objOut = {};
		objOut.enfantPrisesCharge = 0;
		objOut.vaccination = {
			pentavalent: 0,
			rr: 0,
			bcg: 0,
		};
		objOut.vitamineA = 0;
		objOut.vitamineD = 0;
		objOut.enfantsAvecInsuffisancePonderale = 0;
		objOut.enfantsAvecRetardCroissance = 0;
		objOut.diarrhe = 0;
		objOut.ira = 0;
		objOut.reference = 0;
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].santeInfantile) {
				const element = item[i].santeInfantile;

				objOut.enfantPrisesCharge += element.enfantPrisesCharge;

				objOut.vaccination.bcg += element.vaccination.bcg;
				objOut.vaccination.rr += element.vaccination.rr;
				objOut.vaccination.pentavalent +=
					element.vaccination.pentavalent;

				objOut.vitamineA += element.vitamineA;
				objOut.vitamineD += element.vitamineD;
				objOut.enfantsAvecInsuffisancePonderale +=
					element.enfantsAvecInsuffisancePonderale;
				objOut.enfantsAvecRetardCroissance +=
					element.enfantsAvecRetardCroissance;
				objOut.diarrhe += element.diarrhe;
				objOut.ira += element.ira;
				objOut.reference += element.reference;
			}
		}
		return objOut;
	}
	globalPlanificationFamiliale(item) {
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
	globalMaladieDepiste(item) {
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
		objOut.tuberculosePolmonaire = {
			cas: 0,
			casPec: 0,
			reference: 0,
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
				objOut.maladieMentale.reference +=
					element.maladieMentale.reference;

				objOut.ist.cas += element.ist.cas;
				objOut.ist.casPec += element.ist.casPec;
				objOut.ist.reference += element.ist.reference;

				objOut.raa.avecCardites.cas += element.raa.avecCardites.cas;
				objOut.raa.avecCardites.casPec +=
					element.raa.avecCardites.casPec;
				objOut.raa.avecCardites.reference +=
					element.raa.avecCardites.reference;
				objOut.raa.sansCardites.cas += element.raa.sansCardites.cas;
				objOut.raa.sansCardites.casPec +=
					element.raa.sansCardites.casPec;
				objOut.raa.sansCardites.reference +=
					element.raa.sansCardites.reference;

				objOut.tuberculosePolmonaire.cas +=
					element.tuberculosePolmonaire.cas;
				objOut.tuberculosePolmonaire.casPec +=
					element.tuberculosePolmonaire.casPec;
				objOut.tuberculosePolmonaire.reference +=
					element.tuberculosePolmonaire.reference;
			}
		}
		return objOut;
	}
	globalSanteScolaire(item) {
		var objOut = {};
		objOut.etablissementVisite = 0;
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
			if (item[i] && item[i].santeScolaire) {
				const element = item[i].santeScolaire;
				objOut.etablissementVisite += element.etablissementVisite;
				objOut.eleveExamineVms.cible += element.eleveExamineVms.cible;
				objOut.eleveExamineVms.realisation +=
					element.eleveExamineVms.realisation;

				objOut.lutteContreDeficienceVisuelle.echelleMetrique.cible +=
					element.lutteContreDeficienceVisuelle.echelleMetrique.cible;
				objOut.lutteContreDeficienceVisuelle.echelleMetrique.realisation +=
					element.lutteContreDeficienceVisuelle.echelleMetrique.realisation;

				objOut.lutteContreDeficienceVisuelle.refractionAutomatique.cible +=
					element.lutteContreDeficienceVisuelle.refractionAutomatique.cible;
				objOut.lutteContreDeficienceVisuelle.refractionAutomatique.realisation +=
					element.lutteContreDeficienceVisuelle.refractionAutomatique.realisation;
			}
		}
		return objOut;
	}
	globalAutreActivite(item) {
		var objOut = {
			activity: [],
		};
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].autreActivite && !item[i].ignore) {
				const element = item[i].autreActivite.activity;
				for (let j = 0; j < element.length; j++) {
					const ele = element[j];
					objOut.activity.push(ele);
				}
			}
		}
		return objOut;
	}
	globalAutreActiviteAll(item) {
		var objOut = {};
		for (let i = 0; i < item.length; i++) {
			if (item[i] && item[i].autreActivite && !item[i].ignore) {
				const element = item[i].autreActivite;
				objOut[element.csr.csr] = {
					activity: [],
				}
				for (let j = 0; j < element.activity.length; j++) {
					const ele = element.activity[j];
					objOut[element.csr.csr].activity.push(ele);
				}
			}
		}
		return objOut;
	}
}

module.exports = {
	GlobalTable,
};
