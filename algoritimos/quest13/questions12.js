//Escreva um programa que receba três números inteiros e diga se
// eles podem representar os lados de um triângulo 
// (a soma de dois lados deve ser maior que o terceiro).

var num1 = 5
var num2 = 1
var num3 = 7


if (num1+num2>num3){
    if (num2+num3>num1)
        if (num3+num1>num2){
        console.log("as Variaveis", num1, num2, num3, "podem fazer um triangulo");
    }else{
        console.log("as Variaveis", num1, num2, num3, "não podem fazer um triangulo");}
    }else{
    console.log("as Variaveis", num1, num2, num3, "não podem fazer um triangulo");
}
} else {
    console.log("as Variaveis", num1, num2, num3, "não podem fazer um triangulo"); 
 }

