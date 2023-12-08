let pokemon = ["pikachu", "charmander", "bulbasaur"]  // vetor: organiza elementos do mesmo tipo
let timePokemon = [  // matriz: organiza elementos de tipos diferentes
  ["pikachu", "M", 1],
  ["charmander", "F", 4],
  ["bulbasaur", "M", 2]
]

pokemon.pop() // remove o último da lista
pokemon.shift()  // remove o primeiro da lista

console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + 
timePokemon[1][1] + " e está no nível " + timePokemon[1][2])

console.log(timePokemon.length)  // tamanho da matriz
