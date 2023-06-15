$('.item__list').mouseover(function () { 
    $(this).fadeTo(500, 0.3);
});

$('.item__list').mouseleave(function () { 
    $(this).fadeTo(300, 1);
});