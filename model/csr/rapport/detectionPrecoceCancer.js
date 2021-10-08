// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subCancer = mongoose.Schema({
	cancerSein: {
		type: Number,
		required: true,
	},
	cancerCol: {
		type: Number,
		required: true,
	},
});

// --- MAIN SCHEMA
const schema = mongoose.Schema(
	{
		year: {
			type: Number,
			default: thisYear,
			required: true,
		},
		trimestre: {
			type: Number,
			required: true,
		},
		csr: {
			type: mongoose.Schema.ObjectId,
			ref: 'csr',
			required: true,
		},
		sortie: {
			type: mongoose.Schema.ObjectId,
			ref: 'sortie',
			required: true,
		},
		femmeExamine: {
			type: subCancer,
			required: true,
		},
		femmeRefere: {
			type: subCancer,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const detectionPrecoceCancer = mongoose.model('detectionPrecoceCancer', schema);

module.exports = detectionPrecoceCancer;
