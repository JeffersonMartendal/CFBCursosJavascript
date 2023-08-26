//Operador Ternário
let num = 10

let res = num%2

let r = (!(num%2) ? "Par" : "Ímpar")
// 0 false
// 1 true
console.log(r)

if(res==0) {
    console.log("Par")
} else {
    console.log("Impar")
}