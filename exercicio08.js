/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt('Informe um valor: '))
let valor2 = parseInt(prompt('Informe um valor diferente do primeiro: '))

if(valor1===valor2){
    console.log('Erro, você inseriu dois valores iguais.')
}else{
    if(valor1 > valor2){
        console.log(valor2, valor1)
    }else{
        console.log(valor1, valor2)
    }
}