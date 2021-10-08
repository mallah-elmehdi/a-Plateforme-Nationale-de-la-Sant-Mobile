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
const province = mongoose.model('province', schema);

module.exports = province;
