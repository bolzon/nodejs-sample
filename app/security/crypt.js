
const crypto = require('crypto');
const config = require('../helpers/config_helper').Config;

const ALG = 'aes-256-cbc';
const K = Buffer.from(config.security.key, 'base64');

class Crypt {

  /**
   * Generates a hash code from the given data.
   * @param {Buffer} data Buffer representing the data in binary form.
   * @param {String} algorithm String representing the algorithm to use in hash (SHA256 is default).
   * @return {Buffer} Buffer representing the binary form of the hash code.
   */
  static computeHash(data, algorithm) {
    // ...
  }

  /**
   * Generates random bytes.
   * @param {Number} size Size of the random buffer.
   * @return {Buffer} Buffer representing the random bytes.
   */
  static getRandomBytes(size) {
    // ...
  }

  /**
   * Generates a random challenge with the given size or 32 bytes if not specified.
   * @param {Number} size the size of random challenge.
   * @return {Buffer} Base64 challenge in web safe format or an empty Buffer when an exception is thrown.
   */
  static generateChallenge(size) {
    // ...
  }

  /**
   * Converts a base64 string to an ascii string
   * (for web safe string, please use 'fromB64Url').
   * @returns {Buffer} Buffer representing the base64 string.
   */
  static fromB64(base64url) {
    // ...
  }

  /**
   * Converts a base64 string to an ascii string.
   * @returns Buffer representing the base64 string.
   */
  static fromB64Url(base64url) {
    // ...
  }

  /**
   * Converts a byte array to a base64 string
   * (for web safe, please use 'toB64Url').
   * @return string representing the given byte array in base64 format.
   */
  static toB64(byteArray) {
    // ...
  }

  /**
   * Encrypts the given data.
   * @param {Buffer} data Data to be encrypted.
   * @return {String} Base64 string containing the encrypted content.
   */
  static encrypt(data) {
    // ...
  }

  /**
   * Decrypts the given data.
   * @param {String} data Encrypted content.
   * @return {String} String containing the decrypted content.
   */
  static decrypt(data) {
    // ...
  }
}

module.exports = Crypt;