//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("A lista está vazia.");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigos[indice]}`;
        document.getElementById("listaAmigos").innerHTML = null;
    }
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();
    if (!validarNomeAmigo(nomeAmigo)) {
        alert("Por favor, insira um nome válido.");
    } else {
        amigos.push(nomeAmigo);
        document.getElementById("amigo").value = null;
        exibirListaAmigos();
    }
}

function exibirListaAmigos() {
    document.getElementById("listaAmigos").innerHTML = null;
    amigos.forEach(amigo => document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`);
}

function validarNomeAmigo(nome) {
    return nome.match(/^([a-zA-ZÀ-ÿ ]{1,50})\b$/);
}
