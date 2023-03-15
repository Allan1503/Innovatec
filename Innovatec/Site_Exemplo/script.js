// Função para exibir/esconder o menu mobile
function toggleMobileMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Função para enviar o formulário de contato
function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    const name = form.elements.namedItem("name").value;
    const email = form.elements.namedItem("email").value;
    const message = form.elements.namedItem("message").value;

    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor ou exibi-los em uma mensagem na tela
    console.log(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);

    // Exibe uma mensagem de sucesso ao enviar o formulário
    const successMsg = document.createElement("p");
    successMsg.innerText = "Mensagem enviada com sucesso!";
    form.parentNode.insertBefore(successMsg, form.nextSibling);
}
