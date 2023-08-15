const { exec } = require('child_process'); //importando o método exec do módulo child_process. O exec é uma função que permite executar comandos do sistema operacional a partir do Node.js.

exec('start microsoft-edge:https://replit.com/login') //usando o comando exec para executar um comando via node.js para acessar o site recomendado pelo professor.

//var serve para a variável ser acessada em qualquer bloco de código. Salvo situação que a variável estiver sendo declarada dentro de funções

//let serve para a variável ser acessada no escopo/bloco que foi criada.

//const variável constante, não pode ser alterada.

function teste() {
    let nome = "Bruno"
    if(true) {
        console.log("Dentro do IF " + nome)
    }
    console.log("Dentro do teste: " + nome)
}

teste()
