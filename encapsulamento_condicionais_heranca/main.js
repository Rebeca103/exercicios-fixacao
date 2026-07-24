// encapsulamento_condicionais_heranca/main.js

const Gerente = require('./Gerente');
const Estagiario = require('./Estagiario');

// Teste com Gerente
console.log('--- Teste Gerente ---');
const gerente = new Gerente('Ana Souza', 5000, 1500);
gerente.definirMeta(true); // meta atingida
console.log(`Nome: ${gerente.getNome()}`);
console.log(`Salário calculado: R$ ${gerente.calcularSalario().toFixed(2)}`);

gerente.definirMeta(false); // meta não atingida
console.log(`Salário sem bônus: R$ ${gerente.calcularSalario().toFixed(2)}`);

// Teste com Estagiário
console.log('\n--- Teste Estagiário ---');
const estagiario = new Estagiario('Carlos Silva', 1200, 30);
console.log(`Nome: ${estagiario.getNome()}`);
console.log(`Salário calculado: R$ ${estagiario.calcularSalario().toFixed(2)}`);

// Teste com valores inválidos (encapsulamento)
console.log('\n--- Teste de Validação ---');
estagiario.setCargaHoraria(50); // deve dar erro
gerente.setBonus(-500); // deve dar erro