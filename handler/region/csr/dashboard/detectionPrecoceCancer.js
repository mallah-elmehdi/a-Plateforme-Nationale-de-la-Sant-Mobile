// SET UP
const provinceData = require('../../../data/province');
const detectionPrecoceCancerData = require('../../../data/csr/rapport/detectionPrecoceCancer');
const { Carte } = require('../../../class/carte');
const carte = new Carte();

// ERROR
const { newError } = require('../../../util/error');

// CARTE PROVINCE
async function carteDetectionPrecoceCancerProvince(province, csrList) {
	try {
		var data = {
				femmeExamineCancerSein: {
					data: carte.initCsrData(csrList),
				},
				femmeExamineCancerCol: {
					data: carte.initCsrData(csrList),
				},
				femmeRefereCancerSein: {
					data: carte.initCsrData(csrList),
				},
				femmeRefereCancerCol: {
					data: carte.initCsrData(csrList),
				},
			},
			detectionPrecoceCancer =
				await detectionPrecoceCancerData.getDetectionPrecoceCancerByProvince(
					province
				);
		// detectionPrecoceCancer
		for (let j = 0; j < detectionPrecoceCancer.length; j++) {
			// detectionPrecoceCancer element
			const detectionPrecoceCancerElement = detectionPrecoceCancer[j];
			// sum
			// femmeExamineCancerSein
			data.femmeExamineCancerSein.data[
				detectionPrecoceCancerElement.csr.csr
			].value += detectionPrecoceCancerElement.femmeExamine.cancerSein;
			// femmeExamineCancerCol
			data.femmeExamineCancerCol.data[
				detectionPrecoceCancerElement.csr.csr
			].value += detectionPrecoceCancerElement.femmeExamine.cancerCol;
			// femmeRefereCancerSein
			data.femmeRefereCancerSein.data[
				detectionPrecoceCancerElement.csr.csr
			].value += detectionPrecoceCancerElement.femmeRefere.cancerSein;
			// femmeRefereCancerCol
			data.femmeRefereCancerCol.data[
				detectionPrecoceCancerElement.csr.csr
			].value += detectionPrecoceCancerElement.femmeRefere.cancerCol;
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function detectionPrecoceCancer(req, res, next) {
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
		data.provinceData = await carteDetectionPrecoceCancerProvince(
			data.document.province,
			csrList
		);
		// render the page
		res.status(200).render('province/dashboard/detectionPrecoceCancer', {
			title:
				'Tableau de bord | Détection précoce des cancers du sein et du col de l’utérus | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince,
			csrList,
			page: 'prestation',
			listItem: 'detectionPrecoceCancer',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	detectionPrecoceCancer,
};
