/*Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo: */
const prompt = require('prompt-sync')();

let codigo = parseInt(prompt('Insira o código de origem: '))
let origem;
if(codigo ===1){
    origem = "Sul"
}else if(codigo ===2){
    origem = "Norte"
}else if(codigo ===3){
    origem = "Leste"
}else if(codigo ===4){
    origem = "Oeste"
}else if(codigo ===5 || codigo ===6){
    origem = "Nordeste"
}else if(codigo ===7 || codigo===8 || codigo ===9){
    origem = "Sudeste"
}else if(codigo>=10 && codigo<=20){
    origem = "Centro-Oeste"
}else if(codigo >=25 && codigo <=50){
    origem = "Nordeste"
}else{
    origem = "Produto Importado"
}

console.log('A origem do produto é ', origem)
