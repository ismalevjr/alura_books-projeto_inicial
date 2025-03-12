let livros = [];
const endpointDaAPI ="https://guilhermeonrails.github.io/casadocodigo/livros.json";

// Chamando função para requisição de nosso end-point
getBuscarLivrosDaAPI()

// Capturando a section onde faremos a criação dos livros
const elementoParaInsercaoLivros = document.getElementById("livros");


// Criando a função de busca dos livros
async function getBuscarLivrosDaAPI() {

    //Declaração de variável para utilizarmos a API de resgate de nosso end-point utilizando o parâmetro fetch 
    const res = await fetch(endpointDaAPI);

    // declarando em nosso array os dados de nosso endpoint como json, visnado a manipulação deste dados
    livros = await res.json()

    console.table(livros);

    // Chamando a função para exibir os livros na tela
     exibirLivrosNaTela(livros);
}

// Função para que consigamos exibir os livros capturados pela requisição na tela 

function exibirLivrosNaTela(listaDeLivros){
    
    // Utilizando o forEach visando definir o mesmo processo para os itens do array
    listaDeLivros.forEach(livro => {

        // Criando a estrutura dos itens diretamente atrelado ao HTML 
        elementoParaInsercaoLivros.innerHTML += 
        
        `<div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`

    });
}




