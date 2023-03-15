// Declaração de variável booleana que controla se o menu deve ser exibido ou não
let show = true;

// Seleciona o elemento HTML que contém o conteúdo do menu
const menuContent = document.querySelector('.content'); // Selecionando o elemento que possui a classe 'content'

// Seleciona o botão de toggle do menu dentro do conteúdo do menu
const menuToggle = menuContent.querySelector('.menu-toggle'); // Selecionando o botão com a classe 'menu-toggle' dentro do elemento 'menuContent'

// Adiciona um ouvinte de eventos para o evento 'click' no botão de toggle do menu
menuToggle.addEventListener('click', () => {

// Altera o estilo da propriedade 'overflow' do elemento HTML 'body' para 'hidden' se 'show' for true,
// caso contrário, altera para 'initial'
document.body.style.overflow = show ? 'hidden' : 'initial';

// Alterna a classe 'on' no elemento HTML que contém o conteúdo do menu se 'show' for true
// Isso adicionará ou removerá estilos CSS que fazem o menu aparecer ou desaparecer
menuContent.classList.toggle('on', show);

// Inverte o valor de 'show' para que o comportamento do clique do botão de toggle do menu mude na próxima vez que for clicado
show = !show;
})



// Relogio
function startTime() {
    const today = new Date();
    let h = today.getHours(); //Obtém a hora atual
    let m = today.getMinutes(); //Obtém os minutos atuais
    let s = today.getSeconds(); //Obtém os segundos atuais
    m = checkTime(m); //Chama a função checkTime() para adicionar zero na frente de minutos < 10
    s = checkTime(s); //Chama a função checkTime() para adicionar zero na frente de segundos < 10
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s; //Mostra a hora, minutos e segundos na div com id "clock"
    setTimeout(startTime, 1000); //Chama a função a cada 1 segundo (1000 milissegundos)
    }
    
    function checkTime(i) {
    if (i < 10) { //Se o número for menor que 10
    i = "0" + i; //Adiciona zero na frente do número
    };
    return i; //Retorna o número com zero na frente (caso necessário)
    }