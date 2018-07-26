
const redis = require('redis');
const Logger = require('../helpers/logger');

let redisClient = null;

class Redis {

  static connect() {
    return new Promise((resolve, reject) => {
      if (!redisClient) {
        redisClient = redis.createClient();
        redisClient.on('connect', (err) => {
          if (err) {
            Logger.error('Error connecting Redis.');
            Logger.error(err);
            reject(err);
          }
          else {
            resolve();
          }
        });
      }
    });
  }

  static get(key) {
    return new Promise((resolve, reject) => {
      redisClient.get(key, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      });
    });
  }

  static delete(key) {
    return new Promise((resolve, reject) => {
      redisClient.del(key, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result);
        }
      });
    });
  }

  static set(key, value, expirationInSecs) {
    return new Promise((resolve, reject) => {
      if (expirationInSecs) {
        redisClient.setex(key, expirationInSecs, value, (err, result) => {
          if (err)
            reject(err);
          else
            resolve(result);
        });
      }
      else {
        redisClient.set(key, value);
        resolve();
      }
    });
  }

  static exists(key) {
    return new Promise((resolve, reject) => {
      redisClient.exists(key, (err, exists) => {
        if (err)
          reject(err);
        else
          resolve(exists);
      });
    });
  }
}

module.exports = Redis;