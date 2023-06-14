$(".bloco").on({
    click: () => {$(".texto").text("Clique bloco preto");},
    dblclick: () => {$(".texto").text("Duplo clique bloco preto");},
    mouseenter: () => {$(".texto").text("Mouse dentro da caixa preta");},
    mouseout: () => {$(".texto").text("Mouse fora da caixa preta");}
});

$(".bloco2").click(function (e) { 
    e.preventDefault();
    $(".bloco").trigger("click");
});