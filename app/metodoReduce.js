function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acumulador, livros)=> acumulador+livros.preco, 0).toFixed(2)
}