// --- SET UP
const mongoose = require('mongoose');

// add year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subAll = mongoose.Schema({
	na: {
		type: Number,
		required: true,
	},
	aa: {
		type: Number,
		required: true,
	},
});

const subRefrence = mongoose.Schema({
	diu: {
		type: Number,
		required: true,
	},
	lt: {
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
		pilule: {
			type: subAll,
			required: true,
		},
		injectable: {
			type: subAll,
			required: true,
		},
		diu: {
			type: subAll,
			required: true,
		},
		condom: {
			type: subAll,
			required: true,
		},
		reference: {
			type: subRefrence,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const planificationFamiliale = mongoose.model('planificationFamiliale', schema);

module.exports = planificationFamiliale;
