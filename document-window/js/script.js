$(document).ready(() => {
    alert("DOM OK");
});

$(window).on('resize', () => {
    $('.width').text(window.innerWidth);
})