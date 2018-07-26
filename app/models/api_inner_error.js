
const ErrorCodes = require('./error_codes');

class ApiInnerError {

  constructor(code) {
    this.value = '';
    this.resource = '';
    this.field = '';
    this.code = code || ErrorCodes.Invalid; // default is invalid
  }
}

module.exports = ApiInnerError;