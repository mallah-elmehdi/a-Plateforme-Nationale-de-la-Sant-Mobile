// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		region: {
			type: String,
			required: true,
		},
		province: {
			type: String,
			required: true,
		},
		cs: {
			type: String,
			required: true,
		},
		commune: {
			type: String,
			required: true,
		},
		csr: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
		},
		codeRegion: String,
		codeProvince: String,
	},
	{ timestamps: true }
);

// --- MODEL
const csr = mongoose.model('csr', schema);

module.exports = csr;
