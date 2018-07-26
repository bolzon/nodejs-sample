
const HttpStatus = require('../helpers/http_status');

class ApiError {

  static get BadRequest() {
    return new ApiError('Requisição inválida.', HttpStatus.BadRequest);
  }

  static get Forbidden() {
    return new ApiError('Não permitido.', HttpStatus.Forbidden);
  }

  static get NotFound() {
    return new ApiError('Inexistente ou não encontrado.', HttpStatus.NotFound);
  }

  static get Unauthorized() {
    return new ApiError('Não autorizado.', HttpStatus.Unauthorized);
  }

  static get UnprocessableEntity() {
    return new ApiError('Ação inválida.', HttpStatus.UnprocessableEntity);
  }

  constructor(message, status) {
    this.errors = null;
    this.message = message || '';
    this.status = status || null;
  }

  addError(apiInnerError) {
    if (!this.errors)
      this.errors = [];
    this.errors.push(apiInnerError);
    return this;
  }

  get hasInnerErrors() {
    return this.errors && this.errors.length > 0;
  }
}

module.exports = ApiError;