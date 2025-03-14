// Capturando a section onde faremos a criação dos livros
const elementoParaInsercaoLivros = document.getElementById("livros");


// Função para que consigamos exibir os livros capturados pela requisição na tela 
function exibirLivrosNaTela(listaDeLivros){
    // Utilizando o forEach visando definir o mesmo processo para os itens do array
    listaDeLivros.forEach(livro => {

        // Criando a estrutura dos itens diretamente atrelado ao HTML que serão feitos para cada item do array
        elementoParaInsercaoLivros.innerHTML += 
        
        `<div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`

    })};