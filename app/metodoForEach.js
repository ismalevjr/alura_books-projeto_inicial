// Capturando a section onde faremos a criação dos livros
const elementoParaInsercaoLivros = document.getElementById("livros");

//Capturando o elemento totalizad
const elementoTotalizadorDosLivros = document.getElementById("valor_total_livros_disponiveis");

// Função para que consigamos exibir os livros capturados pela requisição na tela 
function exibirLivrosNaTela(listaDeLivros){

    elementoTotalizadorDosLivros.innerHTML= "";

    // garantimos que assim que chamamos as funções nosso elemento virá com a lista vazia
    elementoParaInsercaoLivros.innerHTML = "";
    // Utilizando o forEach visando definir o mesmo processo para os itens do array
    listaDeLivros.forEach(livro => {

        // Criação de variável para armazenamento do check de dispoinibilidade utilizando operador ternário
        let disponibilidade = livro.quantidade >0 ? "livro_imagens" : "livro_imagens indisponivel"

        // Criando a estrutura dos itens diretamente atrelado ao HTML que serão feitos para cada item do array
        elementoParaInsercaoLivros.innerHTML += 
        
        `<div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`

    })};
