'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class JWTUserExistPolicy extends BasePolicy {

	/**
	 * In Class Approve Method
	 * Calls the constructor method
	 * @param  {validator} validator [description]
	 */
	approve(validator) {
		return validator.get_change_pwd_at(this)
	}

}

module.exports = JWTUserExistPolicy
