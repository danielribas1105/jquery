$('.container').click(function (e) { 
    e.preventDefault();
    $(this).attr('class', 'container__azul');
});

$('.amarelo').click(function (e) { 
    e.preventDefault();
    $('.container').attr('class', 'container amarelo');
});

$('.azul').click(function (e) { 
    e.preventDefault();
    $('.container').attr('class', 'container azul');
});
