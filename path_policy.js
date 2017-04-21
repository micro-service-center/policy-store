'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class PathPolicy extends BasePolicy {

	/**
	 * Checks if the Request Contains a Valid Path
	 * @param {Object} Request Validator
	 * @return {Boolean}
	 */
	static _approve(requestValidator) {
		console.log(requestValidator.paths)
		console.log(requestValidator.pathRoot)
		return requestValidator.paths.indexOf(requestValidator.pathRoot) > -1
	}

}

module.exports = PathPolicy
