// Add Local Scripts here

// http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

$(document).ready(function(){                       
   
  // sa-sidemenu Menu Slider
  $('.sa-sidemenu').on('click',function(e){
    e.preventDefault();
    $('.sa-sidemenu').toggleClass('open');
  });

  // $('.sa-sidemenu').hover(function(e){
  //   e.preventDefault();
  //   $('.sa-sidemenu').toggleClass('open');
  // });

  //  $('#sa-sidemenu-nav-expander').on('click',function(e){
  //    e.preventDefault();
  //    $('body').toggleClass('sa-sidemenu-nav-expanded');
  //  });

   
  //  $('#sa-sidemenu-nav-close').on('click',function(e){
  //    e.preventDefault();
  //    $('body').removeClass('sa-sidemenu-nav-expanded');
  //  });
   
   // Only needed if we use dropdowns within the menu

   // // Initialize navgoco with default option
   // $(".main-menu").navgoco({
   //     caret: '<span class="caret"></span>',
   //     accordion: false,
   //     openClass: 'open',
   //     save: true,
   //     cookie: {
   //         name: 'navgoco',
   //         expires: false,
   //         path: '/'
   //     },
   //     slide: {
   //         duration: 300,
   //         easing: 'swing'
   //     }
   // });

     
 });