// script.js

let produtos = [];

async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        produtos = await response.json();
        exibirProdutos();
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        alert('Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.');
    }
}

function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const disponivel = document.getElementById('disponivel').value === 'true';

    if (nome && !isNaN(preco)) {
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: disponivel
        };

        produtos.push(novoProduto);

        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('disponivel').value = 'true';

        exibirProdutos();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function exibirProdutos() {
    const listaProdutosDiv = document.getElementById('lista-produtos');
    listaProdutosDiv.innerHTML = '';

    if (produtos.length === 0) {
        listaProdutosDiv.innerHTML = '<p style="text-align: center; color: #999;">Nenhum produto cadastrado</p>';
        return;
    }

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const nomeH3 = document.createElement('h3');
        nomeH3.textContent = produto.nome;

        const precoP = document.createElement('p');
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const disponibilidadeP = document.createElement('p');
        disponibilidadeP.textContent = 'Disponibilidade: ';

        const spanDisponibilidade = document.createElement('span');
        spanDisponibilidade.textContent = produto.disponivel ? 'Sim' : 'Não';
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');
        disponibilidadeP.appendChild(spanDisponibilidade);

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn-remover');
        btnRemover.onclick = () => removerProduto(index);

        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponibilidadeP);
        produtoDiv.appendChild(btnRemover);

        listaProdutosDiv.appendChild(produtoDiv);
    });
}

function removerProduto(index) {
    produtos.splice(index, 1);
    exibirProdutos();
}

carregarProdutos();