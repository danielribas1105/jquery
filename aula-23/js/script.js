$('#btn__mostrar').click(function (e) { 
    e.preventDefault();
    $('.box').fadeIn();
});

$('#btn__ocultar').click(function (e) { 
    e.preventDefault();
    $('.box').fadeOut(2000);
});