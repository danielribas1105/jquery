/* $('p').parent().css('border', '1px solid #ff0000');
$('li').parent().css('border', '1px solid #00ff00');
$('ul').parent().css('border', '1px solid #0000ff');
$('body').parent().css('border', '1px solid #ff00ff'); */

//$('p').parents().css('border', '1px solid #ff0000'); //pega todos os elementos pais

$('p').parentsUntil('body').css('border', '1px solid #ff0000'); //pega todos os elementos pais até o elemento especificado exclusive
