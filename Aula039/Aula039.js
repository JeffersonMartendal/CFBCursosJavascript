const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)

if(btn_c[0].children.length > 0) {
    console.log("Possui filhos")
} else {
    console.log("NÃO possui filhos")
}

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

console.log(caixa1.firstElementChild.innerHTML = "TESTE")

console.log(caixa1.children[1].innerHTML = "TESTE")

console.log(caixa1.parentNode)

console.log(caixa1.parentNode.parentNode)

console.log(caixa1.parentNode.children[1])