'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class PasswordUnchangedPolicy extends BasePolicy {

	/**
	 * Checks if the Request Contains a Valid Path
	 * @param {Object} Request Validator
	 * @return {Boolean}
	 */
	static _approve(userValidator, args) {
		return userValidator.issued_at > userValidator.change_pwd_at
	}

}

module.exports = PasswordUnchangedPolicy
