//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos'); 

    // Valida se o campo de entrada está vazio
    if (inputAmigo.value.trim() === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Cria um novo item de lista (<li>) com o nome do amigo
    const novoAmigo = document.createElement('li');
    novoAmigo.textContent = inputAmigo.value;

    // Cria um botão de remoção
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('botao-remover');
    botaoRemover.onclick = function () {
        removerAmigo(novoAmigo); // 
    };

    // Adiciona o botão de remoção ao item da lista
    novoAmigo.appendChild(botaoRemover);

    // Adiciona o item à lista de amigos
    listaAmigos.appendChild(novoAmigo);

    inputAmigo.value = ''; // Limpa o campo de entrada
}

// Função para remover um nome da lista
function removerAmigo(amigo) {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.removeChild(amigo); // Remove o item da lista
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos'); 
    const resultado = document.getElementById('resultado'); 
    const amigos = Array.from(listaAmigos.children); 

    // Verifica se há nomes na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado].textContent.replace('Remover', '').trim();
    
    // Para resibir o resultado do sorteio
    resultado.textContent = `Amigo secreto: ${amigoSorteado}`;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    const listaAmigos = document.getElementById('listaAmigos'); 
    const resultado = document.getElementById('resultado'); 

    // Limpa a lista de amigos
    listaAmigos.innerHTML = '';

    // Limpa o resultado do sorteio
    resultado.textContent = '';
}