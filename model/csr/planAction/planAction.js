// --- SET UP
const mongoose = require('mongoose');

// add a year
var today = new Date();
var thisYear = today.getFullYear();

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
		population: {
			type: mongoose.Schema.ObjectId,
			ref: 'population',
		},
		programme: {
            type: [mongoose.Schema.ObjectId],
            ref: 'programme',
		},
		ressource: {
            type: mongoose.Schema.ObjectId,
            ref: 'ressource',
		},
		ressourceHumain: {
            type: mongoose.Schema.ObjectId,
            ref: 'ressourceHumain',
		},
		submit: {
			type: Boolean,
			default: false,
			required: true,
		}
	},
	{ timestamps: true }
);

// --- MODEL
const planAction = mongoose.model('planAction', schema);

module.exports = planAction;
