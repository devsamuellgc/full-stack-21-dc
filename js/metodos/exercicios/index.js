const lista = document.getElementById('lista');
const buscador = document.getElementById('busca');

const clientes = [
    {
        nome: "Samuel",
        idade: 26
    },
    {
        nome: "Fernanda",
        idade: 20
    },
    {
        nome: "Rodrigo",
        idade: 30
    }
];

function renderList(array) {
    lista.innerHTML = '';
    array.map((elemento) => {
        lista.innerHTML += `
        <li>
            Nome: ${elemento.nome} Idade: ${elemento.idade}
        </li>
        `
    })
}

function novoArrayRenderizado() {
    const input = buscador.value.toLowerCase();
    const clientesFiltrados = clientes.filter((cliente) => cliente.nome.toLowerCase().includes(input));
    return renderList(clientesFiltrados)
}

buscador.addEventListener('input', novoArrayRenderizado)

window.addEventListener('load', renderList(clientes))
