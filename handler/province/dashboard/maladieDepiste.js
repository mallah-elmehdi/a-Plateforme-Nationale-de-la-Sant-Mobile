// SET UP
const provinceData = require('../../../data/province');
const maladieDepisteData = require('../../../data/csr/rapport/maladieDepiste');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteMaladieDepisteProvince(province, csrList) {
	try {
		var data = {
				diabeteCas: {
					data: carte.initCsrData(csrList),
				},
				diabeteCasPec: {
					data: carte.initCsrData(csrList),
				},
				diabeteReference: {
					data: carte.initCsrData(csrList),
				},
				htaCas: {
					data: carte.initCsrData(csrList),
				},
				htaCasPec: {
					data: carte.initCsrData(csrList),
				},
				htaReference: {
					data: carte.initCsrData(csrList),
				},
				angineCas: {
					data: carte.initCsrData(csrList),
				},
				angineCasPec: {
					data: carte.initCsrData(csrList),
				},
				angineReference: {
					data: carte.initCsrData(csrList),
				},
				carieCas: {
					data: carte.initCsrData(csrList),
				},
				carieCasPec: {
					data: carte.initCsrData(csrList),
				},
				carieReference: {
					data: carte.initCsrData(csrList),
				},
				parodontopathieCas: {
					data: carte.initCsrData(csrList),
				},
				parodontopathieCasPec: {
					data: carte.initCsrData(csrList),
				},
				parodontopathieReference: {
					data: carte.initCsrData(csrList),
				},
				maladieMentaleCas: {
					data: carte.initCsrData(csrList),
				},
				maladieMentaleCasPec: {
					data: carte.initCsrData(csrList),
				},
				maladieMentaleReference: {
					data: carte.initCsrData(csrList),
				},
				istCas: {
					data: carte.initCsrData(csrList),
				},
				istCasPec: {
					data: carte.initCsrData(csrList),
				},
				istReference: {
					data: carte.initCsrData(csrList),
				},
				raaAvecCarditesCas: {
					data: carte.initCsrData(csrList),
				},
				raaAvecCarditesCasPec: {
					data: carte.initCsrData(csrList),
				},
				raaAvecCarditesReference: {
					data: carte.initCsrData(csrList),
				},
				raaSansCarditesCas: {
					data: carte.initCsrData(csrList),
				},
				raaSansCarditesCasPec: {
					data: carte.initCsrData(csrList),
				},
				raaSansCarditesReference: {
					data: carte.initCsrData(csrList),
				},
				tuberculosePolmonaireCas: {
					data: carte.initCsrData(csrList),
				},
				tuberculosePolmonaireCasPec: {
					data: carte.initCsrData(csrList),
				},
				tuberculosePolmonaireReference: {
					data: carte.initCsrData(csrList),
				},
			},
			maladieDepiste =
				await maladieDepisteData.getMaladieDepisteByProvince(
					province
				);
		// maladieDepiste
		for (let j = 0; j < maladieDepiste.length; j++) {
			// maladieDepiste element
			const maladieDepisteElement = maladieDepiste[j];
			// sum
			// diabeteCas
			data.diabeteCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.diabete.cas;
			// diabeteCasPec
			data.diabeteCasPec.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.diabete.casPec;
			// diabeteReference
			data.diabeteReference.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.diabete.reference;
			// htaCas
			data.htaCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.hta.cas;
			// htaCasPec
			data.htaCasPec.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.hta.casPec;
			// htaReference
			data.htaReference.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.hta.reference;
			// angineCas
			data.angineCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.angine.cas;
			// angineCasPec
			data.angineCasPec.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.angine.casPec;
			// angineReference
			data.angineReference.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.angine.reference;
			// carieCas
			data.carieCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.carie.cas;
			// carieCasPec
			data.carieCasPec.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.carie.casPec;
			// carieReference
			data.carieReference.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.carie.reference;
			// parodontopathieCas
			data.parodontopathieCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.parodontopathie.cas;
			// parodontopathieCasPec
			data.parodontopathieCasPec.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.parodontopathie.casPec;
			// parodontopathieReference
			data.parodontopathieReference.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.parodontopathie.reference;
			// maladieMentaleCas
			data.maladieMentaleCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.maladieMentale.cas;
			// maladieMentaleCasPec
			data.maladieMentaleCasPec.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.maladieMentale.casPec;
			// maladieMentaleReference
			data.maladieMentaleReference.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.maladieMentale.reference;
			// istCas
			data.istCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.ist.cas;
			// istCasPec
			data.istCasPec.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.ist.casPec;
			// istReference
			data.istReference.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.ist.reference;
			// raaAvecCarditesCas
			data.raaAvecCarditesCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.raa.avecCardites.cas;
			// raaAvecCarditesCasPec
			data.raaAvecCarditesCasPec.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.raa.avecCardites.casPec;
			// raaAvecCarditesReference
			data.raaAvecCarditesReference.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.raa.avecCardites.reference;
			// raaSansCarditesCas
			data.raaSansCarditesCas.data[maladieDepisteElement.csr.csr].value +=
				maladieDepisteElement.raa.sansCardites.cas;
			// raaSansCarditesCasPec
			data.raaSansCarditesCasPec.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.raa.sansCardites.casPec;
			// raaSansCarditesReference
			data.raaSansCarditesReference.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.raa.sansCardites.reference;
			// tuberculosePolmonaireCas
			data.tuberculosePolmonaireCas.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.tuberculosePolmonaire.cas;
			// tuberculosePolmonaireCasPec
			data.tuberculosePolmonaireCasPec.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.tuberculosePolmonaire.casPec;
			// tuberculosePolmonaireReference
			data.tuberculosePolmonaireReference.data[
				maladieDepisteElement.csr.csr
			].value += maladieDepisteElement.tuberculosePolmonaire.reference;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function maladieDepiste(req, res, next) {
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
		data.provinceData = await carteMaladieDepisteProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/maladieDepiste', {
			title:
				'Tableau de bord | Maladies dépistées | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'maladieDepiste',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	maladieDepiste,
};
