// SET UP
const fs = require('fs');
const provinceData = require('../../../data/province');
const pdrVisiteData = require('../../../data/csr/rapport/pdrVisite');
const programmeData = require('../../../data/csr/planAction/programme');

// ERROR
const { newError } = require('../../../util/error');

const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

const csr = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/csr.json`)
);

function getCommuneDataInit(code) {
	var list = {};
	for (let i = 0; i < csr.length; i++) {
		const csrElement = csr[i];
		if (csrElement.codeProvince == code) {
			list[csrElement.commune] = [];
		}
	}
	return list;
}

function getProvinceCode(pro) {
	for (let i = 0; i < province.length; i++) {
		const provinceElement = province[i];
		if (provinceElement.province === pro) {
			return provinceElement.codeProvince;
		}
	}
}

// PDR COVER PROVINCE
async function dataProvince(province) {
	try {
		var codeProvince = getProvinceCode(province),
			data = {
				pdrVisite: {
					data: { [codeProvince]: 0 },
				},
			},
			pdr = await programmeData.getProgrammeByProvinceAndYear(province),
			pdrVisite = await pdrVisiteData.getPdrVisiteByProvinceAndYear(
				province
			),
			list = {
				[codeProvince]: [],
			};
		// ------------------------
		// csr
		for (let i = 0; i < csr.length; i++) {
			var csrElement = csr[i],
				pdrProgramme = 0,
				pdrRealise = 0;
			if (csrElement.codeProvince == codeProvince) {
				// pdr
				for (let j = 0; j < pdr.length; j++) {
					var pdrElement = pdr[j];
					if (
						csrElement.region === pdrElement.csr.region &&
						csrElement.province === pdrElement.csr.province &&
						csrElement.name === pdrElement.csr.csr
					) {
						pdrProgramme +=
							pdrElement.t1 +
							pdrElement.t2 +
							pdrElement.t3 +
							pdrElement.t4;
						// pdr visite
						for (let k = 0; k < pdrVisite.length; k++) {
							for (
								let l = 0;
								l < pdrVisite[k].pdrVisite.length;
								l++
							) {
								var pdrVisiteElement =
									pdrVisite[k].pdrVisite[l];
								if (pdrElement.id === pdrVisiteElement.id) {
									pdrRealise++;
								}
							}
						}
					}
				}
				if (!pdrRealise) {
					list[codeProvince].push(0);
				} else {
					list[codeProvince].push(
						parseFloat(pdrRealise / pdrProgramme) * 100
					);
				}
			}
		}
		for (const key in list) {
			var element = list[key],
				sum = 0;
			for (let n = 0; n < element.length; n++) {
				sum += element[n];
			}
			if (element.length) {
				var num = parseFloat(sum / element.length);
				if (num < 1 && num > 0) {
					data.pdrVisite.data[key] = num.toFixed(1);
				} else {
					data.pdrVisite.data[key] = parseInt(num);
				}
			} else {
				data.pdrVisite.data[key] = 0;
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function pdrVisite(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the region
		data.document = await provinceData.getDocument(req.params.id);
		// taux pdr visite
		data.carte = {
			province: await dataProvince(data.document.province),
		};
		// render the page
		res.status(200).render('province/dashboard/pdrVisite', {
			title:
				'Tableau de bord | Taux de couverture des pdr | ' +
				today.getFullYear(),
			url: req.originalUrl,
			data,
			codeProvince: getProvinceCode(data.document.province),
			page: 'dashboard',
			listItem: 'pdrVisite',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	pdrVisite,
};
