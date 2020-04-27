// Add Local Scripts here

// http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

$(document).ready(function(){                       
   
  // sa-sidemenu Menu Slider
  $('.sa-sidemenu .menu-top').on('click',function(e){
    e.preventDefault();
    $('.sa-sidemenu').toggleClass('open');
    $('.sa-sidemenu').toggleClass('closed');
  });

  // State at various screen sizes
  var $window = $(window);

  function resize() {
    if ($window.width() > 1200) {
      $('.sa-sidemenu').addClass('open');
      $('.sa-sidemenu').removeClass('closed');
    } else {
      $('.sa-sidemenu').removeClass('open');
      $('.sa-sidemenu').addClass('closed');
    }
  }

  $window.resize(resize).trigger('resize');
  
 });

 
