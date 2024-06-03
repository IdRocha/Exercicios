/*Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.*/
const prompt = require('prompt-sync')();


let celsius = parseInt(prompt('Informe a temperatura em ºC: '))
let farh = (celsius*9/5)+32
console.log('A temperatura em ºF é: ', farh);
