'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class RequestHasAttributePolicy extends BasePolicy {

    /**
     * Checks if the request needs to be authenticated
     * Checks if the request contains the request header if it needs to be authenticated
     * @param {Object} Request Validator
     * @return {Boolean}
     */
    static _approve(requestValidator, args) {
        let arr = []
        args.params.forEach((item) => {
            arr.push(requestValidator.request.params[item])
        })
        return requestValidator._isUndefinedOREmpty(arr)
    }
}

module.exports = RequestHasAttributePolicy
