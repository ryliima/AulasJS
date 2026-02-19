//vamos pegar o elemento do button com id = alternarBotao

const alternarBotao = document.getElementById("alternarBotao");

//vamos pegar o elemento div com id = mensagem
const elementoDiv = document.getElementById('mensagem');

//vamos adicionar o método addEventListener para escutar 
//evento de click no botão
alternarBotao.addEventListener('click', function() {
    //1.vamos verificar se a mensagem esta oculta
    if (mensagem.classList.contains('oculto')) {
        //vamos remover o estilo
        mensagem.classList.remove('oculto');
    } else {
        mensagem.classList.add('oculto');
    }
});