// Função para criação dos descontos em nossos preços de maneira automática

function aplicarDesconto(livros){
    //Declaração da variável que será responsável pelo desconto aplicado 
    let desconto = 0.3;

    //Declaração da variável que armazenará nosso método map para seleção apenas do objeto preco dentro de nosso array 
    const livrosComDesconto = livros.map(livros =>{
        // Captura do preço dentro do array e definição do novo valor a ser executado com base no cálculo do desconto 
        return {...livros, preco: livros.preco-(livros.preco*desconto)}
    })
    // Return qual a função de devolver para a função chamada o novo array gerado com o método map
    return livrosComDesconto;
}