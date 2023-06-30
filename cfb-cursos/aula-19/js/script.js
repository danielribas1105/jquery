$('.btn_trocaView').click(function (e) { 
    e.preventDefault();
    $('.container').toggle();
    if($('.container').is(':visible')){
        $('.btn_trocaView').text('Ocultar');
    }else{
        $('.btn_trocaView').text('Mostrar');
    }
});
