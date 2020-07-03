// http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

$(document).tready(function() {
  function timeoutDispatchSidemenuEvent() {
    $('.sa-sidemenu').trigger('sa.sidemenu.toggle');
  }

  $('.sa-sidemenu').on('click', function(e) {
    e.preventDefault();

    $('.sa-sidemenu').toggleClass('open').toggleClass('closed');
    setTimeout(timeoutDispatchSidemenuEvent, 400);
  });

  $('.sa-sidemenu .menu-section').click(function(e) {
    e.stopPropagation()
  })

  $('.sa-sidemenu [data-toggle="collapse"]').click(function(e){
    e.stopPropagation()
    $($(this).attr('href')).collapse('toggle')
  })

  var $window = $(window);

  function resize() {
    if ($window.width() > 1200) {
      $('.sa-sidemenu').addClass('open').removeClass('closed');
    } else {
      $('.sa-sidemenu').removeClass('open').addClass('closed');
    }
  }

  $window.resize(resize).trigger('resize');
});
