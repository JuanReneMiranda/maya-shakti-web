function hideListen(){ 
    $(".hide_listen").hide("slow", function() {
      });
};

setInterval(hideListen, 5500);


$( ".ir-arriba" ).on( "click", function() {
  $('body, html').animate({
    scrollTop: '0px'
}, 300);
} );

$(window).on( "scroll", function() {
  if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
  } else {
      $('.ir-arriba').slideUp(300);
  }
});
