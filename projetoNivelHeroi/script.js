const {personagem_, criarPersonagem} = require('./personagem');
const {monstro_, criarMonstro} = require('./monstro');
const {verificarClassificacao, batalha} = require('./funcoesGerais');
const  readlineSync  = require('readline-sync');
const msgInicial = 'Seja bem vindo jogador!';
const msgCriacaoPersonagem = 'Vamos iniciar com a criação de seu personagem!'
const info =  "Os valores utilizados para forca, destreza e constituicao não podem repetir e devem ser até 5"
let monstros = [];
//criação dos monstros
criarMonstro(monstros);
//mensagem do sistema
console.log(msgInicial)
console.log(msgCriacaoPersonagem)
console.log(info)
//criação do personagem
let personagem1 = criarPersonagem(readlineSync.question("Digite seu nome:"), 0);
//batalha
batalha(personagem1,monstros);
//apresentação da classificação
console.log(verificarClassificacao(personagem1.experiencia));
