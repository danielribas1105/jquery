$('#btn__tamanho').click(function (e) { 
    e.preventDefault();
    $('.box').animate({width: 'toggle', height: 'toggle'},{duration: 2000});
});

$('#btn__mostrar').click(function (e) { 
    e.preventDefault();
    $('.box').animate({opacity: 'toggle'});
});

$('#btn__delay').click(function (e) { 
    e.preventDefault();
    $('.box')
        .delay(1000).animate({width: '300px'})
        .delay(1000).animate({height: '300px'})
        .delay(1000).animate({width: '200px'})
        .delay(1000).animate({height: '200px'});
});