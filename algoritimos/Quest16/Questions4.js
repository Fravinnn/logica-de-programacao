//4. Imprima a tabuada do número 5 (de 5 x 1 até 5 x 10).


var num1 = 5
var num2 = 50
var num3 = 1

while(num1 <= num2){
    console.log("5 x " + num3,"=",num1)
    num1 += 5
    num3 += 1
}

/*
var num3 = 1

for (var num1 = 5; num1 <= 50; num1 += 5) {
    console.log("5 x " + num3 + " = " + num1)
    num3++
} */