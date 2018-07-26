
const HttpStatus = Object.freeze({
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  UnprocessableEntity: 422,
  InternalServerError: 500,
  NotImplemented: 501
});

module.exports = HttpStatus;