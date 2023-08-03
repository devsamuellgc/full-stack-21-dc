const body = document.body;
const btn = document.getElementById('botao');
const p = document.getElementById('paragrafo');
const nome = document.getElementById('nome')
const sobrenome = document.querySelector('#sobrenome')

function changeBgToBlack() {
    body.style.backgroundColor = 'black';
}

function changeBgToBlue() {
    body.style.backgroundColor = 'blue';
}

function enviarForm(event) {
    event.preventDefault()
    console.log(event)
    const dados = []
    for (let i = 0; i < event.target.length; i++) {
        if (event.target[i].value) {
            console.log(event.target[i].value)
            dados.push({
                value: event.target[i].value,
                name: event.target[i].name
            })
        }
    }
    console.log(dados)
}

btn.addEventListener('click', changeBgToBlack)
p.addEventListener('mouseover', changeBgToBlue)