/*10. Imprima a seguinte pirâmide de asteriscos com 5 linhas, usando laço:
*
**
***
****
*****
*/
var asteriscos = "*"
var asteriscosSave = "*"

for(var num1 = 0; num1 < 5; num1++){
    console.log(asteriscos)
    asteriscos = asteriscos + asteriscosSave      
} 