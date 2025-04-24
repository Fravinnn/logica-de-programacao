/*6.Declare três variáveis: senhaDigitada, senhaCorreta e tentativasRestantes.
A senhaDigitada deve ser igual a "1234", a senhaCorreta também igual a "1234",
e tentativasRestantes igual a 2.
Verifique se o login é válido apenas se as senhas forem iguais e houver pelo menos 1 tentativa
restante.
*/

var senhaDigitada = 1234
var senhaCorreta = 1234
var tentativasRestantes = 2

if((senhaDigitada == senhaCorreta) && (tentativasRestantes >= 1)){
    console.log("valido")
} else{
    console.log("não valido")
}








