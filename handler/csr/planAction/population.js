// SET UP
const csrData = require('../../../data/csr/csr');
const populationData = require('../../../data/csr/planAction/population');
const { populationForm } = require('../util');

// ADD POPULATION FORM
async function addPopulation(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the csr
		data.document = await csrData.getDocument(req.params.id);
		// get the population of this year
		data.population = await populationData.getPopulationByCsr(
			req.params.id
		);
		// render the page
		return res.status(200).render('csr/planAction/addPopulation', {
			title:
				data.document.csr +
				' | Population à couvrir | ' +
				today.getFullYear(),
			url: req.originalUrl,
			form: populationForm,
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}
// ADD POPULATION TO THE DATABASE
async function addPopulationData(req, res, next) {
	try {
		res.locals = {
			body: {
				population: await populationData.addUpdatePopulation(
					req.body,
					req.params.id,
					req.query.id
				),
			},
			url: req.baseUrl + '/' + req.params.id + '/add-population'
		};
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// OUTPUT
module.exports = {
	addPopulation,
	addPopulationData,
};
