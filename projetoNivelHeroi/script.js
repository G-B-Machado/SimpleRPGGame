import { question } from 'readline-sync';
const msgInicial = 'Seja bem vindo jogador!';
const msgCriacaoPersonagem = 'Vamos iniciar com a criação de seu personagem!'
const info =  "Os valores utilizados para forca, destreza e constituicao não podem repetir e devem ser até 5"
let indicadorJogo = true;
let experiencia = 0
let indicadorCriacaoPersonagem = true;
let monstros = [];
let idMonstros = 0
let validadePersonagem = true;
let personagem = [];
//criando monstros

while(monstros.length<10){
    idMonstros++;
    monstros.push([idMonstros, 1001,Math.floor(Math.random(10)*5),Math.floor(Math.random(10)*5),Math.floor(Math.random(10)*5)])
}

console.log(msgInicial)
console.log(msgCriacaoPersonagem)
console.log(info)

while(indicadorJogo){
    while (indicadorCriacaoPersonagem){
        personagem = [question("Digite seu nome:"), experiencia, question("Digite sua forca:"), question("Digite sua destreza:"), question("Digite sua constituicao:")]
    for(let i =2; i<personagem.length; i++){
        if(personagem[i] > 5 || personagem[i] < 0 ){
            console.log("Por favor, informe valores válidos")
            validadePersonagem = false;
            break;
        }
    }
    indicadorCriacaoPersonagem = false;
    }
    if(validadePersonagem){
        let decisao;
        let i =0;
        for(let count =0; count < monstros.length; count++){
            console.log("Você encontrou um monstro!");
            decisao = question("Digite 1 para matar o monstro ou 2 para fugir: ");
            if(decisao == 1){
                if(personagem[2] >  monstros[i][2] || personagem[3] >  monstros[i][3] && personagem[4] >=  monstros[i][4]){
                    console.log("Parabens, você venceu e recebeu" + monstros[i][1] + "xp")
                    personagem[1] += 1000;
                    i++;
                }else{
                    console.log("Você morreu!")
                    indicadorJogo = false;
                    break;
                }
            } else if (decisao == 2){
            console.log("Você fugiu")
            } else{
            console.log("Você não tomou uma decisão e foi morto pelo monstro");
            }
        }
    }
    if(personagem[1]>=10001){
        indicadorJogo = false;
    }
}

console.log(personagem[1])
if(personagem[1] < 1000){
    console.log("Você concluiu o jogo no nivel Ferro")
}else if(personagem[1] >= 1001 && personagem[1] <= 2000){
    console.log("Você concluiu o jogo no nivel  Bronze")
}else if(personagem[1] >= 2001 && personagem[1] <= 5000){
    console.log("Você concluiu o jogo no nivel  Prata")
}else if(personagem[1] >= 6001 && personagem[1] <= 7000){
    console.log("Você concluiu o jogo no nivel  Ouro")
}else if(personagem[1] >= 7001 && personagem[1] <= 8000){
    console.log("Você concluiu o jogo no nivel  Platina")
}else if(personagem[1] >= 8001 && personagem[1] <= 9000){
    console.log("Você concluiu o jogo no nivel  Ascendente")
}else if(personagem[1] >= 9001 && personagem[1] <= 10000){
    console.log("Você concluiu o jogo no nivel  Imortal")
}else if(personagem[1] >10001){
    console.log("Você concluiu o jogo no nivel  Radiante")
}