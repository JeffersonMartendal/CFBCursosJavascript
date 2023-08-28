const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const btn1 = document.querySelector("#btn_remover")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=> {
    el.addEventListener("click",(evt)=> {
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=> {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    //console.log(cursosSelecionados)
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
})

btn1.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el) => {
        el.classList.toggle("selecionado")
        caixa1.appendChild(el)
    })
})

