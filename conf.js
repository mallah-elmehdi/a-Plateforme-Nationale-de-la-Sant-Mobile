// SET UP
const dotenv =  require('dotenv');

// CONFIGURATION
dotenv.config({ path: './conf.env' });

// RETURN
module.exports = {
    db: process.env.mongodb.replace('<password>', process.env.mongodbPassword),
    firebaseConfig: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId
    },
    sessionSecret: process.env.sessionSecret,
    tokenOption: {
        jwtSecret: process.env.jwtSecret,
        jwtExpirationDate: process.env.jwtExpirationDate,
    },
}