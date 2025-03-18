//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosParaSeremSorteados = [];

//function exibirLista(tag, texto){
//    let campo = document.querySelector(tag);
//    campo.innerHTML = texto;
//}

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('input');
    
    const novoAmigo = nomeDoAmigo.value.trim();

    
    if (novoAmigo == '') {
        alert('Digite um nome válido!');
        return;
    }
    amigosParaSeremSorteados.push(novoAmigo);
    //exibirLista('ul', amigosParaSeremSorteados);
    const amigoParaSortear = document.getElementById('amigosParaSeremSorteados');
    const listaDeAmigos = document.creatElement('li');
    listaDeAmigos.textContent = novoAmigo;
    amigoParaSortear.appendChild(listaDeAmigos);
    //console.log(amigosParaSeremSorteados);
    //limparCampo();
    nomeDoAmigo.value = '';
    console.log('lista atual:', amigosParaSeremSorteados);
    
}

//function limparCampo(){
//    let addcionar = document.querySelector('input');
//    addcionar.value = "";
//}

function sortearAmigo() {
    let amigoSorteado = amigosParaSeremSorteados[Math.floor(Math.random() * amigosParaSeremSorteados.length)];
    exibirLista('h2', amigoSorteado);
}
