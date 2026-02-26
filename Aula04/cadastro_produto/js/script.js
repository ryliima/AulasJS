document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('produto-form');
    const produtoTableElement = document.getElementById('produtoTable');
    getElementByIdsByName("tbody")[0];
    const produtoIdElement = document.getElementById('produtoId');
    const cancelarBtnElement = document.getElementById('cancelar');
    
    let editandoProduto = false;

    function getProdutos() {
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse(produtos) : [];
    }
});

    function salvarProduto(produto) {
        localStorage.setItem('produtos', JSON.stringify(produto));
    }   

    function exibirProdutos() {
        produtoTableElement.innerHTML = '';
        const produtos = getProdutos();
        
        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];

            const row = produtoTableElement.insertRow();

            const nomeCell = row.insertCell();
            nomeCell.textContent = produto.nome;

            const precoCell = row.insertCell();
            precoCell.textContent = 'R$ ' + produto.preco.toFixed(2);

            const disponibilidadeCell = row.insertCell();
            disponibilidadeCell.textContent = produto.disponibilidade;
            disponibilidadeCell.classList.add(produto.disponibilidade ===
               'Disponível' ? 'disponivel' : 'indisponivel');

               const actionCell = row.insertCell();

                const editarBtn = document.createElement('button');
                editarBtn.textContent = 'Editar';
                editarBtn.onclick = () => editandoProduto(i);
                actionCell.appendChild(editarBtn);

                const excluirBtn = document.createElement('button');
                excluirBtn.textContent = 'Excluir';
                excluirBtn.onclick = () => excluirProduto(i);
                actionCell.appendChild(excluirBtn);
    }
    }
    
    //função para adicionar ou atualizar produto
    produtoFormElement.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('produtoNome').value.trim();
        const preco = parseFloat(document.getElementById('produtoPreco').value);
        const disponibilidade = document.getElementById('produtoDisponibilidade').value;
        const produtoIdElement = produtoIdElement.value;

        if(nome && !isNaN(preco)) {
            const produtos = getProdutos();

            if(editandoProduto) {
                produtos[produtoId]. nome = nome;
                produtos[produtoId]. preco = preco;
                produtos[produtoId]. disponibilidade = disponibilidade;
            } else {
                produtos.push({ nome: nome, preco: preco, disponibilidade: 
                    disponibilidade });
            }
        }
    });