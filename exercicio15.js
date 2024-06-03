/*Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

const prompt = require('prompt-sync')();

let num=1
let soma=0;
let peso=0
let somaPeso=0
while(num!=0){
    num = parseFloat(prompt('Insira um valor: '))
    if(num!=0){
    peso = parseFloat(prompt('Insira o peso: '))
    soma = num*peso
    somaPeso += peso
}}
let mediaPonderada = soma/somaPeso
console.log('A média ponderada é: ', mediaPonderada)
