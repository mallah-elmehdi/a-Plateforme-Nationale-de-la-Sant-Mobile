// --- SET UP
const mongoose = require('mongoose');
const { db } = require('./conf');

// --- CONNECT TO THE CLOUD
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => {
    console.log('database connected succefully...');
}).catch(err => {
    console.log(err);
})