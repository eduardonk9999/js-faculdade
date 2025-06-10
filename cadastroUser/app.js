/**

Funcionalidades com JavaScript:

Quando o usuário clicar em "Cadastrar":

Os dados devem ser salvos em um array de objetos.

Cada objeto representa um usuário ({ nome, email, idade }).

Os dados devem aparecer automaticamente na página após o cadastro.

Use uma função cadastrarUsuario() para adicionar o usuário.

Mostre a lista de usuários usando forEach() e querySelector() / innerHTML.

Adicione um botão de "Remover" ao lado de cada usuário.

Ao clicar em "Remover", o usuário correspondente deve ser deletado do array e do DOM.

🧪 Regras técnicas:
Utilize arrow functions, desestruturação, e os operadores spread/rest onde fizer sentido.

Pode usar uma IIFE para encapsular o código inicial.

Use callbacks se for dividir as funções (ex: renderização como callback após cadastro).
 * 
 * 
 */




let infosUser = []



let formHTML = document.querySelector(".form")
let UL = document.querySelector(".listaUsuarios")


function form(event) {
    event.preventDefault();

    let name = document.querySelector(".nome").value
    let email = document.querySelector(".email").value
    let idade = document.querySelector(".idade").value

    let novoUsuario = {
        name: name,
        email: email,
        idade: idade
    };


    infosUser.push(novoUsuario)
    console.log(infosUser)

    let li = document.createElement("li")
    li.textContent = `Nome: ${name}, Email: ${email}, Idade: ${idade}`;

    UL.appendChild(li);

    
}

formHTML.addEventListener("submit", form);
