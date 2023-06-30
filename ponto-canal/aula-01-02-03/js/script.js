/* $(document).ready( () => {
        alert("DOM carregado!");
    }
) */

$(() => {
    /* $('h1').css('color', '#f66');
    $('h1').hide();
    $('h1').delay('1000');
    $('h1').fadeIn('slow');
    $('h1').text('Texto alterado'); */

    /* $('h1').css('color', '#f66').hide().delay('1000').fadeIn('slow'); */

    $('h1')
        .css('color', '#f66')
        .hide()
        .delay('1000')
        .fadeIn('slow')
        .click(() => { 
            $('h1').css('color', '#0000ff');
        });

    $('a').css({color: 'black', display: 'block'});

    $('.link-2').css('color', '#ff0000');
    $('#link-3').css('color', '#00ff00');

})

