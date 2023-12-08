// switch, case, break, default

let fruta = "morango"

switch (fruta){
    case "laranja":
        console.log("suco de laranja")
        break  
    case "banana":
    case "morango":
        console.log("vitamina de " + fruta)
        break
    case "maça":
        console.log("suco de maçã")
        break
    default:
        console.log("suco genérico")
}
