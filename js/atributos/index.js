/**
 * element.getAttribute(attributeName) 
 * -> retorna o valor do atributo
 * element.setAttribute(attributeName, value) 
 * -> configura um novo valor pro atributo
 * element.removeAttribute(attributeName) 
 * -> remove o atributo
 */

const p = document.querySelector('p')
const input = document.querySelector('input')
const botao = document.querySelector('#botao') //document.getElementById('botao')
// input.removeAttribute('type')
p.innerHTML = 'Parágrafo'
p.setAttribute('class', 'novoParagrafo')

function visualizarSenha() {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        botao.innerHTML = 'Esconder senha'
    } else if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        botao.innerHTML = 'Visualizar senha'
    }
}