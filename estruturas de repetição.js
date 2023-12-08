// for
for (let contador = 0; contador < 4; contador++){
    console.log("aumentando o contador")
    console.log(contador)
}
// ---------------------

let pontosDeVida = 0

for (let i = 0; i < 11; i++){
    pontosDeVida += 1
    console.log("Tomou poção mágica " + i)
}

console.log(pontosDeVida)

/* ---------------------
while */

let i = 0

while (i < 3) {
    console.log("olá")
    i++
}

/* ---------------------
do while */

let contador = 0

do { // tudo q estiver no do vai executar pelo menos 1x
    console.log("olá")
    contador++
} while (contador < 3)
