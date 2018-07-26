
const fs = require('fs');
const os = require('os');
const path = require('path');
const config = require('../helpers/config_helper').Config;
const STORAGE_PATH = config.storage_path || os.tmpdir();

class BaseStorage {

  constructor(relativePath) {
    this.basePath = path.resolve(path.join(STORAGE_PATH, relativePath));
    if (!BaseStorage.dirExists(this.basePath)) {
      BaseStorage.createDir(this.basePath);
    }
  }

  create(fileName, fileStream) {
    // ...
  }

  static remove(fullpath) {
    // ...
  }

  static fileExists(path) {
    // ...
  }

  static dirExists(dir) {
    // ...
  }

  static createDir(dir) {
    // ...
  }
}

module.exports = BaseStorage;