// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		region: {
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
	},
	{ timestamps: true }
);

// --- MODEL
const region = mongoose.model('region', schema);

module.exports = region;
