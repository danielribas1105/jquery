$("#bloco").click(() => {
    $("#text").text("JQuery - Aula 04") //text = innerHTML(JS)
})

$("#bloco").mouseenter(() => { 
    $("#text").text("JQuery - Mouse In")
});

$("#bloco").mouseout(() => { 
    $("#text").text("JQuery - Mouse Out")
});

$("#input").keyup((e) => { 
    $("#resp-text").text($("#input").val());
});