//Desenvolva um programa que declare duas variáveis numéricas e faça uma operação de cálculo de juros simples. O programa deve calcular o montante final de um investimento utilizando a fórmula: Montante = Capital Inicial * (1 + Taxa de Juros * Tempo)Imprima o montante final do investimento.

var num1 = 2500;
var num2 = 0.05;    
var num3 = 8;
var text = "fórmula: Montante = Capital Inicial * (1 + Taxa de Juros * Tempo)"
var text1 = "variavel 1 = Capital Inicial: R$"
var text2 = "variavel 2 = Taxa de Juros: " + num2 + "%"
var text3 = "variavel 3 = Tempo: "

var soma = num1 * (1 + num2 * num3)
var resultado = "Montante Final igual a: R$" + soma

console.log(text1 + num1)
console.log(text2)
console.log(text3, num3)
console.log(text)
console.log(resultado)







