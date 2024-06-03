/* Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt('Informe o número de eleitores: '))
let brancos = parseInt(prompt('Informe o número de votos brancos: '))
let nulos = parseInt(prompt('Informe o número de votos nulos: '))
let validos = parseInt(prompt('Informe o número de votos válidos: '))

let percBrancos = (brancos/eleitores)*100
let percNulos = (nulos/eleitores)*100
let percValidos = (validos/eleitores)*100

console.log(percBrancos, ' % de votos brancos')
console.log(percNulos, ' % de votos nulos')
console.log(percValidos, ' % de votos válidos')