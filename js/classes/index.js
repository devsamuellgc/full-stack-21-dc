/**
 * Adicionar uma class = element.classList.add(className)
 * Remover uma class = element.classList.remove(className)
 * Remove ou adiciona uma class = element.classList.toggle(className)
 * 
 * Adiciona um valor a uma propriedade CSS
 * element.style.property = value
 * Ex: element.style.color = 'red'
 */

// const card = document.getElementById('card')

// function addClass() {
//     card.classList.add('estrutura')
// }

// function removeClass() {
//     card.classList.remove('estrutura')
// }

// function handleClass() {
//     card.classList.toggle('estrutura')
//     card.style.backgroundImage = "url('./')"
// }

const modal = document.getElementById('modal')
const body = document.querySelector('body')
const btnOpen = document.getElementById('btnOpen')

// Inverte o valor do modal
function handleModal() {
    modal.classList.toggle('modalClose')
    modal.classList.toggle('modalOpen')
    body.classList.toggle('bodyModal')
}

// Abre o modal
function openModal() {
    modal.classList.remove('modalClose')
    modal.classList.add('modalOpen')
    body.classList.add('bodyModal')
    btnOpen.style.display = 'none'
}

// Fecha o modal
function closeModal() {
    btnOpen.style.display = 'inline'
    modal.classList.remove('modalOpen')
    modal.classList.add('modalClose')
    body.classList.remove('bodyModal')
}

const fundoCor = document.getElementById('fundoCor')

// Background color azul
function bgBlue() {
    fundoCor.style.backgroundColor = 'blue'
}

// Background color amarelo
function bgYellow() {
    fundoCor.style.backgroundColor = 'yellow'
}

// Background color preto
function bgBlack() {
    fundoCor.style.backgroundColor = 'black'
}