/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */
const prompt = require('prompt-sync')();

let macas = parseInt(prompt('Informe a quantidade de maçãs que deseja comprar: '))
let preco =0;
if(macas<12){
    preco = macas*0.30
}else{
    preco = macas*0.25
}
console.log('O preço total das maças é de R$ ', preco)