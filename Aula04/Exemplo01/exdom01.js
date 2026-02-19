//vamos pegar o elemento h1 com o id = titulo
const titulo = document.getElementById('titulo');

//vamos pegar o elemento button com o id = botao
const elementoBotao = document.getElementById('botao');

//Manipulador de evento método addEventListener
elementoBotao.addEventListener('click', function() {
    //vamos alterar o texto do elemento h1 para Texto Alterado
    TextDecoder.textContent = 'Texto Alterado';
});