'use strict'
const BasePolicy = require('tool-policy').Policy
// const BasePolicy = require('./base')

/** Class for User Policy */
class RateLimitPolicy extends BasePolicy {

	/**
	 * Checks if the Request Contains a Valid Path
	 * @param {Object} Request Validator
	 * @return {Boolean}
	 */
	static _approve(requestValidator, args) {
		requestValidator.enforceRateLimit(args)
		return true
	}

}

module.exports = RateLimitPolicy
