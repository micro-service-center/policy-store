'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class registerRequestFormatPolicy extends BasePolicy {

    /**
     * Checks if the request needs to be authenticated
     * Checks if the request contains the request header if it needs to be authenticated
     * @param {Object} Request Validator
     * @return {Boolean}
     */
    static _approve(requestValidator, args) {
        return requestValidator.loginValidate(super.requestParamsBuild(requestValidator,args))
    }

}

module.exports = registerRequestFormatPolicy
