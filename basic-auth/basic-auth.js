const crypto = require('crypto');

function sha1Encode(data) {
    return crypto.createHash("sha1").update(data).digest("hex");
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    console.log(authorization)
    const var2 = authorization.replace('Basic ', '');
    
    const encoded = sha1Encode(var2)

    const decoded = Buffer.from(encoded, 'hex').toString('utf8').split(':');

    
    const isValid = decoded[0] === 'node'
    && decoded[1] === 'password';

    // si pas authentifié
    isValid ? next() : response.sendStatus(401);
}