
const model = require('./model');
const OAuthServer = require('oauth2-server');
const HttpStatus = require('../helpers/http_status');
const Logger = require('../helpers/logger');

const Request = OAuthServer.Request;
const Response = OAuthServer.Response;

let oauthserver = new OAuthServer({
  model: model,
  grants: [ 'password' ],
  accessTokenLifetime: 8 * 60 * 60, // 8 hours
  debug: process.env.NODE_ENV === 'development',
  requireClientAuthentication: { password: false }
});

class OAuth {

  // authenticate
  static authenticate(options) {
    // ...
  }

  // route: /token
  static token(req, res, next) {
    // ...
  }

  // route: /authorize
  static authorize(req, res) {

    let request = new Request(req);
    let response = new Response(res);

    oauthserver
      .authorize(request, response)
      .then((success) => {
        res.json(success);
      })
      .catch((err) => {
        Logger.error(err);
        res.status(err.code || HttpStatus.InternalServerError).json(err);
      });
  }
}

module.exports = OAuth;