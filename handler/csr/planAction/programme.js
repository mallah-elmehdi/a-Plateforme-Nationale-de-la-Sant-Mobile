// SET UP
const csrData = require('../../../data/csr/csr');
const fs = require('fs');
const programmeData = require('../../../data/csr/planAction/programme');
const { programmeForm } = require('../util');

// DATA
const localite = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/localite.json`)
);

// ADITIONAL FUNCUION
function getLocalite(csr) {
	var localiteArray = [];
	for (let i = 0; i < localite.length; i++) {
		const element = localite[i];
		if (csr.commune === element.commune) {
			localiteArray.push(element.localite);
		}
	}
	if (!localiteArray.length) {
		for (let i = 0; i < localite.length; i++) {
			const element = localite[i];
			if (csr.province === element.province) {
				localiteArray.push(element.localite);
			}
		}
	}
	if (!localiteArray.length) {
		for (let i = 0; i < localite.length; i++) {
			const element = localite[i];
			if (csr.region === element.region) {
				localiteArray.push(element.localite);
			}
		}
	}
	if (!localiteArray.length) {
		for (let i = 0; i < localite.length; i++) {
			const element = localite[i];
			localiteArray.push(element.localite);
		}
	}
	return localiteArray.sort();
}

// ADD PROGRAMME
async function addProgramme(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the cs
		data.document = await csrData.getDocument(req.params.id);
		// get the programme of this year
		data.programme = await programmeData.getProgrammeByCsr(req.params.id);
		// render the page
		return res.status(200).render('csr/planAction/addProgramme', {
			title:
				data.document.csr +
				' | Programme prévisionnel des UMM | ' +
				today.getFullYear(),
			url: req.originalUrl,
			form: programmeForm,
			localite: getLocalite(data.document),
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// ADD PROGRAMME TO THE DATABASE
async function addProgrammeData(req, res, next) {
	try {
		res.locals = {
			body: {
				$addToSet: {
					programme: await programmeData.addUpdateProgramme(
						req.body,
						req.params.id,
						req.query.id
					),
				},
			},
			url: req.baseUrl + '/' + req.params.id + '/add-programme',
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// DELETE PROGRAMME FROM THE DATABASE
async function deleteProgramme(req, res, next) {
	try {
		res.locals = {
			body: {
				$pullAll: {
					programme: [
						await programmeData.deleteProgrammeById(req.params.pid),
					],
				},
			},
			url: req.baseUrl + '/' + req.params.id + '/add-programme',
			delete: true,
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	addProgramme,
	addProgrammeData,
	deleteProgramme,
};
