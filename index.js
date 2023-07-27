/**
 * document.createElement 
 * -> criar um elemento no documento
 * node.appendChild 
 * -> Adicionar o elemento como ÚLTIMO nó do pai
 * node.insertBefore 
 * -> inserir um elemento antes de outro elemento
 * node.removeChild 
 * -> remover um filho do elemento
 */
const container = document.getElementById('div-pai')
const first = document.querySelector('#first')
const newP = document.createElement('p')
newP.innerHTML = 'Olá mundo'
container.insertBefore(newP, first)
container.appendChild(newP)
container.removeChild(newP)