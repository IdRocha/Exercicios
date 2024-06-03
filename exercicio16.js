/*Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */
const prompt = require('prompt-sync')();

let divisores = 0;
let valor =100;
let contPrimos =0;
while(contPrimos <50){
    for(let i=1;i<=valor;i++){
        if(valor % i === 0){
            divisores ++;
        }
    }if(divisores === 2){
        console.log(valor);
        contPrimos ++;
    }
    valor ++;
    divisores =0;
}
