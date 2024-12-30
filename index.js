const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

main()

async function main(){
    let saldoVitorias = await CalcularQuantidadeDeVitorias()
    let rankHeroi = DescobrirRank(saldoVitorias)
    MensagemDeSaida(saldoVitorias,rankHeroi)
    readline.close()
}

async function CalcularQuantidadeDeVitorias() {
    let vitorias = await perguntar("Quantas vitórias você tem? ")
    let derrotas = await perguntar("Quantas derrotas você tem? ")
    
    let saldo = vitorias - derrotas
    return saldo
}

function perguntar(pergunta) {
    return new Promise((resolve) => {
        readline.question(pergunta, (resposta) => {
            resolve(Number(resposta))
        })
    })
}
function DescobrirRank(saldo){
    let rank;
    if (saldo >= 101) {
        rank = "Imortal"
    } else if (saldo >= 91) {
        rank = "Lendário"
    } else if (saldo >= 81) {
        rank = "Diamante"
    } else if (saldo >= 51) {
        rank = "Ouro"
    } else if (saldo >= 21) {
        rank = "Prata"
    } else if (saldo >= 11) {
        rank = "Bronze"
    } else {
        rank = "Ferro"
    }
    return rank
}
function MensagemDeSaida(saldo,rank){
    console.log(`O herói tem de saldo ${saldo} vitórias e está no nível de ${rank}` )
}