/*1
13.Crie quatro variáveis: idade com valor 17, temRG como true, temCPF como false e autorizacaoDosPais
como true. Verifique se a pessoa pode abrir uma conta bancária se for maior de idade ou 
(menor de idade com RG, CPF e autorização dos pais).
*/

var idade = 17
var temRG = true
var temCPF = false
var autorizacaoDosPais = true

if(idade>17 || ((temRG && temCPF) && autorizacaoDosPais)){
    console.log("pode abrir uma conta")
} else{
    console.log("não pode abrir a conta")
}