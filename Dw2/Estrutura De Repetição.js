/* senha (2) */ 
let senha = prompt("Digite uma senha:");

while (senha&& senha.length < 6){
    alert ('Deve possuir mais de 6 caracteres.')
    senha = prompt('Digite uma senha')
}
alert ("Senha cadastrada com sucesso!")


/* 1 */
let note = prompt("Digite um número entre 1 a 10:");

while (note < 0 || note > 10) {
 
  alert("Valor inválido");
  note = prompt("Digite um número entre 1 a 10");
}

alert("Valor válido! Número : " + note);


