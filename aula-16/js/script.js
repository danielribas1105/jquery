$(document).click(function (e) { 
    e.preventDefault();
    alert(`Texto: ${$('div').text()}`);
});

/*Opções:
    .text() - retorna o texto entre as tags
    .val() - retorna o valor dos inputs
    .html() - retorna o conteúdo html, incluindo as tags
*/