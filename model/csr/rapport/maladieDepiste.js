// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subMaladie = mongoose.Schema({
	cas: {
		type: Number,
		required: true,
	},
	casPec: {
		type: Number,
		required: true,
	},
	reference: {
		type: Number,
		required: true,
	},
});
const subRaa = mongoose.Schema({
	avecCardites: {
		type: subMaladie,
		required: true,
	},
	sansCardites: {
		type: subMaladie,
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
		diabete: {
			type: subMaladie,
			required: true,
		},
		hta: {
			type: subMaladie,
			required: true,
		},
		angine: {
			type: subMaladie,
			required: true,
		},
		raa: {
			type: subRaa,
			required: true,
		},
		carie: {
			type: subMaladie,
			required: true,
		},
		parodontopathie: {
			type: subMaladie,
			required: true,
		},
		maladieMentale: {
			type: subMaladie,
			required: true,
		},
		ist: {
			type: subMaladie,
			required: true,
		},
		tuberculosePolmonaire: {
			type: subMaladie,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const maladieDepiste = mongoose.model('maladieDepiste', schema);

module.exports = maladieDepiste;
