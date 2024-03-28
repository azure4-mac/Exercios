/* 1 */
let num1 = Number(prompt("Digite o primeiro numero:"));
let num2 = Number(prompt("Digite o segundo numero:"));

if (num1 > num2){
    console.log("O maior número é " + num1);
} else if (num1 < num2) {
    console.log("O maior número é " + num2);
} else{
    console.log("Os números são iguais.");
}

/* 2 */
let num = Number(prompt("Digite um numero:"));
if (num > 0){
    console.log("O numero" + num + "é positivo.")
    } else if (num < 0) {
        console.log ("O número "+ num+ " é negativo")
    }else{
        console.log("O número é zero.")} 
