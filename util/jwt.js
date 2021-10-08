// SET UP
const jwt = require('jsonwebtoken');
const { tokenOption } = require('../conf')
const { newError } = require('../util/error')

// CREAT A TOKEN FROM A ID
async function creatTokenById(id) {   
    return await jwt.sign({ id }, tokenOption.jwtSecret, { expiresIn: tokenOption.jwtExpirationDate });
}

// DECODE THE ID FROM THE TOKEN
async function getIdByToken(token) {   
        const decode = await jwt.verify(token, tokenOption.jwtSecret);
        return decode.id;
}

// cookieOption
const cookieOption = {
    httpOnly: true,
    expires: new Date(Date.now() + tokenOption.jwtExpirationDate),
};

module.exports = {
    creatTokenById,
    getIdByToken,
    cookieOption,
};