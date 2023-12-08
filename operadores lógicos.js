// AND ( && ) - 100 moedas e 1 item estrela
let moedasColetadas = 100
let itemColetado = "estrela"
let resultado = (moedasColetadas >= 100) && (itemColetado === "estrela")
console.log(resultado)

// OR ( || - pipe ) - só pode sair se não estiver chovendo OU com guarda chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// NOT ( ! ) - nega uma afirmação 
let tempoHoje = "chuva"
let horario = 8
let res = !((tempoHoje === "chuva") && (horario > 6))
console.log(res)
