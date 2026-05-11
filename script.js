
const titulo = document.querySelector('#home h1');
const descricao = document.querySelector('#home p');
const botaoTema = document.getElementById('botao-tema');


descricao.textContent = 'Bem-vindo ao meu portfólio! Aqui você encontrará meus projetos e habilidades.';


const horaAtual = new Date().getHours();

if (horaAtual < 12) {
    titulo.textContent = 'Bom dia! Bem-vindo ao meu portfólio!';
} else if (horaAtual < 18) {
    titulo.textContent = 'Boa tarde! Bem-vindo ao meu portfólio!';
} else if (horaAtual < 22) {
    titulo.textContent = 'Boa noite! Bem-vindo ao meu portfólio!';
} else {
    titulo.textContent = 'Boa madrugada! Bem-vindo ao meu portfólio!';
}




const temaSalvo = localStorage.getItem('tema');


if (temaSalvo === 'escuro') {
    document.body.classList.add('modo-escuro');
}


botaoTema.addEventListener('click', () => {
    // Liga ou desliga a classe
    document.body.classList.toggle('modo-escuro');
    

    if (document.body.classList.contains('modo-escuro')) {
        // Se ficou escuro, anota no bloco de notas
        localStorage.setItem('tema', 'escuro');
    } else {
    
        localStorage.setItem('tema', 'claro');
    }
});