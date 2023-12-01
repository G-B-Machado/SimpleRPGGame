const  readlineSync  = require('readline-sync');
const msgInicial = 'Seja bem vindo jogador!';
const msgCriacaoPersonagem = 'Vamos iniciar com a criação de seu personagem!'
const info =  "Os valores utilizados para forca, destreza e constituicao não podem repetir e devem ser até 5"
let monstros = [];
let idMonstros = 0

//Classes do sistema
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

//funções do sistema
function batalha(personagem,monstros){
    let somaAtributoPersonagem = 0;
    let somaAtributoMonstro = 0;
    for(let i=0; i<monstros.length;i++){
        console.log("Você encontrou um monstro!")
        console.log(`Sua experiência é ${personagem.experiencia}`)
        let decisao = readlineSync.question("Digite 1 para matar o monstro ou 2 para fugir: ");
        somaAtributoPersonagem = 0;
        somaAtributoMonstro = 0;
        if(decisao==1){
            for(let i=0;i<personagem.atributos.length;i ++){
                somaAtributoPersonagem = somaAtributoPersonagem + personagem.atributos[i];
                somaAtributoMonstro = somaAtributoMonstro + monstros[i].atributos[i];
            }
            console.log(somaAtributoPersonagem)
            console.log(somaAtributoMonstro)
            if(somaAtributoPersonagem>=somaAtributoMonstro){
                console.log(`Você matou o monstro e ganhou ${monstros[i].experiencia}`)
                personagem.experiencia += monstros[i].experiencia;
            }else{
                console.log("Você morreu")
                indicadorJogo = false;
                break;
            }
        }else if (decisao==2) {
            console.log("Você fugiu")
            indicadorJogo = false;
            break;
        }else{
            console.log("Você demorou a tomar uma decisão e acabou morrendo.")
            indicadorJogo = false;
            break;
        }
    }
    console.log("soma-----")
    console.log(somaAtributoPersonagem)
    console.log(somaAtributoMonstro)
}

//criação dos monstros
while(monstros.length<10){
    monstros.push(new monstro_(Math.floor(Math.random()*1000)+1000))
    monstros[idMonstros].gerarAtributos();
    idMonstros++;
}

console.log(msgInicial)
console.log(msgCriacaoPersonagem)
console.log(info)

//geração dos monstros
let personagem1= new personagem_(readlineSync.question("Digite seu nome:"), 0)
personagem1.gerarAtributos();
batalha(personagem1,monstros);

if(personagem1.experiencia < 1000){
    console.log("Você concluiu o jogo no nivel Ferro")
}else if(personagem1.experiencia >= 1001 && personagem1.experiencia <= 2000){
    console.log("Você concluiu o jogo no nivel  Bronze")
}else if(personagem1.experiencia >= 2001 && personagem1.experiencia <= 5000){
    console.log("Você concluiu o jogo no nivel  Prata")
}else if(personagem1.experiencia >= 6001 && personagem1.experiencia <= 7000){
    console.log("Você concluiu o jogo no nivel  Ouro")
}else if(personagem1.experiencia >= 7001 && personagem1.experiencia <= 8000){
    console.log("Você concluiu o jogo no nivel  Platina")
}else if(personagem1.experiencia >= 8001 && personagem1.experiencia <= 9000){
    console.log("Você concluiu o jogo no nivel  Ascendente")
}else if(personagem1.experiencia >= 9001 && personagem1.experiencia <= 10000){
    console.log("Você concluiu o jogo no nivel  Imortal")
}else if(personagem1.experiencia >10001){
    console.log("Você concluiu o jogo no nivel  Radiante")
}
