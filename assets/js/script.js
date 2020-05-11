// Au passage de la souris (évenement mouseover) sur mon élément qui à l'id (#green, #red ou #blue), je modifie le css de mon élément id #text
$(function(){
  $('.color').mouseover(function(){
    // Je stock dans la variable buttonColor la valeur de l'attribue Id de l'élément sur lequel je suis.
     buttonColor = $(this).attr('id');
     consol.log(buttonColor);
     $('#text').css('color', buttonColor)

  });
    /*$('#green').mouseover(function(){
      $('#text').css('color', 'green');
    });
    $('#red').mouseover(function(){
      $('#text').css('color', 'red');
    });
    $('#blue').mouseover(function(){
      $('#text').css('color', 'blue');
    });
    */
    // Je cible tous les éléments qui ont la classe '.color', au moment où ma souris quitte ces éléments, je modifie les éléments de mon id '#text'
    $('.color').mouseout(function(){
      $('#text').css('color', 'black');
    });
})
