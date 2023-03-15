//exemplo de código JavaScript que você pode usar para validar o formulário de vendas:

// selecione os elementos do formulário
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const productSelect = document.querySelector('#product');
const quantityInput = document.querySelector('#quantity');
const messageInput = document.querySelector('#message');

// adicione um listener de evento ao formulário
form.addEventListener('submit', (event) => {
  // verifique se todos os campos estão preenchidos
  if (!nameInput.value || !emailInput.value || !productSelect.value || !quantityInput.value || !messageInput.value) {
    event.preventDefault();
    alert('Por favor, preencha todos os campos!');
  }
});

//Este código seleciona os elementos do formulário usando a função querySelector,
// adiciona um ouvinte de eventos à tag form e verifica se todos os campos são preenchidos 
// quando o formulário é enviado. Se algum campo estiver vazio, ele impede o envio do formulário e exibe uma mensagem de alerta.

