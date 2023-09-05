// https://dontpad.com/fs-21-async

// const cep = document.getElementById('cep');
// const btn = document.getElementById('btn');
// const joke = document.getElementById('joke');
// const btnJoke = document.getElementById('btn-joke');

// async function buscarCep() {
//     const fetchPromise = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
//     console.log(fetchPromise)
//     const data = await fetchPromise.json()
//     console.log(data)
//     document.getElementById('container').innerHTML = `
//     <p>Logradouro: ${data.logradouro}</p>
//     <p>Bairro: ${data.bairro}</p>
//     <p>Cidade: ${data.localidade} - ${data.uf}</p>
//     `
// }

// async function novosUsuarios() {
//     const fetchUser = await fetch('https://randomuser.me/api/?results=5');
//     console.log(fetchUser);
//     const newUser = await fetchUser.json();
//     console.log(newUser.results);
//     //imagem, nome, email, telefone e o país
//     tableItem.innerHTML = '';
//     newUser.results.map((usuario) => {
//         tableItem.innerHTML += `
//             <tr>
//                 <td><img src="${usuario.picture.medium}" alt=""></td>
//                 <td>${usuario.name.title}. ${usuario.name.first} ${usuario.name.last}</td>
//                 <td>${usuario.email}</td>
//                 <td>${usuario.cell}</td>
//                 <td>${usuario.location.country}</td>
//             </tr>
//         `
//     })
// }

// async function novaPiada() {
//     const fetchJoke = await fetch('https://api.chucknorris.io/jokes/random');
//     const newJoke = await fetchJoke.json();
//     joke.innerHTML = newJoke.value;
// }
// const tableItem = document.getElementById('table-body');

const conselho = document.getElementById('conselho');
const btnAdvice = document.getElementById('btn-joke');

async function newAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const cons = await response.json();
    return cons.slip.advice;
}

function renderAdvice() {
    conselho.innerText = newAdvice();
}

btnAdvice.addEventListener('click', renderAdvice);