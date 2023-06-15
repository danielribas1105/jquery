$('.item__list').mouseover(function () { 
    $(this).fadeTo(500, 0.3);
});

$('.item__list').mouseleave(function () { 
    $(this).fadeTo(300, 1);
});

$('#menu__home').click(function (e) { 
    e.preventDefault();
    $('#submenu__home').fadeToggle('slow', 'linear');
    $('#submenu__home').css('display', 'flex');
});

$('#menu__jquery').click(function (e) { 
    e.preventDefault();
    $('#submenu__jquery').fadeToggle('slow', 'linear');
    $('#submenu__jquery').css('display', 'flex');
});

$('#menu__canvas').click(function (e) { 
    e.preventDefault();
    $('#submenu__canvas').fadeToggle('slow', 'linear');
    $('#submenu__canvas').css('display', 'flex');
});

$('#menu__python').click(function (e) { 
    e.preventDefault();
    $('#submenu__python').fadeToggle('slow', 'linear');
    $('#submenu__python').css('display', 'flex');
});

$('#menu__php').click(function (e) { 
    e.preventDefault();
    $('#submenu__php').fadeToggle('slow', 'linear');
    $('#submenu__php').css('display', 'flex');
});