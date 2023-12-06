let idMonstros = 0
class monstro_{
    constructor(experiencia,atributos){
        this.experiencia = experiencia
        this.atributos = atributos
    }
    gerarAtributos(){
        let listaAtributos = [Math.floor(Math.random()*6),Math.floor(Math.random()*6),Math.floor(Math.random()*6)]
        this.atributos = listaAtributos
    }
}

function criarMonstro(monstros){
    while(monstros.length<10){
        monstros.push(new monstro_(Math.floor(Math.random()*1000)+1000))
        monstros[idMonstros].gerarAtributos();
        idMonstros++;
    }
}

module.exports = {monstro_, criarMonstro}