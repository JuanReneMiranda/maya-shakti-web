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



$('#enviar').on('click', function() {
  var usuario = $('#usuario').val()
  var email = $('#email').val()
  $.ajax({
          type: 'POST',
          url: 'php/add_users.php',
          data: {
              'usuario': usuario,
              'email': email
          }
      })
      .done(function(msg) {
          // $('#msg_upd').html(msg),
              alert(msg, 'Confirmation Results');
      })
      .fail(function() {
          alert('Hubo un errror al cargar los vídeos')
      })
})


$('#fromulario').on('click', function() {
  var name = $('#name').val()
  var email2 = $('#email2').val()
  var subject = $('#subject').val()
  var com = $('#com').val()
  $.ajax({
          type: 'POST',
          url: 'php/send_email.php',
          data: {
              'name': name,
              'email2': email2,
              'subject': subject,
              'com': com
          }
      })
      .done(function(msg) {
          // $('#msg_upd').html(msg),
              alert(msg, 'Confirmation Results');
      })
      .fail(function() {
          alert('Hubo un errror al cargar los vídeos')
      })
})