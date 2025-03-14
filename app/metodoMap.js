function aplicarDesconto(livros){
    let desconto = 0.3;

    const livrosComDesconto = livros.map(livros =>{
        return {...livros, preco: livros.preco-(livros.preco*desconto)}
    })
    return livrosComDesconto;
}