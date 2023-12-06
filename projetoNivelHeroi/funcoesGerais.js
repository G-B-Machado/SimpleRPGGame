const  readlineSync  = require('readline-sync');
function verificarClassificacao(xp){
    console.log(xp)
    if(xp < 1000){
        return "Você concluiu o jogo no nivel Ferro"
    }else if(xp >= 1001 && xp <= 2000){
        return "Você concluiu o jogo no nivel  Bronze"
    }else if(xp >= 2001 && xp <= 5000){
        return "Você concluiu o jogo no nivel  Prata"
    }else if(xp >= 6001 && xp <= 7000){
        return "Você concluiu o jogo no nivel  Ouro"
    }else if(xp >= 7001 && xp <= 8000){
        return "Você concluiu o jogo no nivel  Platina"
    }else if(xp >= 8001 && xp <= 9000){
        return "Você concluiu o jogo no nivel  Ascendente"
    }else if(xp >= 9001 && xp <= 10000){
        return "Você concluiu o jogo no nivel  Imortal"
    }else if(xp >10001){
        return "Você concluiu o jogo no nivel  Radiante"
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
}

module.exports = {verificarClassificacao, batalha}