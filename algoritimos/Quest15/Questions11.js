/*11.
Crie uma variável notaFinal com valor 8, faltas com valor 5, e limiteFaltas com valor 4.
Verifique se o aluno foi reprovado por nota baixa (nota menor que 6)
ou por faltas excessivas (faltas maiores que o limite). */

var notaFinal = 8
var faltas = 5
var limiteFaltas = 4

if((notaFinal<6) || (faltas > limiteFaltas)){
    console.log("reprovado")
}else{
    console.log("aprovado")
}

