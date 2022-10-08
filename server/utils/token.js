const jwt = require('jsonwebtoken')
const SECRET = "iujhgfagjhsfjadfkjgadfjkadkjfdajfsdasd545665";

function sign(payload) {
    return jwt.sign(payload, SECRET, {
        expiresIn: '5d',
    })
}

function verify(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch (err) {
        throw new Error('Error in verifying the token');
    }
}

function decode(token) {
    return jwt.decode(token);
}


module.exports = {
    sign,
    verify,
    decode
}

