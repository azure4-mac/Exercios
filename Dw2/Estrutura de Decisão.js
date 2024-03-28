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

/* 3 */
let genero = prompt("Digite seu genero, M para masculino F para feminio:");
if (genero == "M") {
    console.log("Seu genero é Masculino!");
    } else if(genero == "F"){
        console.log("Seu genero é Feminino!");     
}else{
    console.log("Genero Inválido! Digite apenas M ou F.")
} 

/* 4 */
let letra = prompt("Digite uam letra:");
letra = letra.toLowerCase();
if (letra = 'a,e,i,o,u'){
    console.log('é  uma vogal');
} else {
    console.log ('não é uma vogal');
}

/* 5 */
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

if (media === 10) {
    console.log('Aprovado com Distinção!');
} else if (media >= 7) {
    console.log('Aprovado!');
} else if (media < 6) {
    console.log('Reprovado!');
}

/* 6 */
