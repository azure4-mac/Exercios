/* 1 */ 
function sim (){
    for (let x = 1; é <= n; x++){
        let s =""
        for (let y = 0; y < x; y++) {
            s = s + " " + y;
        }
        console.log(s)
    }
}

/* 2 */ 
let a1 = Number(prompt())
let a2 = Number(prompt())
let a3 = Number(prompt())

function soma(a1, a2, a3){
  return a1 + a2 + a3
}

/* 4 */
let a1 = Number(prompt())
let a2 = Number(prompt())

function pn (a1, a2){
  if (a1 < 0){
    console.log(`%{a1} é um numero negativo`)
  }
  else if (a1 > 0){
    console.log(`${a1} é um numero positivo`)
  }
  else if (a2 < 0 ){
    console.log(`%{a2} é um numero negativo`)
  }
  else {
    console.log(`${a2} é um numero positivo`)
  }

}
pn(a1, a2)

/* 5 */
