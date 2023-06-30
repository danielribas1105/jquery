/* $(".bloco").click(function (e) { 
    e.preventDefault();
    $(".texto").text("Clique no botão");
});

$(".bloco").mouseenter(function () { 
    $(".texto").text("Mouse dentro da caixa");
});

$(".bloco").mouseout(function () { 
    $(".texto").text("Mouse fora da caixa");
}); */

$(".texto__box").keyup(function () { 
    $(".texto__copia").text($(".texto__box").val());
});

/* $(".bloco").on("click dblclick", function (e) {
    e.preventDefault();
    $(".texto").text("Usando método on");
    alert("teste");
}); */

$(".bloco").on({
    click: (e) => {
        e.preventDefault()
        $(".texto").text("Clique no botão")
    },
    dblclick: () => {$(".texto").text("Clique duplo no botão")},
    mouseenter: () => {$(".texto").text("Mouse dentro da caixa")},
    mouseout: () => {$(".texto").text("Mouse fora da caixa")}
});