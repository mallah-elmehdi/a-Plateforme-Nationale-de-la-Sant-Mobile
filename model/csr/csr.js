// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		region: {
			type: String,
			required: true,
		},
		codeRegion: String,
		province: {
			type: String,
			required: true,
		},
		codeProvince: String,
        cs: {
            type: String,
            required: true,
        },
		commune: {
			type: String,
			required: true,
        },
		codeCommune: String,
		csr: {
			type: String,
			required: true,
		},
		codeCsr: String,
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
		password: String,
	},
	{ timestamps: true }
);

// --- MODEL
const csr = mongoose.model('csr', schema);

module.exports = csr;
