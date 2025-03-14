let livros = [];
const endpointDaAPI ="https://guilhermeonrails.github.io/casadocodigo/livros.json";

// Chamando função para requisição de nosso end-point
getBuscarLivrosDaAPI()

// Criando a função de busca dos livros
async function getBuscarLivrosDaAPI() {

    //Declaração de variável para utilizarmos a API de resgate de nosso end-point utilizando o parâmetro fetch 
    const res = await fetch(endpointDaAPI);

    // declarando em nosso array os dados de nosso endpoint como json, visnado a manipulação deste dados
    livros = await res.json()

    const livrosComDesconto = aplicarDesconto(livros);

    // Chamando a função para exibir os livros na tela
     exibirLivrosNaTela(livrosComDesconto);
}






