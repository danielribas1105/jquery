$(document).ready(() => {
    
});

$(window).on('resize', () => {
    let width = window.innerWidth;
    $('.width').text(width);
    if(width < 1200){
        let col = 2;
        let margin = 20;
        console.log(col + " colunas e margem de "+margin);
        $('body').css('background-color', 'red');
    }else {
        let col = 3;
        let margin = 40;
        console.log(col + " colunas e margem de "+margin);
        $('body').css('background-color', 'blue');
    }
})