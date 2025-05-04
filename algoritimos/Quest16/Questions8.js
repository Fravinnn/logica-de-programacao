// . Conte e imprima quantos números entre 1 e 1000 são divisíveis por 3 e por 5 
// ao mesmo tempo.

for (var num1 = 1; num1 <= 1000; num1++) {
    if (num1 % 3 == 0 && num1 % 5 == 0) {
        console.log("resultado", num1)
    }
}