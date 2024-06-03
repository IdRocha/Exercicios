/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */
const prompt = require('prompt-sync')();

let ladoA = parseInt(prompt('Informe o valor do lado A '))
let ladoB = parseInt(prompt('Informe o valor do lado B '))
let ladoC = parseInt(prompt('Informe o valor do lado C '))

if(ladoB+ladoC > ladoA && ladoA+ladoC > ladoB && ladoA+ladoB >ladoC){
    console.log('Os valores formam um triangulo"')
    if(ladoA === ladoB && ladoB===ladoC){
        console.log('Triângulo equilátero: possui todos os lados iguais')
    }else if(ladoA!=ladoB && ladoB!=ladoC){
        console.log('Triângulo escaleno: possui todos os lados diferentes')
    }else{
        console.log('Triângulo isóceles: possui dois lados iguais')
        
    }
}else{
    console.log('Os valores infomados não formam um triangulo!')
}