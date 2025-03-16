//Declaração de variável para busca para todos os botões
const botoes = document.querySelectorAll(".btn")

// Adicionando o ouvinte de evento para o clique nos botões
botoes.forEach(botao =>{
    botao.addEventListener("click", (evento)=>{
        evento.preventDefault();

        const categoriaBotao = evento.target.value;

        filtrarLivros(categoriaBotao);
    })
})

function filtrarLivros(filtro){

    const livrosFiltrados = filtro == "disponivel"? filtrarPorDisponibilidade() : filtrarPorCategoria(filtro)
    exibirLivrosNaTela(livrosFiltrados);

    if (filtro == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)  
    }
}

function filtrarPorCategoria(filtro) {
    return livros.filter(livro => livro.categoria == filtro
    );
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoTotalizadorDosLivros.innerHTML = `    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div> `
}