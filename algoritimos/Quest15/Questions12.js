/*12.
Crie as variáveis usuarioLogado como true, nivelAcesso com valor "admin" e senhaCorreta como false.
Verifique se o acesso ao painel de controle é permitido apenas se o usuário estiver logado e 
(a senha for correta ou o nível de acesso for admin).
*/

var usuarioLogado = true
var nivelAcesso = "admin" 
var senhaCorreta = false

if(usuarioLogado && (senhaCorreta || nivelAcesso )){
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
}
// fiquei em duvida aqui na questão do "admin", porque ele está em texto no vae pra poder funcionar?
// tambem estou achando que na parte do código: (nivelAcesso). não está sendo lido da forma correta por
// conta disso