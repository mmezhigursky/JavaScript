
var typed = new Typed('#typed', {
stringsElement: '#typed-strings',
typeSpeed: 40,
backSpeed: 0,
});


document.addEventListener('DOMContentLoaded', function(event) {
    const menu = document.querySelector('.menu');
    const inter_el =  document.querySelector('.inter_el');
    menu.addEventListener('click', function(){

      menu.classList.toggle('active');
      

    });

});

$(document).ready(function() {
  $(".container").click(function() {
    $(".stick").toggleClass(function () {
      return $(this).is('.open, .close') ? 'open close' : 'open';
    });
  });
});