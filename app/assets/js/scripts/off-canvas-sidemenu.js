// Add Local Scripts here

// http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

$(document).ready(function(){                       
   
  // sa-sidemenu Menu Slider
  $('.sa-sidemenu').on('click',function(e){
    e.preventDefault();
    $('.sa-sidemenu').toggleClass('open');
  });
 });

//  This was written for rostering, buts doesn't seem to work here

// $(document).tready(function() {
//   const saSidemenuToggleEvent = $('sa.sidemenu.toggle');

//   function timeoutDispatchSidemenuEvent() {
//     $('.sa-sidemenu')[0].dispatchEvent(saSidemenuToggleEvent);
//   }

//   $('.sa-sidemenu .menu-top').on('click', function(e) {
//     e.preventDefault();
//     $('.sa-sidemenu').toggleClass('open');
//     setTimeout(timeoutDispatchSidemenuEvent, 400);
//   });

//   // sa-sidemenu Menu Slider
//   $('.sa-sidemenu').on('click', function(e) {
//     if (e.target == this) {
//       e.preventDefault();
//       $('.sa-sidemenu').toggleClass('open');
//       setTimeout(timeoutDispatchSidemenuEvent , 400);
//     }
//   });

//   var $window = $(window);

//   function resize() {
//     if ($window.width() > 991) {
//       $('.sa-sidemenu').addClass('open');
//     }
//     else  {
//       $('.sa-sidemenu').removeClass('open');
//     }
//   }

//   $window.resize(resize).trigger('resize');
// });
