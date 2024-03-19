/* um */
let x1 = prompt("Digite o x do primeiro plano:");
let x2 = prompt("Digite o x do segundo plano");
let y1 = prompt("Digite o y do primeiro plano");
let y2 = prompt("Digite o y do segundo plano");

let resultadoX = Math.pow((x2 - x1), 2);
let resultadoY = Math.pow((y2 - y1), 2);

let resultado = Math.sqrt(resultadoX * resultadoY)

document.write(resultado)


/* tres */

let idade = Number(prompt("digite sua idade:"))
document.write(idade * 365)

/* quatro */

let idadeEmDias = Number(prompt("Digite a idade em dias:"));

const anos = Math.floor(idadeEmDias / 365);
let remDias = idadeEmDias % 365;
const meses = Math.floor(remDias / 30);
remDias %= 30;

document.writeln(`<p>Anos: ${anos}</p>`);
document.writeln(`<p>Meses: ${meses}</p>`);
document.writeln(`<p>Dias: ${remDias}</p`);

/* cinco */ 

let nota1 = prompt('digite a primeira nota:') *2;
let nota2 = prompt('digite a seguinda nota:') *3;
let nota3 = prompt('digite a terceira nota:') *5;

const media = ((nota1 + nota2 + nota3) /10 )
document.writeln (media)

/* seis */

let eventoEmSegundos = Number(prompt("Digite a duraçao de um evento em segundos: "));  

const horas = Math.floor(eventoEmSegundos / 3600);
let remsegundos = eventoEmSegundos % 3600;
const minutos = Math.floor(remsegundos / 60);
remsegundos %= 60;

document.writeln(`<p>Horas: ${horas}</p>`);
document.writeln(`<p>Minutos: ${minutos}</p>`);
document.writeln(`<p>Segundos: ${remsegundos}</p`);

/* sete */

let custoFarbica =  Number(prompt ("Qual é o valor do produto? R$")) ;

const percentualDistribuidor = 28;
const custoDistribuidora = (custoFarbica * percentualDistribuidor)/100;

const percentualImposto = 45;
const custoImposto = (custoFarbica * custoImposto) / 100;

const custoConsumidor = custoFarbica + custoDistribuidora + custoImposto;

document.writeln (`Custo para o consumidor R$${custoConsumidor}`);

/* oito */ 

/* nove */

let nota_1 = Number(prompt('primeira nota:'));
let nota_2 = Number(prompt( 'segunda nota:'));
let nota_3 = Number(prompt('terceira nota:'));

const media = (nota_1 + nota_2 + nota_3) / 3;

if (media >=7 && media <=10){
    document.write ('Aprovado');
} else {
    document.write ('Reprovado')
};

/* dez */

let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));
let num3 = Number(prompt( "Digite o terceiro número"));

if ( num1  > num2 ) {
   if (num1 > num3) {
       document.write(`O maior número é ${num1}`);  
   }else {
        document.write(`O maior número é ${num3}`);
   };
} else if (num2 > num1) {
     if (num2 > num3) {
         document.write(`O maior número é ${num2}`);
      } else {
          document.write(`O maior número é ${num3}`);
      };
} else {
    document.write(`O maior número é ${num3}`);
};
 
/* onze */

let nota1 = prompt('digite a primeira nota:') *3;
let nota2 = prompt('digite a seguinda nota:') *3;
let nota3 = prompt('digite a terceira nota:') *4;

const media = ((nota1 + nota2 + nota3) /10 )

if (media >=5 && media <=10){
    document.write ('Aprovado');
} else {
    document.write ('Reprovado')
};

/* doze */

let num1 = Number(prompt("Digite um valor para A"));

const par_impar = num1  % 2 == 0 ? 'Par' : 'Impar';
document.write (`${num1} é ${par_impar}`);

const mais_menos = num1  < 0 ? `negativo` : `${num1} é positivo`;
document.write (`<br>${mais_menos}`);

/* treze e quatorze */ 

const barMenu = [
    { name: "Cachorro quente", code: 100, price: 1.2 },
    { name: "Bauru simples", code: 101, price: 1.3 },
    { name: "Bauru com ovo", code: 102, price: 1.5 },
    { name: "Hambúrger", code: 103, price: 1.2 },
    { name: "Cheeseburguer", code: 104, price: 1.3 },
    { name: "Refrigerante", code: 105, price: 1.0 }
  ];

  function readOrder() {
  const itemCode = parseInt(prompt("Digite o código do item pedido:"));
  const quantity = parseInt(prompt("Digite a quantidade:"));

  return { itemCode, quantity };
}
function calculatePayment(order) {
  const item = barMenu.find(item => item.code === order.itemCode);

  if (!item) {
    alert("Item não encontrado.");
    return;
  }

  const totalPayment = item.price * order.quantity;

  return totalPayment;
}

function displayPayment(totalPayment) {
  alert(`Valor a ser pago: R$${totalPayment.toFixed(2)}`);
}

/* quinze */

let sexo = prompt("digite seu sexo: M ou F");
sexo = sexo.toUpperCase();
if (sexo == 'M' || sexo == 'F') {
   let altura_H = Number(prompt("Digite sua altura: "));
   const pesoIdealH = Math. pow((72.7 * altura_H) - 58);}
else { let altura_F = Number(prompt("Digite sua altura: "))
    const pesoIdealF = Math.pow ((62.1 * h) -44.7)}
document.write  ("Seu peso ideal é de:" +pesoIdealH+ "/" +pesoIdealF )

/* dezesseis */

/* dezessete */
function calcularMediaAritmetica(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
function calcularMediaPonderada(nota1, nota2, nota3) {
  const pesos = [3, 3, 4];
  let somaPonderada = 0;

  for (let i = 0; i < notas.length; i++) {
    somaPonderada += notas[i] * pesos[i];
  }
  return somaPonderada / pesos.reduce((a, b) => a + b, 0);
}
function lerNotasEOpcao() {
  const nota1 = parseFloat(prompt("Digite a primeira nota: "));
  const nota2 = parseFloat(prompt("Digite a segunda nota: "));
  const nota3 = parseFloat(prompt("Digite a terceira nota: "));
  const opcao = prompt("Escolha o tipo de média:\n1 - Aritmética\n2 - Ponderada").toLowerCase();

  return { nota1, nota2, nota3, opcao };
}
function main() {
  const { nota1, nota2, nota3, opcao } = lerNotasEOpcao();
  if (opcao === '1') {
    const mediaAritmetica = calcularMediaAritmetica(nota1, nota2, nota3);
    console.log("A média aritmética é: " + mediaAritmetica);
  } else if (opcao === '2') {
    const mediaPonderada = calcularMediaPonderada(nota1, nota2, nota3);}}
/* dezoito */

/* dezenove */

/* vinte */

/* vinte e um */
