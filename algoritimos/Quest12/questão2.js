// Crie um programa que declare duas variáveis: uma para representar a altura de uma pessoa (em metros) e outra para representar o peso da pessoa (em quilos). O programa deve calcular o IMC (Índice de Massa Corporal) e imprimir o resultado, juntamente com uma mensagem indicando a categoria de IMC (abaixo do peso, peso normal, sobrepeso, obesidade). Use a fórmula:
//IMC = peso / (altura * altura)


var num1 = 1.89;
var num2 = 98;

var soma = num2 / (num1 * num1)
var resultado = soma + "."

var text = "IMC entre 18,5 e 24,9 é considerado normal"
var text1 = "IMC entre 25 e 29,9 é considerado sobrepeso"
var text2 = "IMC entre 30 e 34,9 é considerado obesidade grau I"
var text3 = "MC entre 35 e 39,9 é considerado obesidade grau II"
var text4 = "IMC acima de 40 é considerado obesidade grau III ou mórbida"
var text5 = "resultado igual a: "
var text6 = "Formula: IMC = peso / (altura * altura)"
var text7 = "variavel 1 = altura: "
var text8 = "variavel 2 = peso: "


console.log(text7, num1 + "m")
console.log(text8, num2 + "kg")
console.log(text6)
console.log(text5, resultado, text1)




