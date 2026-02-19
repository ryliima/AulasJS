//vamos trazer os dados dos usuários do jsonplaceholder
//usando o metodo nativo fetch()
fetch('https://jsonplaceholder.typicode.com/users')

//será gerado uma promisse
//tenho os dez usuarios no formato json

//converter a resposta no formato json para um objeto javascript
.then(response => response.json())

//com o json convertido para um objeto
//vamos exibir as informações na pagina
.then(usuarios => {
    const todosUsuarios = document.getElementById('listaUsuarios')

    usuarios.forEach(usuario => {
        const cadaUsuario = document.createElement('li')
        cadaUsuario.textContent = usuario.name + ' (' + usuario.email + ')'
        todosUsuarios.appendChild(cadaUsuario);
});
})
.catch(error =>
        document.getElementById('listaUsuarios').textContent = 
        'Erro ao carregar os usuários: ' + error.message); 