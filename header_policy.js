'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class HeaderPolicy extends BasePolicy {

	/**
	 * Checks if the request needs to be authenticated
	 * Checks if the request contains the request header if it needs to be authenticated
	 * @param {Object} Request Validator
	 * @return {Boolean}
	 */
	static _approve(requestValidator, args) {
    //FIX ME
    //base policy should return args as undefined rather than {}
		console.log(args)
		if (!args || !Object.keys(args).length) {
            console.log(args)
			return requestValidator.hasAuthKey
		} else {
			return requestValidator.hasHeaderKey(args)
		}
	}

}

module.exports = HeaderPolicy
