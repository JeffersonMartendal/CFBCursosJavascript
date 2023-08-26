let num = 100
let clima = "Sol"
let energia = 100

if(num > 10) {
    console.log("Numeral maior que 10")
    if(num > 50) {
        console.log("Numeral maior que 50")
    }
} else if(num > 5){
    console.log("Numeral esta entre 6 e 10")
} else {
    console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa")

if(energia > 70 && clima=="Sol") {
    console.log("Vou a praia")
} else {
    console.log("Vou ao cinema")
}