import altsrc from "../../scripts/globais/usuais";
//--
const verificaEstado = function() {
    const play = document.querySelector('div.botao');

    play.addEventListener('click', jogar);
    play.addEventListener('click', sair);

    jogar();
}

const jogar = function() {
    altsrc('dialogoGame');

    const sair = function() {
        var parar = true;
    }
    sair();
}

export default verificaEstado;