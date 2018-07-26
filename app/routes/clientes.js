
const OAuth = require('../oauth');
const router = require('express').Router();
const Authorizer = require('../authorization/authorizer');
const ClientesController = require('../controllers/clientes');

router.use(OAuth.authenticate());

router.get('/', Authorizer.forReading(Funcionalidades.CadastrarClientesDados), ClientesController.get);
router.post('/', Authorizer.forChanging(Funcionalidades.CadastrarClientesDados), ClientesController.post);
router.put('/:id([a-z0-9]+)', Authorizer.forChanging(Funcionalidades.CadastrarClientesDados), ClientesController.put);
router.delete('/:id([a-z0-9]+)', Authorizer.forChanging(Funcionalidades.CadastrarClientesDados), ClientesController.delete);

module.exports = router;