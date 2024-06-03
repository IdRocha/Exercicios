/*Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Insira o primeiro valor: '))
let num2 = parseInt(prompt('Insira o segundo valor: '))
let num3 = parseInt(prompt('Insira o terceiro valor: '))
let num4 = num1+num2+num3
num1+=25
num2*=3
num3*=0.12

console.log(num1,num2,num3,num4);