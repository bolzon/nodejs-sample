
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');
const uniqueValidator = require('mongoose-unique-validator');

const models = require('../models');
const Logger = require('../helpers/logger');

// mongoose promise is deprecated, so we will opt
// to use the ES6 native promise implementation
mongoose.Promise = global.Promise;

// sets default options for mongoose pagination
mongoosePaginate.paginate.options = {
  lean: true,
  limit: 20
};

class Db {

  static connect(dbUrl) {
    return new Promise((resolve, reject) => {
      mongoose.connect(dbUrl, { useMongoClient: true }, (err) => {
        if (err) {
          Logger.error('Error connecting MongoDB.');
          Logger.error(err);
          reject(err);
        }
        else {
          //mongoose.set('debug', true);
          resolve();
        }
      });
    });
  }

  static buildModel(collectionName, schemaName, modelClass) {
    let schema = require(`./schemas/${schemaName}`);
    schema.options.versionKey = false;
    schema.options.collection = collectionName;

    if (modelClass) {
      schema.loadClass(modelClass);
    }

    schema.plugin(mongoosePaginate);
    schema.plugin(uniqueValidator);
    schema.plugin(timestamps);

    return mongoose.model(schemaName, schema);
  }

  static get models() {
    return dbModels;
  }

  static get objectId() {
    return mongoose.Types.ObjectId();
  }

  static toObjectId(id) {
    if (id) {
      return mongoose.Types.ObjectId(id);
    }
    return mongoose.Types.ObjectId();
  }

  static isObjectId(val) {
    return val && val instanceof mongoose.Types.ObjectId;
  }
}

const dbModels = {
  Cliente: Db.buildModel('clientes', 'cliente', models.Cliente),
  Usuario: Db.buildModel('usuarios', 'usuario', models.Usuario)
};

module.exports = Db;