let userName = getFirstName("Michele-da-Rosa-Lopes", "-")
console.log(`Seja bem vindo ${userName}`)

userName = getFirstName("Michele da Rosa Lopes", " ")
console.log(`Seja bem vindo ${userName}`)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}

/*
let firstName = name.split(" ")[0] 
quebra o texto toda vez que encontra um espaço */
