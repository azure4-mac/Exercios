/* 1 */
let note = prompt("Digite um número entre 1 a 10:");

while (note < 0 || note > 10) {
 
  alert("Valor inválido");
  note = prompt("Digite um número entre 1 a 10");
}

alert("Valor válido! Número : " + note);

/* senha (2) */ 
let senha = prompt("Digite uma senha:");

while (senha&& senha.length < 6){
    alert ('Deve possuir mais de 6 caracteres.')
    senha = prompt('Digite uma senha')
}
alert ("Senha cadastrada com sucesso!")


/* 3 */
let nome, idade, salario, estado_civil;

do {
  nome = prompt('Digite seu nome:');
  idade = parseInt(prompt('Digite sua idade:'));
  salario = parseFloat(prompt('Digite seu salário:'));
  estado_civil = prompt('Digite seu estado civil:');

  if (!nome || nome.length <= 3 ||
      isNaN(idade) || idade < 0 || idade > 150 ||
      isNaN(salario) || salario <= 0 ||
     !estado_civil.match(/(s|c|v|d)/i)) {
    alert('Por favor, digite os dados corretamente.\nNome (mínimo de 3 caracteres), Idade (0-150), Salário (maior que 0), Estado Civil (s, c, v, d).');
  }
} while (!nome || nome.length <= 3 ||
         isNaN(idade) || idade < 0 || idade > 150 ||
         isNaN(salario) || salario <= 0 ||
        !estado_civil.match(/(s|c|v|d)/i));

        if (!nome || nome.length <= 3 ||
    isNaN(idade) || idade < 0 || idade > 150 ||
    isNaN(salario) || salario <= 0 ||
   !estado_civil.match(/(s|c|v|d)/i)) {
  alert('Por favor, digite os dados corretamente.\nNome (mínimo de 3 caracteres), Idade (0-150), Salário (maior que 0), Estado Civil (s, c, v, d).');
}


document.write(
  "<h2>" + "Nome: " + nome + "<br/> Idade: " + idade + "<br/> Salário: R$" + salario.toFixed(2) + "<br/> Estado Civil: " + estado_civil + "<h2>"
);

/* 4 */
let pobA = 80000
let pobB = 200000
let taxa_crescimentoA = 0.03
let taxa_crescimentoB = 0.015

let anos = 0

while (pobA <= pobB) {
    pobA += pobB * taxa_crescimentoB;
    pobB += pobA * taxa_crescimentoA;
    anos++
}

console.log(`O país A ultrapassou o País B em ${anos + 1} anos`)

/* 5 */
