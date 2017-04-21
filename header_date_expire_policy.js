'use strict'
const BasePolicy = require('tool-policy').Policy

class HeaderDateExpirePolicy extends BasePolicy {
    /**
     * auth header date
     * @param SignatureRequestValidator
     * @param args
     * @returns {*}
     * @private.pem
     */
    static _approve(SignatureRequestValidator, args) {
        return SignatureRequestValidator.checkHeaderDate()
    }
}

module.exports = HeaderDateExpirePolicy
