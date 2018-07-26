
const Redis = require('../redis');
const UsersService = require('../services/users');

class OAuthModel {

  static generateAccessToken(client, user, scope) {
    // string to be used as access token
    return 'accesstoken';
  }

  static getAccessToken(bearerToken, callback) {
    // ...
  }

  static getClient(clientId, clientSecret) {
    // ...
  }

  static getUser(username, password, callback) {
    UsersService
      .getByEmailPassword(username, password)
      .then(user => callback(null, user))
      .catch(ex => callback(ex));
  }

  static saveToken(token, client, user, callback) {
    // ...
  }
}

module.exports = {
  //generateAccessToken: OAuth.generateAccessToken, // optional
  getAccessToken: OAuthModel.getAccessToken, // required
  getClient: OAuthModel.getClient, // required
  getUser: OAuthModel.getUser, // required
  saveToken: OAuthModel.saveToken // required
};