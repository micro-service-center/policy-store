'use strict'
const BasePolicy = require('tool-policy').Policy

class SignaturePolicy extends BasePolicy {
    /**
     * parse request
     * @param signatureRequestValidator
     * @param args
     * @returns {*}
     * @private.pem
     */
    static _approve(signatureRequestValidator, args) {
        return signatureRequestValidator.checkSignature()
    }
}

module.exports = SignaturePolicy
