$('.mostrar').click(function (e) { 
    e.preventDefault();
    $('div').show();
});

$('.ocultar').click(function (e) { 
    e.preventDefault();
    $('div').hide();
});