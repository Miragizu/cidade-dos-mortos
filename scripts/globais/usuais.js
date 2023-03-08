//-- 
//#region Alterar src na tela do game
const altsrc = function(alt) {
    const tela = document.querySelector('div.telaGame');

    switch (alt) {

        case 'dialogoGame':
            tela.src = "../modelsHTML/dialogo/dialogo.html";
            break;
        case 'dialogoChar':

            break;
        case 'combate':

            break;
        case 'explorar':

            break;

        default:
            break;
    }

}

export default altsrc;
//#endregion