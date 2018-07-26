
const Db = require('../db');

class ClientesService {

  static getAll(query) {
    return new Promise((resolve, reject) => {
      Db.models.Cliente
        .find()
        .then(clientes => {
          resolve(clientes);
        })
        .catch(reject);
    });
  }

  static create(cliente) {
    return new Promise((resolve, reject) => {
      ClientesService.validate(cliente)
        .then(() => {
          let dbCliente = new Db.models.Cliente(cliente);
          dbCliente
            .save()
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
  }

  static update(id, cliente) {
    // ...
  }


  static delete(id) {
    // ...
  }
}

module.exports = ClientesService;