class personagem_{
    constructor(nome, experiencia, atributos){
        this.nome = nome
        this.experiencia = experiencia
        this.atributos = atributos
    }
    gerarAtributos(){
        let listaAtributos = [Math.floor(Math.random()*6),Math.floor(Math.random()*6),Math.floor(Math.random()*6)]
        this.atributos = listaAtributos
    }
}

function criarPersonagem(nome, experiencia){
    const personagem = new personagem_(nome, experiencia);
    personagem.gerarAtributos();
    return personagem
}

module.exports = {personagem_, criarPersonagem}