document.addEventListener('mouseup',function(event){
    //event.preventDefault();
    //alert(event.button);
    if (event.button == 0) {
       $('.btn-mouse').text('Botão esquerdo');
    }
    if (event.button == 1) {
       $('.btn-mouse').text('Botão rodinha');
    }
    if (event.button == 2) {
       $('.btn-mouse').text('Botão direito');
    }
})