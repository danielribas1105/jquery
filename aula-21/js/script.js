$('#btn__tamanho').click(function (e) { 
    e.preventDefault();
    $('.box').animate({width: 'toggle', height: 'toggle'},{duration: 2000});
});

$('#btn__mostrar').click(function (e) { 
    e.preventDefault();
    $('.box').animate({opacity: 'toggle'});
});