$(".container").click(function (e) { 
    e.preventDefault();
    alert("Click na tag DIV")
});

$(".texto__p").click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    alert("Click na tag P")
});

$(".texto__span").click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    alert("Click na tag Span")
});