// Add Local Scripts here

// http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

$(document).ready(function(){                       
   
  // sa-sidemenu Menu Slider
  $('.sa-sidemenu').on('click',function(e){
    e.preventDefault();
    $('.sa-sidemenu').toggleClass('open').toggleClass('closed');
  });

  $('.sa-sidemenu .menu-section').click(function(e) {
    e.stopPropagation()
  })

  $('.sa-sidemenu [data-toggle="collapse"]').click(function(e){
    e.stopPropagation()
    $($(this).attr('href')).collapse('toggle')
  })

  // State at various screen sizes
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

 
