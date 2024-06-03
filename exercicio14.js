/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */
const prompt = require('prompt-sync')();

let num=1
let soma =0
let contador=0
while(num!=0){
    num = parseFloat(prompt('Insira um número '))
    soma += num
    contador++
}
let media = soma/(contador-1)
console.log('A média dos valores é ', media)