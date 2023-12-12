torrar("pão de forma", 12)
torrar("pão integral", 10.90, "Michele")

// os parâmetros precisam estar na ordem correta
// caso não passe um nome, pega um valor default
// o parâmetro que não for obrigatório, deixar por último
function torrar(pao, valor, nome = "cliente"){
  console.log("torrada feita com " + pao)
  console.log("O valor total é " + valor)
  console.log("ela é um pedido de " + nome)
}

/* toda variável dentro da função existe apenas
DENTRO da função */

console.log(pao)  // não funciona
