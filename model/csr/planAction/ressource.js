// --- SET UP
const mongoose = require('mongoose');

// add a year
var today = new Date();
var thisYear = today.getFullYear();

// --- SUB SCHEMA
const subBudget = mongoose.Schema({
	kmsParcourir: {
		type: Number,
		required: true,
	},
	besoinCarburant: {
		type: Number,
		required: true,
	},
});
const subVehicule = mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	appartenance: {
		type: String,
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
		csr: {
			type: mongoose.Schema.ObjectId,
			ref: 'csr',
			required: true,
		},
		vehicule: {
			type: [subVehicule],
			required: true,
		},
		besoinUsm: {
			type: Number,
			required: true,
		},
		budget: {
			type: subBudget,
			required: true,
		},
		observation: String,
	},
	{ timestamps: true }
);

// --- MODEL
const ressource = mongoose.model('ressource', schema);

module.exports = ressource;
