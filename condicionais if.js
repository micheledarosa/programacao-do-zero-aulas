// IF, ELSE IF, ELSE

let ehLigado = true

if (ehLigado){
    console.log("executou comando")
}

// -------------------------------------------

let possuiOvos = false
let itensComprados = ""

if (possuiOvos){
    itensComprados = "Leite"
} else {
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

// --------------------------------------------

let nivelDeFome = 1

if (nivelDeFome === 1){
    console.log("pouca fome")
} else if (nivelDeFome === 2){
    console.log("muita fome")
} else {
    console.log("você comeria mais que o pica pau")
}
