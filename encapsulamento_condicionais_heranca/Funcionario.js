// encapsulamento_condicionais_heranca/Funcionario.js

class Funcionario {
  #nome;
  #salarioBase;

  constructor(nome, salarioBase) {
    this.#nome = nome;
    this.#salarioBase = salarioBase;
  }

  getNome() {
    return this.#nome;
  }

  setNome(nome) {
    if (typeof nome === 'string' && nome.trim().length > 0) {
      this.#nome = nome.trim();
    } else {
      console.log('Erro: Nome inválido.');
    }
  }

  getSalarioBase() {
    return this.#salarioBase;
  }

  setSalarioBase(valor) {
    if (typeof valor === 'number' && valor > 0) {
      this.#salarioBase = valor;
    } else {
      console.log('Erro: Salário base deve ser um número positivo.');
    }
  }

  calcularSalario() {
    return this.#salarioBase;
  }
}

module.exports = Funcionario;