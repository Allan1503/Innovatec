// Declaração de variável booleana que controla se o menu deve ser exibido ou não

let show = true;

// Seleciona o elemento HTML que contém o conteúdo do menu

const menuContent = document.querySelector('.content');

// Seleciona o botão de toggle do menu dentro do conteúdo do menu

const menuToggle = menuContent.querySelector('.menu-toggle');

// Adiciona um ouvinte de eventos para o evento 'click' no botão de toggle do menu

menuToggle.addEventListener('click', () => {

    // Altera o estilo da propriedade 'overflow' do elemento HTML 'body' para 'hidden' se 'show' for true,
    // caso contrário, altera para 'initial'

    document.body.style.overflow = show ? 'hidden' : 'initial'

    // Alterna a classe 'on' no elemento HTML que contém o conteúdo do menu se 'show' for true
    // Isso adicionará ou removerá estilos CSS que fazem o menu aparecer ou desaparecer

    menuContent.classList.toggle('on', show);

    // Inverte o valor de 'show' para que o comportamento do clique do botão de toggle do menu mude na próxima vez que for clicado
    show = !show;
})

// Relogio
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // adicionar zero na frente dos números < 10
    return i;
}