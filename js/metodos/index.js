const arr = [1, 2, 3, 4, 5];

// Remover o último elemento do array
arr.pop();

// Adicionar o elemento 6 no final do array
arr.push(6);

// Dobrar o valor dos elementos do array
const doubleArr = arr.map((elemento) => {
    return elemento * 2;
})

// Apresentar o array com os valores dobrados
console.log(doubleArr);

const arrCores = ['red', 'green', 'blue', 'yellow'];

// Remove o primeiro elemento do array
arrCores.shift();

// Adicionar purple como primeiro elemento do array
arrCores.unshift('purple');

// Apresenta todos os elementos do array
arrCores.forEach((cores) => {
    console.log(cores);
})

const arrAnimais = ['cat', 'dog', 'rabbit', 'hamster'];

// Remover o primeiro elemento do array
arrAnimais.shift();

// Remover o último elemento do array
arrAnimais.pop();

// Adicionar Elephant e Lion no começo do array
arrAnimais.unshift('elephant', 'lion');

// Transformar todos os elementos em letra maiúscula
const animalsUppercase = arrAnimais.map((elemento) => {
    return elemento.toUpperCase();
});

// Apresentar os valores dos animais
console.log(animalsUppercase);

// Receber os valores do input e adicionar ao final do array

const arrNames = [];
const btn = document.getElementById('btnSend');
const btnDelete = document.getElementById('btnDelete');
const input = document.getElementById('inputName');
const visual = document.getElementById('visual');

function showTextVisual() {
    visual.innerText = `
        ${arrNames.map((elemento) => {
        return elemento;
    })}
    `
}

function addNameToArray() {
    arrNames.push(input.value);
    showTextVisual()
}

function deleteNameFromArray() {
    arrNames.pop();
    showTextVisual();
}

btn.addEventListener('click', addNameToArray);
btnDelete.addEventListener('click', deleteNameFromArray);