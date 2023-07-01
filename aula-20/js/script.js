$('.btn__aumentar').click(function (e) { 
    e.preventDefault();
    $('.container').animate({width: '500px', height: '500px'}, {duration: 3000});
});

$('.btn__diminuir').click(function (e) { 
    e.preventDefault();
    $('.container')
        .animate({width: '250px'}, {duration: 200})
        .animate({height: '250px'}, {duration: 200});
});

$('.btn__direita').click(function (e) { 
    e.preventDefault();
    $('.container').animate(
        {left: '500px'}, 
        {duration: 1000, complete: () => {
            alert("Movimentação terminou!")
        }}
    );
});

$('.btn__esquerda').click(function (e) { 
    e.preventDefault();
    $('.container').animate(
        {left: '10px'}, 
        {duration: 1000, complete: () => {
            alert("Retorno ao início!")
        }}
    );
});