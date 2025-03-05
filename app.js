var amigos = [];
const re = /^([a-zA-ZÀ-ÿ ]{1,50})\b$/;
const getElementById = (id) => document.getElementById(id);
const sorteado = () => amigos[Math.floor(Math.random() * amigos.length)];

function sortearAmigo() {
    if (!amigos.length) return alert("Sua lista de amigos está vazia.");
    getElementById("resultado").innerHTML = `${sorteado()}, foi sorteado(a)!`;
    limparInformacoesTela();
}

function adicionarAmigo() {
    let amigo = getElementById("amigo").value.trim();
    if (!amigo.match(re)) return alert("Por favor, insira um nome válido.");
    amigos.push(amigo);
    limparInformacoesTela();
    exibirListaAmigos();
}

function exibirListaAmigos() {
    amigos.forEach((amigo) => getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`);
}

function limparInformacoesTela() {
    getElementById("amigo").value = '';
    getElementById("listaAmigos").innerHTML = '';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') 
        adicionarAmigo()
    });
