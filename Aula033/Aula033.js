const query_divTodas = [...document.querySelectorAll("div, p")]
const query_divClasse = [...document.querySelectorAll("div[class]")]
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosEspeciais = document.querySelectorAll("#c1")[0]

console.log(query_divClasse)

console.log(query_divTodas)
console.log(query_cursosTodos)
console.log(query_cursosEspeciais)