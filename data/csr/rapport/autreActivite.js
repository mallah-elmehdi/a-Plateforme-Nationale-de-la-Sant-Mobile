// SET UP
const autreActivite = require('../../../model/csr/rapport/autreActivite');

// ERROR
const { newError } = require('../../../util/error');

// REDIRECT
async function getAutreActiviteBySortie(sortie) {
	try {
		return await autreActivite.findOne({
			sortie,
		});
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ADD
async function addAutreActivite(csr, sortie, trimestre, body) {
	try {
		// update the body
		body.csr = csr;
		body.trimestre = trimestre;
		body.sortie = sortie;
		// add document
		var document = await autreActivite.create(body);
		// return the id of document
		return document.id;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// GET
async function getAutreActiviteById(id) {
	try {
		// get documet
		return await autreActivite.findById(id).select('-csr');
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// EDIT
async function editAutreActiviteById(id, body) {
	try {
		body.ignore = false;
		// edit document
		return await autreActivite.findByIdAndUpdate(id, body);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE
async function deleteAutreActiviteById(id) {
	try {
		// delete document
		return await autreActivite.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// IGNORE
async function ignoreAutreActivite(csr, trimestre, sortie) {
	try {
		// delete document
		return await autreActivite.findOneAndUpdate(
			{
				csr,
				trimestre,
				sortie,
			},
			{
				ignore: true,
				activity: [],
			},
			{
				upsert: true,
				new: true,
				setDefaultsOnInsert: true,
			}
		);
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// ------------ ACTIVITY

// EDIT ACTIVITY
async function editActivityById(id, subId, body) {
	try {
		// get the  document
		var document = await autreActivite.findById(id),
			index;
		// get the subdoc
		for (let i = 0; i < document.activity.length; i++) {
			const element = document.activity[i];
			if (element.id == subId) index = i;
		}
		// updating the subdoc
		document.activity[index].type = body.activity.type;
		document.activity[index].typeBeneficier = body.activity.typeBeneficier;
		document.activity[index].beneficier = body.activity.beneficier;
		document.activity[index].observation = body.activity.observation;
		// save the document
		return await document.save();
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DELETE ACTIVITY
async function deleteActivityById(id, subId, body) {
	try {
		// get the  document
		var document = await autreActivite.findById(id),
			index;
		// get the subdoc
		for (let i = 0; i < document.activity.length; i++) {
			const element = document.activity[i];
			if (element.id == subId) index = i;
		}
		// updating the subdoc
		document.activity.splice(index, 1);
		// save the document
		return await document.save();
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// OUTPUT
module.exports = {
	getAutreActiviteBySortie,
	addAutreActivite,
	getAutreActiviteById,
	editAutreActiviteById,
	deleteAutreActiviteById,
	ignoreAutreActivite,
	// ------------ ACTIVITY
	editActivityById,
	deleteActivityById,
};
