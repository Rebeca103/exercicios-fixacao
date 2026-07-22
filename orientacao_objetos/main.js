import { Conversor } from './conversor.js';

const conversor = new Conversor();

console.log(`25°C = ${conversor.celsiusParaFahrenheit(25)}°F`);
console.log(`10 km = ${conversor.quilometrosParaMilhas(10)} milhas`);
console.log(`150 minutos = ${conversor.minutosParaHoras(150)} horas`);