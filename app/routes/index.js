
const AddOns = require('./addons');
const OAuth = require('../oauth');
const ApiError = require('../models/api_error');
const HttpStatus = require('../helpers/http_status');
const router = require('express').Router();
const QueryParser = require('../helpers/query_parser');

// initial page ///////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
  const msg = `Servidor no ar (versão ${req.app.version})`;
  res.type('text').send(msg).end();
});

// authentication + query parser //////////////////////////////////////////////

router.all('/token', OAuth.token);
router.post('/authorize', OAuth.authorize);

router.use(QueryParser.middleware);
router.use(AddOns.middleware);

// controllers ////////////////////////////////////////////////////////////////

const routesList = [
  'clientes',
  'usuarios'
  // ...
];

// loads all controllers

for (let route of routesList) {
  router.use(`/${route}`, require(`./${route}`));
}

// not found //////////////////////////////////////////////////////////////////

router.use((req, res, next) => {
  let err = ApiError.NotFound;
  err.message = 'Rota inexistente.';
  res.status(HttpStatus.NotFound).json(err);
});

module.exports = router;