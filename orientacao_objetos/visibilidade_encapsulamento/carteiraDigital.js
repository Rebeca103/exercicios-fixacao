class CarteiraDigital {
  #titular;
  #saldo;

  constructor() {
    this.#titular = '';
    this.#saldo = 0;
  }

  definirTitular(nome) {
    if (typeof nome === 'string' && nome.trim().length > 0) {
      this.#titular = nome.trim();
    } else {
      console.log('Erro: Nome inválido.');
    }
  }

  consultarTitular() {
    return this.#titular;
  }

  depositar(valor) {
    if (typeof valor === 'number' && valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
    } else {
      console.log('Erro: Valor inválido.');
    }
  }

  sacar(valor) {
    if (typeof valor === 'number' && valor > 0) {
      if (this.#saldo >= valor) {
        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
      } else {
        console.log(`Erro: Saldo insuficiente. Saldo atual: R$ ${this.#saldo.toFixed(2)}`);
      }
    } else {
      console.log('Erro: Valor inválido.');
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }

  exibirInformacoes() {
    console.log(`Titular: ${this.#titular}`);
    console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
  }
}

module.exports = CarteiraDigital;