'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class JWTDidNotExpirePolicy extends BasePolicy {

	/**
	 * Checks if the Request Contains a Valid Path
	 * @param {Object} Request Validator
	 * @return {Boolean}
	 */
	static _approve(userValidator, args) {
		return userValidator.now < userValidator.expires_at
	}

}

module.exports = JWTDidNotExpirePolicy
