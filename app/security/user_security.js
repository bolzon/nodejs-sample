
const Crypt = require('./crypt');
const SALT = Buffer.from('xxxxxxxxxxxxxxxx', 'base64');
const CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class UserSecurity {

  /**
   * Gets a random password to be used for new users.
   * @param {Number} size Size of the new password.
   * @return {String} New random password as string (open).
   */
  static getRandomPassword(size) {
    // ...
  }

  /**
   * Checks an user password.
   * @param {Buffer} hashedPassword Hashed user password (from DB).
   * @param {String} givenPassword Given user password (probably the typed one).
   * @return {Boolean} True if they match, false otherwise.
   */
  static checkPassword(hashedPassword, givenPassword) {
    // ...
  }

  /**
   * Hashes (and salts) an user password.
   * @param {String} password User password.
   * @return {String} Base64 string containing the encrypted hash of password + salt.
   */
  static shufflePassword(password) {
    // ...
  }
}

module.exports = UserSecurity;