// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

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
		kmParcouru: {
			type: Number,
			required: true,
		},
		budgetCarburantEmConsomme: {
			type: Number,
			required: true,
		},
		pdrVisite: {
			type: mongoose.Schema.ObjectId,
			ref: 'programme',
			required: true,
		},
		realise: {
			type: Number,
			default: 1,
			required: true,
		},
		observation: String,
	},
	{ timestamps: true }
);

// --- MODEL
const pdrVisite = mongoose.model('pdrVisite', schema);

module.exports = pdrVisite;
