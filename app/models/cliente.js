
const status = Object.freeze({
  Ativo: 'ativo',
  PreCadastrado: 'cadastro_previo',
  Inativo: 'inativo'
});

const tipos = Object.freeze({
  PessoaFisica: 'pessoa_fisica',
  PessoaJuridica: 'pessoa_juridica'
});

class Cliente {

  static get Status() {
    return status;
  }

  static get Tipos() {
    return tipos;
  }
}

module.exports = Cliente;