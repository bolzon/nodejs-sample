
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({

  nome: { type: String, default: '' },
  razaoSocial: { type: String, default: '' },
  registro: { type: String }, // cpf ou cnpj
  inscricaoEstadual: { type: String, default: '' },
  telefone: { type: String, default: '' },
  email: { type: String, default: '', lowercase: true }
});

module.exports = ClienteSchema;