$(document).on({
    click: (e) => {$(".resposta").text(`Tipo de evento: ${e.type}= ${e.which}`)},
    keydown: (e) => {
        $(".resposta").text(`Tipo de evento: ${e.type}= ${e.which}`);
        if(e.which == 13){
            alert("Tecla ENTER pressionada!")
        }
    }
});