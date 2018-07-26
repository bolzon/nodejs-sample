
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  telefone: { type: String },
  departamento: { type: String },
  password: { type: String, required: true, select: false },
  perfis: [ { type: String, ref: 'perfil_usuario', required: true } ]
});

module.exports = UsuarioSchema;