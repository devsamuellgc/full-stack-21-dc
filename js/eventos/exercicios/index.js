/**
 * 1. Crie um botão que, ao ser clicado, 
 * exiba um alerta com a mensagem "Botão clicado!".
 * 
 * 2. Crie um botão que, ao ser clicado, 
 * altere o texto de um parágrafo para "O botão foi clicado!".
 * 
 * 3. Crie uma lista de itens 
 * (pode ser uma lista não ordenada ul com alguns li), 
 * e faça com que cada item seja destacado 
 * (por exemplo, com uma cor de fundo diferente) 
 * quando o mouse estiver sobre ele.
 * 
 * 4. Implemente um contador que aumente em 1 toda vez que 
 * um botão "Incrementar" for clicado e exiba o valor em 
 * um elemento HTML.
 * 
 * 5. Crie um formulário com um campo de entrada de texto
 * e um botão "Enviar". Quando o botão for clicado, 
 * exiba um alerta com o valor digitado no campo de entrada.
 * 
 * 6. Crie uma imagem e faça com que ela mude para outra imagem 
 * quando o mouse passar sobre ela (use o evento mouseover).
 * 
 * 7. Crie um parágrafo e faça com que ele alterne entre duas 
 * cores de fundo a cada vez que for clicado.
 * 
 * 8. Implemente um jogo de "Simon Says" simplificado, 
 * em que o computador mostra uma sequência de cores 
 * (por exemplo, "vermelho", "verde", "azul") 
 * usando alertas ou console.log e o usuário deve 
 * repetir a sequência clicando nos botões corretos na página.
 * 
 * 9. Crie um botão que, ao ser clicado, adicione um novo item a 
 * uma lista (por exemplo, uma nova li em uma ul) com um 
 * texto fornecido pelo usuário em um campo de entrada.
 * 
 * 10. Crie um elemento de parágrafo e faça com que ele exiba a 
 * posição exata (coordenadas X e Y) do mouse toda vez que o 
 * mouse se mover dentro de uma div específica.
 */

// 1ª questão
const btn1 = document.getElementById('btn-1');

function btnAlert() {
    return alert('Botão clicado');
}

btn1.addEventListener('click', btnAlert);

// 2ª questão
const btn2 = document.getElementById('btn-2');
const p2 = document.getElementById('p-2');

function changeText() {
    p2.innerText = 'O botão foi clicado';
    return p2;
}

btn2.addEventListener('click', changeText);

// 3ª questão
const item1 = document.getElementById('item-1');
const item2 = document.getElementById('item-2');
const item3 = document.getElementById('item-3');

function changeBgColor(item) {
    item.style.backgroundColor = 'black';
}

item1.addEventListener('mouseover', () => {
    changeBgColor(item1);
})

item2.addEventListener('mouseover', () => {
    changeBgColor(item2);
})

item3.addEventListener('mouseover', () => {
    changeBgColor(item3);
})