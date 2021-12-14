// SET UP
const dotenv =  require('dotenv');

// CONFIGURATION
dotenv.config({ path: './conf.env' });

// RETURN
module.exports = {
    db: process.env.mongodb,
    sessionSecret: process.env.sessionSecret,
    tokenOption: {
        jwtSecret: process.env.jwtSecret,
        jwtExpirationDate: process.env.jwtExpirationDate,
    },
}