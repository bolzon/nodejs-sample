
const ApiError = require('../models/api_error');
const HttpStatus = require('../helpers/http_status');
const HttpErrorHandler = require('../helpers/http_error_handler');
const ClientesService = require('../services/clientes');

class ClientesController {

  static get(req, res) {
    // método simplificado para compartilhamento
    ClientesService.getAll(req.mongoQuery)
      .then(result => {
        res.setTotalCount(result.total);
        res.json(result.docs); // clientes
      })
      .catch(err => HttpErrorHandler.handleMongooseError(res, err));
  }

  static getById(req, res) {
    const id = req.params.id;
    ClientesService.getById(id)
      .then(cliente => {
        if (cliente)
          res.json(cliente);
        else
          res.status(HttpStatus.NotFound).json(ApiError.NotFound);
      })
      .catch(err => HttpErrorHandler.handleMongooseError(res, err));
  }


  static post(req, res) {
    const cliente = req.body;
    ClientesService.create(cliente)
      .then(dbCliente => res.json(dbCliente))
      .catch(err => HttpErrorHandler.handleMongooseError(res, err));
  }

  static put(req, res) {
    let cliente = req.body;
    const id = req.params.id;
    ClientesService.update(id, cliente)
      .then(dbUpdatedCliente => {
        if (dbUpdatedCliente)
          res.json(dbUpdatedCliente);
        else
          res.status(HttpStatus.NotFound).json(ApiError.NotFound);
      })
      .catch(err => {
        HttpErrorHandler.handleMongooseError(res, err);
      });
  }

  static delete(req, res) {
    const id = req.params.id;
    ClientesService.delete(id)
      .then(cliente => res.end())
      .catch(err => {
        if (err instanceof ApiError)
          res.status(err.status || HttpStatus.BadRequest).json(err);
        else
          HttpErrorHandler.handleMongooseError(res, err);
      });
  }
}

module.exports = ClientesController;