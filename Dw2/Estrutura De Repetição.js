/* 1 */
let note = prompt("Digite um número entre 1 a 10:");

while (note < 0 || note > 10) {
 
  alert("Valor inválido");
  note = prompt("Digite um número entre 1 a 10");
}

alert("Valor válido! Número : " + note);


