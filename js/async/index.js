// https://dontpad.com/fs-21-async

const cep = document.getElementById('cep');
const btn = document.getElementById('btn');
const joke = document.getElementById('joke');
const btnJoke = document.getElementById('btn-joke');

async function buscarCep() {
    const fetchPromise = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    console.log(fetchPromise)
    const data = await fetchPromise.json()
    console.log(data)
    document.getElementById('container').innerHTML = `
    <p>Logradouro: ${data.logradouro}</p>
    <p>Bairro: ${data.bairro}</p>
    <p>Cidade: ${data.localidade} - ${data.uf}</p>
    `
}

btn.addEventListener(('click'), buscarCep)

async function novaPiada() {
    const fetchJoke = await fetch('https://api.chucknorris.io/jokes/random');
    const newJoke = await fetchJoke.json();
    joke.innerHTML = newJoke.value;
}

btnJoke.addEventListener('click', novaPiada)