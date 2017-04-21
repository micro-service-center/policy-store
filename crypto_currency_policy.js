'use strict'
const BasePolicy = require('tool-policy').Policy

/** Class for User Policy */
class CryptoCurrencyPolicy extends BasePolicy {
  /**
   * Checks if the incoming currency is valid
   * @return {Boolean}
   * @param depositRequestValidator
   */
  static _approve(depositRequestValidator) {
    return depositRequestValidator.validCurrency.indexOf(depositRequestValidator.currentCurrency) > -1
  }
}

module.exports = CryptoCurrencyPolicy
