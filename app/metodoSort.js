//Resgatando o ID do botão de ordenação em nosso documento HTML
const botaoOrdenacaoPorPreco = document.getElementById("btnOrdenarPorPreco");

//Adicionado um ouvinte de evento para capturar os cliques em nosso botão
botaoOrdenacaoPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco (){
    let livrosOrdenados = livros.sort((a, b)=> a.preco - b.preco  );

    exibirLivrosNaTela(livrosOrdenados);
}