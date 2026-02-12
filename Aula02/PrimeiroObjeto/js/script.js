
const produtos = {
    produtos1 : {
        nome : "Camiseta de algodão francesa",
        preco : 59.99,
        descricao : "Camiseta de algodão com estampa divertida",
        estoque : 100,
        categoria : "Roupas",
        disponivel : true,
} ,
 produtos2 : {
        nome: "Calça jeans Slim Fit",
        preco: 89.99,
        descricao: "Calça jeans com corte slim fit",
        estoque: 50,
        categoria: "Roupas",
        disponivel : false,
 },
 produtos3 : {
        nome: "Tênis esportivo Nike",
        preco: 400.00,
        descricao: "Tênis esportivo Nike com tecnologia de amortecimento",
        estoque: 25,
        categoria: "Calçados",
        disponivel : true,
 }
};

//pegar a div que vamos exibir as informações dos produtos
const listaProdutosDiv = document.getElementById('lista-produtos');
 
//vamos iterar sobre os produtos e exibir as informações
for (const key in produtos) {
    //vamos ler as propriedades de cada produto
    if(produtos.hasOwnProperty(key)){   
        const produto = produtos[key];
        //vamos criar um elemento HTML para exibir as informações do produto
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        //vamos criar o elemento <h3> para exibir o nome do produto
        const nomeH3 = document.createElement('h3');
        //vamos exibir o nome do produto
        nomeH3.textContent = produto.nome;

        //vamos criar o elemento <p> para exibir o preço do produto formatado com duas casas decimais
        const precoP = document.createElement('p');
        //vamos exibir o preço do produto
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        //vamos criar o elemento <p> para exibir a disponibilidade do produto
        const disponibilidadeP = document.createElement('p');
        //vamos exibir a disponibilidade do produto
        disponibilidadeP.textContent = `Disponibilidade:`;
        const spanDisponibilidade = document.createElement('span');
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponível' : 'Indisponível';

        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

        disponibilidadeP.appendChild(spanDisponibilidade);

        produtoDiv.appendChild(nomeH3); 
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponibilidadeP);

        //vamos adicionar a div produto a lista de produtos no html
        listaProdutosDiv.appendChild(produtoDiv);
    }
}