//criar uma class com o tipo do personagem.
class heros{
    constructor(type){
        this.type = type

    }
    atacar(){//caso o personagem tenha uma das classes ele retorna um ataque especifico.
        if(this.type === "guerreiro"){
            console.log(`o ${this.type} atacou com uma katana`)
        }
        else if(this.type === "mago"){
            console.log(`o ${this.type} atacou usando magia`)
        }
        else if(this.type === "monge"){
            console.log(`o ${this.type} atacou com sla oq`)
        }
        else if(this.type === "ninja"){
            console.log(`o ${this.type} atacou com uma kunai ninja!`)
        }
    }
}
//tipos diferentes de classes pra tipos diferentes de ataque.
let guerreiro = new heros("guerreiro");
guerreiro.atacar();

let mago = new heros("mago");
mago.atacar();

let monge = new heros("monge");
monge.atacar();


let ninja = new heros("ninja");
ninja.atacar();