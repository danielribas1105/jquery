let posX = 0;
let posY = 0;

$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    posX = e.pageX;
    posY = e.pageY;
    $(".texto").text(`Mouse posição X: ${posX} - Mouse posição Y: ${posY}`);
});