function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.anonimo = function() {
        setTimeout(function() {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }

    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1 = new aluno("Jeff", 10)
al1.anonimo()
al1.dados_arrow()