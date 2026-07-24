// encapsulamento_condicionais_heranca/Estagiario.js

const Funcionario = require('./Funcionario');

class Estagiario extends Funcionario {
  #cargaHoraria;

  constructor(nome, salarioBase, cargaHoraria) {
    super(nome, salarioBase);
    this.#cargaHoraria = cargaHoraria;
  }

  getCargaHoraria() {
    return this.#cargaHoraria;
  }

  setCargaHoraria(horas) {
    if (typeof horas === 'number' && horas > 0 && horas <= 40) {
      this.#cargaHoraria = horas;
    } else {
      console.log('Erro: Carga horária deve ser entre 1 e 40 horas.');
    }
  }

  // Sobrescrita do método calcularSalario
  calcularSalario() {
    const salarioBase = super.calcularSalario();
    return salarioBase * (this.#cargaHoraria / 40);
  }
}

module.exports = Estagiario;