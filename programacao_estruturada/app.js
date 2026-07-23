// programacao_estruturada/app.js

// Importa todas as funções do arquivo conversores.js
const conversores = require('./conversores.js');

// Testes com os valores fornecidos
console.log(conversores.celsiusParaFahrenheit(30));
console.log(conversores.horasParaMinutos(2));
console.log(conversores.idadeEmDias(20));
console.log(conversores.kmParaMetros(3));
console.log(conversores.consumoMedio(500, 40));