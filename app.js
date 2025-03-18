//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosParaSeremSorteados = [];
const lista = document.getElementById('listaAmigos');
const inputNome = document.getElementById('amigo');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
    const nomeDoAmigo = inputNome.value.trim();
    
    if (!nomeDoAmigo) {
        alert('Por favor, insira um nome!');
        return;
    }

    if(amigosParaSeremSorteados.includes(nomeDoAmigo)) {
        alert('Já adicionou esse amigo!');
        return;
    }

    amigosParaSeremSorteados.push(nomeDoAmigo);
    atualizarLista();
    inputNome.value = '';

    console.log('lista atual:', amigosParaSeremSorteados);  

}

function atualizarLista(){
    lista.innerHTML = ''; 

    amigosParaSeremSorteados.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove"); // Adiciona a classe button-remove
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigosParaSeremSorteados.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigosParaSeremSorteados.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const amigoSorteado = amigosParaSeremSorteados[Math.floor(Math.random() * amigosParaSeremSorteados.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

function limparLista() {
    amigosParaSeremSorteados = [];
    atualizarLista();
    resultado.innerHTML = "";
}

   
