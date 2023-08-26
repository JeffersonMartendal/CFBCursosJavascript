// Operador Spread ...
// const jogador1 = {nome : "Jef", energia : 100, vidas : 3, margia : 150}
// const jogador2 = {nome : "Je", energia : 100, vidas : 5, velocidade : 80}
// const jogador3 = {...jogador1,...jogador2}
// console.log(jogador3)

// let n1 = [10, 20, 30]
// let n2 = [11, 22, 33, 44, 55]
// let n3 = [n1, n2]

// console.log("n1: " + n1)
// console.log("n2: " + n2)
// console.log("n3: " + n3)

// const soma = (v1, v2, v3) => {
//     return v1 + v2 + v3
// }
// let valores = [1, 5, 4]
// console.log(soma(...valores))

const obj1 = document.getElementsByTagName("div")
const obj2 = [...document.getElementsByTagName("div")]

obj2.forEach(element => {
    console.log(element)
})

setTimeout(() => {obj2.forEach(element => {
    console.log(element.innerHTML = "CURSO")
})}, 1000)

console.log(obj1)
console.log(obj2)
