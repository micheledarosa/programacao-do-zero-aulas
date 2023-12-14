class formaDeBolo {
	constructor(saborDaMassa, saborRecheio){
    	this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    // não precisa escrever a palavra function
    toString(){
    	console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    
    assar(){
    	console.log("bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

console.log(boloFesta.saborRecheio)
// console.log(boloFesta.saborRecheio)
// console.log(boloFesta.saborDaMassa)

boloFesta.toString()
boloPremium.toString()
boloPremium.assar()
