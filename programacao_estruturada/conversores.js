// programacao_estruturada/conversores.js

// 1. Conversor de temperatura
function celsiusParaFahrenheit(celsius) {
  return (9 / 5) * celsius + 32;
}

// 2. Conversor horas em minutos
function horasParaMinutos(horas) {
  return horas * 60;
}

// 3. Conversor idade em dias
function idadeEmDias(idade) {
  return idade * 365;
}

// 4. Conversor quilômetros para metros
function kmParaMetros(km) {
  return km * 1000;
}

// 5. Calcula consumo médio de combustível
function consumoMedio(distancia, litros) {
  return distancia / litros;
}

// Exporta as funções para serem usadas em app.js
module.exports = {
  celsiusParaFahrenheit,
  horasParaMinutos,
  idadeEmDias,
  kmParaMetros,
  consumoMedio
};