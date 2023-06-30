/* $(".texto1").click(function (e) { 
    e.preventDefault();
    $(".resposta").text("Clique texto 1");
});

$(".texto2").click(function (e) { 
    e.preventDefault();
    $(".resposta").text("Clique texto 2");
}); */

$(document).click(function (e) { 
    $(".resposta").text(`Nome do objeto: ${e.target.className}`);
});