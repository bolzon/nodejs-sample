
class Authorizer {

  static forReading(funcionalidade) {
    // ...
  }

  static forChanging(funcionalidade) {
    // ...
  }

  static authorize(funcionalidade, permissaoLeitura, permissaoEdicao) {
    // ...
  }
}

module.exports = Authorizer;