// visibilidade_encapsulamento/main.js

const CarteiraDigital = require('./carteiraDigital');

const carteira = new CarteiraDigital();

carteira.definirTitular('João Silva');
carteira.depositar(200);
console.log(`Saldo: R$ ${carteira.consultarSaldo().toFixed(2)}`);

carteira.sacar(50);
console.log(`Saldo: R$ ${carteira.consultarSaldo().toFixed(2)}`);

carteira.sacar(500); // deve dar erro

carteira.exibirInformacoes();