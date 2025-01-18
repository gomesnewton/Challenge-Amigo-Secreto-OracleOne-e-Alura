//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

var amigos = [];

const re = /^([a-zA-ZÀ-ÿ ]{1,50})\b$/;
const inputAmigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
const listaAmigos = document.getElementById("listaAmigos");

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') 
        adicionarAmigo()
    });

function sortearAmigo() {
    if (!amigos.length) {
        alert("Sua lista de amigos está vazia.");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `${amigos[indice]}\n foi a pessoa sorteada!`;
        limparInformacoesTela();
    }
}

function adicionarAmigo() {
    let nomeAmigo = inputAmigo.value.trim();
    if (!nomeAmigo.match(re)) {
        alert("Por favor, insira um nome válido.");
    } else {
        amigos.push(nomeAmigo);
        limparInformacoesTela();
        exibirListaAmigos();
    }
}

function exibirListaAmigos() {
    amigos.forEach((amigo) => (listaAmigos.innerHTML += `<li>${amigo}</li>`));
}

function limparInformacoesTela() {
    inputAmigo.value = '';
    listaAmigos.innerHTML = '';
}

