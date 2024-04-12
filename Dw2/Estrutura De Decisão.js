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
let num1 = Number(prompt("digite o primeiro número:"));
let num2 = Number(prompt("digite o segundo número:"));
let num3 = Number(prompt("digite o terceiro número:"));

 if (num1 > num2, num3){
      console.log('O numero' + num1 + 'é o maior número');
 } else if (num2 > num3){
       console.log('O numero'+ num2 + 'e o maior número');}

/* 7 */ 
let num1 = Number(prompt("digite o primeiro número:"));
let num2 = Number(prompt("digite o segundo número:"));
let num3 = Number(prompt("digite o terceiro número:"));

let maior;
let menor;

if (num1  > num2) {
  maior = num1;
  menor = num2;
}else {
  maior = num2;
  menor = num1;
}
if (maior > num3){
}else {maior = num3}
if  (menor < num3){
}else{
   menor = num3}
 
document.write("<h2>" + "O maior valor é: "+ maior + "</h2>");
document.write("<h2>" + "O menor valor é: "+ menor + "</h2>")

/* 8 */ /* copiar a questao 7 e deixar somento o "document.write("<h2>" + "O menor valor é: "+ menor + "</h2>")" pra printar*/

/* 9 */
let num1 = Number(prompt("digite o primeiro número:"));
let num2 = Number(prompt("digite o segundo número:"));
let num3 = Number(prompt("digite o terceiro número:"));

let maior;
let menor;
let medio;

if (num1  > num2) {
  maior = num1;
  menor = num2;
}else {
  maior = num2;
  menor = num1;
}
if (maior > num3){
}else {maior = num3}
if  (menor < num3){
}else {
   menor = num3}
if (maior > num1 && num1 > menor) {
  medio = num1;
} else if (maior > num2 && num2 > menor) {
  medio = num2;
} else {
  medio = num3;}

document.write("<h2>" + "O maior valor é: "+ maior + "</h2>");
document.write("<h2>" + "O medio valor é: "+ medio + "</h2>");
document.write("<h2>" + "O menor valor é: "+ menor + "</h2>")

/* 10 */
let turno = prompt("Digite seu turno, M-matutino, V-vespertino ou N-noturno.");
turno = turno.toUpperCase();

if (turno === "M") {
    console.log("Bom Dia!");
} else if (turno === "V") {
    console.log("Boa Tarde!");
} else if (turno === "N") {
    console.log("Boa Noite!");
} else {
    console.log("Turno inválido, por favor, digite M para matutino, V para vespertino ou N para noturno.");
}

/* 11 */
let salario_antigo = Number(prompt("Digite seu salário atual"));

let aumento;
let salario_novo;
let percentual;

if (salario_antigo <= 280){
    percentual = "20%"
    aumento = (salario_antigo * 20) / 100
    salario_novo = aumento + salario_antigo
}else if (salario_antigo => 281 && salario_antigo  <= 700){
    percentual = "15%"
    aumento = (salario_antigo * 15) / 100
    salario_novo = aumento + salario_antigo
}else if (salario_antigo > 700 && salario_antigo <= 1500){
    percentual = "10%"
    aumento = (salario_antigo * 10) / 100
    salario_novo = aumento + salario_antigo
}else{
    percentual = "5%"
    aumento = (salario_antigo * 5) / 100
    salario_novo = aumento + salario_antigo
}

document.write("<h2>" + " O salário antes do reajuste era " + salario_antigo + "<h2>")
document.write("<h2>" + " O percentual de aumento é " + percentual + "<h2>")
document.write("<h2>" + " O valor de aumento é " + aumento + "<h2>")
document.write("<h2>" + " O novo salário depois do aumento é" + salario_novo + "<h2>")

/* 12 */
let horas_trabalho = Number(prompt('Digite quantas horas você trabalho:'));
let salario_hora = Number(prompt('Digite quanto recebe por hora:'))
let salario_bruto = horas_trabalho * salario_hora;
let IR;

if (salario_bruto <= 900){
    IR = ("isento")
}else if (salario_bruto > 900 && salario_bruto <= 1500){
    IR = (salario_bruto * 5) / 100 
}else if (salario_bruto > 1500 && salario_bruto <= 2500){
    IR = (salario_bruto * 10) / 100
}else {
    IR = (salario_bruto * 20) / 100
}

let INSS = (salario_bruto * 10) / 100
let FGTS = (salario_bruto * 11) / 100
let total_de_descontos = INSS + FGTS
let salario_Liquido = salario_bruto - total_de_descontos

document.write("<h2>" + "O salário bruto é R$" + salario_bruto + "</h2>")
document.write("<h2>" + "O IR do salário bruto é " + IR +  "</h2>")
document.write("<h2>" + "O valor do INSS é de R$" + INSS + "</h2>")
document.write("<h2>" + "FGTS vai ser de R$" + FGTS + "</h2>")
document.write("<h2>" + "Total de desconto são R$" + total_de_descontos + "</h2>")
document.write("<h2>" + "E o seu salário líquido é de R$" + salario_Liquido + "</h2>")  


/* 13 */
let dia_semana = Number(prompt("Digite o número correspondente da semana"));

    if (dia_semana = 1) {
        document.write ('1-Domingo');
    } else if (dia_semana = 2) {
        document.write('2-Segunda-Feira');
    } else if (dia_semana = 3){
        document.write('3-Terça-Feira');
    } else if (dia_semana = 4) {
        document.write('4 - Quarta Feira');
    } else if (dia_semana == 5) {
        document.write('5 - Quinta Feira');
    } else if (dia_semana = 6) {
        document.write('6 - Sexta Feira');
    } else {
        document.write('7 - Sábado');
    };

/* 14 */

