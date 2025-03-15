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

    const livrosFiltrados = livros.filter(livro =>livro.categoria == filtro
    )
    exibirLivrosNaTela(livrosFiltrados);
}