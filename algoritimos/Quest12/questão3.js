// Escreva um código que declare duas variáveis representando o preço de um produto e o valor do desconto. O programa deve calcular o preço final do produto com o desconto aplicado e imprimir o valor do desconto e o preço final, no formato:"Desconto: R$<valor do desconto>""Preço final: R$<valor do preço final>"

var num1 = 368;
var num2 = 7;
var text = "Formula: Preço * Desconto(%) / 100 " 
var text1 = "Desconto: "
var text2 = "Preço Final: "
var text3 = "variavel 1 = Preço: "
var text4 = "variavel 2 = Desconto: "

var soma = num1 * num2 / 100
var resultado = num1 - soma

console.log(text3, "R$" + num1)
console.log(text4, num2 + "%")
console.log(text)
console.log(text1, soma + "%")
console.log(text2, "R$" + resultado)




