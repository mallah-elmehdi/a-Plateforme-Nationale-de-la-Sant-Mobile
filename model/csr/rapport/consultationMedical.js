// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subAll = mongoose.Schema({
	moins5ans: {
		type: Number,
		required: true,
	},
	entre5ans18ans: {
		type: Number,
		required: true,
	},
	plus18ans: {
		type: Number,
		required: true,
	},
});
const subConsultation = mongoose.Schema({
	m: {
		type: subAll,
		required: true,
	},
	f: {
		type: subAll,
		required: true,
	},
});
const subReference = mongoose.Schema({
	consSpec: {
		type: subAll,
		required: true,
	},
	urgence: {
		type: subAll,
		required: true,
	},
	exLabo: {
		type: subAll,
		required: true,
	},
	exRadio: {
		type: subAll,
		required: true,
	},
});

// --- CREAT A SCHEMA
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
		consultationRealise: {
			type: subConsultation,
			required: true,
		},
		pecParPem: {
			type: subAll,
			required: true,
		},
		reference: {
			type: subReference,
			required: true,
		},
		budgetMedicamentDispenseEm: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const consultationMedical = mongoose.model('consultationMedical', schema);

module.exports = consultationMedical;
