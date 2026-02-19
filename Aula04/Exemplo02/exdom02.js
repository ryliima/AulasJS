///vamos pegar a lista de produtos com id = lista

const listaProdutos = document.getElementById('lista');

//vamos pegar o input com id = novoItem
const elementoInput = document.getElementById('novoItem');

//vamos pegar o elemento button com id = botaoAdicionar
const elementoBotao02 = document.getElementById('botaoAdicionar');
//Manipulador de evento método addEventListener
elementoBotao02.addEventListener('click', function() {
    //vamos ler o produto digitado pelo usuário
    const novoProduto = elementoInput.value;

    //vamos fazer a validação do produto
    if(novoProduto !== "") {
        //1. Criar um novo elemento li
        const novoItemElemento = document.createElement('li');

        //2. Definir o texto do novo elemento li 
        novoItemElemento.textContent = novoProduto;

        //3. vamos inserir o li  criado no ul
        listaProdutos.appendChild(novoItemElemento);

        //4. Limpar o campo de input
        elementoInput.value = "";
    }
});