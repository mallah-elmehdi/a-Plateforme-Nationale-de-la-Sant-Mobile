// SET UP
const provinceData = require('../../../data/province');
const santeMaternelleData = require('../../../data/csr/rapport/santeMaternelle');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteSanteMaternelleProvince(province, csrList) {
	try {
		var data = {
				femmePriseCharge: {
					data: carte.initCsrData(csrList),
				},
				cpnNouvelleInscriteT1: {
					data: carte.initCsrData(csrList),
				},
				cpnNouvelleInscriteT2: {
					data: carte.initCsrData(csrList),
				},
				cpnNouvelleInscriteT3: {
					data: carte.initCsrData(csrList),
				},
				cpnAncienneInscriteT1: {
					data: carte.initCsrData(csrList),
				},
				cpnAncienneInscriteT2: {
					data: carte.initCsrData(csrList),
				},
				cpnAncienneInscriteT3: {
					data: carte.initCsrData(csrList),
				},
				autreConsultation: {
					data: carte.initCsrData(csrList),
				},
				femmeExaminePostNatal: {
					data: carte.initCsrData(csrList),
				},
				garDepiste: {
					data: carte.initCsrData(csrList),
				},
				vat: {
					data: carte.initCsrData(csrList),
				},
				reference: {
					data: carte.initCsrData(csrList),
				},
			},
			santeMaternelle =
				await santeMaternelleData.getSanteMaternelleByProvince(
					province
				);
		// santeMaternelle
		for (let j = 0; j < santeMaternelle.length; j++) {
			// santeMaternelle element
			const santeMaternelleElement = santeMaternelle[j];
			// sum
			// femmePriseCharge
			data.femmePriseCharge.data[santeMaternelleElement.csr.csr].value +=
				santeMaternelleElement.femmePriseCharge;
			// cpnNouvelleInscriteT1
			data.cpnNouvelleInscriteT1.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.cpn.nouvelleInscrite.t1;
			// cpnNouvelleInscriteT2
			data.cpnNouvelleInscriteT2.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.cpn.nouvelleInscrite.t2;
			// cpnNouvelleInscriteT3
			data.cpnNouvelleInscriteT3.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.cpn.nouvelleInscrite.t3;
			// cpnAncienneInscriteT1
			data.cpnAncienneInscriteT1.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.cpn.ancienneInscrite.t1;
			// cpnAncienneInscriteT2
			data.cpnAncienneInscriteT2.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.cpn.ancienneInscrite.t2;
			// cpnAncienneInscriteT3
			data.cpnAncienneInscriteT3.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.cpn.ancienneInscrite.t3;
			// autreConsultation
			data.autreConsultation.data[santeMaternelleElement.csr.csr].value +=
				santeMaternelleElement.autreConsultation;
			// femmeExaminePostNatal
			data.femmeExaminePostNatal.data[
				santeMaternelleElement.csr.csr
			].value += santeMaternelleElement.garDepiste;
			// garDepiste
			data.garDepiste.data[santeMaternelleElement.csr.csr].value +=
				santeMaternelleElement.femmeExaminePostNatal;
			// vat
			data.vat.data[santeMaternelleElement.csr.csr].value +=
				santeMaternelleElement.vat;
			// reference
			data.reference.data[santeMaternelleElement.csr.csr].value +=
				santeMaternelleElement.reference;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function santeMaternelle(req, res, next) {
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
		data.provinceData = await carteSanteMaternelleProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/santeMaternelle', {
			title:
				'Tableau de bord | Santé maternelle | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'santeMaternelle',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	santeMaternelle,
};
