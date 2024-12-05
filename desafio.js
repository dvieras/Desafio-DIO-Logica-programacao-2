let prompt = require('prompt-sync')();

let controle = true

    while(controle) {

        let nomeHeroi = prompt("Qual o nickName do seu herói: ")
        let saldoPartidas = parseInt(prompt("Quantas partidas seu Herói tem ? "))
        let saldoDerrotas = parseInt(prompt("Quantas derrotas seu Herói tem ? "))
        let resultadoCalculoRank = calculadoraRank(saldoPartidas, saldoDerrotas)
        let rankHeroi = " "

        if (resultadoCalculoRank <= 10) {
            rankHeroi = "Ferro"
        } else if (resultadoCalculoRank >= 11 && resultadoCalculoRank <= 20) {
            rankHeroi = "Bronze"
        } else if (resultadoCalculoRank >= 21 && resultadoCalculoRank <= 50) {
            rankHeroi = "Prata"
        } else if (resultadoCalculoRank >= 51 && resultadoCalculoRank <= 80) {
            rankHeroi = "Ouro"
        } else if (resultadoCalculoRank >= 81 && resultadoCalculoRank <= 90) {
            rankHeroi = "Diamante"
        } else if (resultadoCalculoRank >= 91 && resultadoCalculoRank <= 100) {
            rankHeroi = "Lendario"
        } else if (resultadoCalculoRank >= 101) {
            rankHeroi = "Imortal"
        }

        console.log(`O Herói ${nomeHeroi} tem um saldo de ${resultadoCalculoRank} vitorias e está no rank ${rankHeroi}`)

        console.log("Você deseja refazer o calculo de rank ?  ")
        let continuarPrograma = prompt("Digite [S] para continuar e [N] para sair.").toUpperCase()
        
        if(continuarPrograma === "S") {
            console.log("aguarde, resetando dados ...")
        }else if (continuarPrograma === "N") {
            console.log("Programa encerrado !!")
            controle = false
        } else {
            console.log("Opção invalida ! Encerrando o programa.")
            controle = false
        }
     }

function calculadoraRank (vitorias, derrotas) {
    return vitorias - derrotas
}
