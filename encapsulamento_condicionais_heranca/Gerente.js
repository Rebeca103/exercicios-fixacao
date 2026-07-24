// encapsulamento_condicionais_heranca/Gerente.js

const Funcionario = require('./Funcionario');

class Gerente extends Funcionario {
  #bonus;
  #metaAtingida;

  constructor(nome, salarioBase, bonus) {
    super(nome, salarioBase);
    this.#bonus = bonus;
    this.#metaAtingida = false; // padrão: meta não atingida
  }

  getBonus() {
    return this.#bonus;
  }

  setBonus(valor) {
    if (typeof valor === 'number' && valor >= 0) {
      this.#bonus = valor;
    } else {
      console.log('Erro: Bônus deve ser um número não negativo.');
    }
  }

  // Método para definir se a meta foi atingida (condicional)
  definirMeta(atingida) {
    this.#metaAtingida = Boolean(atingida);
  }

  // Sobrescrita do método calcularSalario com condicional
  calcularSalario() {
    let salario = super.calcularSalario();
    if (this.#metaAtingida) {
      salario += this.#bonus;
      console.log(`Bônus de R$ ${this.#bonus.toFixed(2)} aplicado.`);
    }
    return salario;
  }
}

module.exports = Gerente;