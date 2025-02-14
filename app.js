//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

var amigos = [];
const re = /^([a-zA-ZÀ-ÿ ]{1,50})\b$/;
const element = (e) => document.getElementById(e);
const random = () => Math.floor(Math.random() * amigos.length);

function sortearAmigo() {
    if (amigos.length) {
        element("resultado").innerHTML = `${amigos[random()]}, foi a pessoa sorteada!`;
        limparInformacoesTela();
    } else {
        alert("Sua lista de amigos está vazia.");
    }
}

function adicionarAmigo() {
    let input = element("amigo").value.trim();
    if (input.match(re)) {
        amigos.push(input);
        limparInformacoesTela();
        exibirListaAmigos();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function exibirListaAmigos() {
    amigos.forEach((amigo) => element("listaAmigos").innerHTML += `<li>${amigo}</li>`);
}

function limparInformacoesTela() {
    element("amigo").value = '';
    element("listaAmigos").innerHTML = '';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') 
        adicionarAmigo()
    });
