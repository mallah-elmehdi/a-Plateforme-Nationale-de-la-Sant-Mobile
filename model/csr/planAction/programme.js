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
		pdr: {
			type: String,
			required: true,
		},
		distance: {
            type: Number,
			required: true,
        },
		accessibility: {
            type: String,
			required: true,
        },
		localite: {
			type: [String],
			required: true,
		},
		t1: {
			type: Number,
			required: true,
		},
		t2: {
			type: Number,
			required: true,
		},
		t3: {
			type: Number,
			required: true,
		},
		t4: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const programme = mongoose.model('programme', schema);

module.exports = programme;
