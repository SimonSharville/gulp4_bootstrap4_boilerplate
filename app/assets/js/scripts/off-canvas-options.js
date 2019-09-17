// Add Local Scripts here

// http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

$(document).ready(function(){                       
   
  // Options Menu Slider
   $('#options-nav-expander').on('click',function(e){
     e.preventDefault();
     $('body').toggleClass('options-nav-expanded');
   });
   $('#options-nav-close').on('click',function(e){
     e.preventDefault();
     $('body').removeClass('options-nav-expanded');
   });
   
   // Only needed if we use dropdowns within the menu

   // // Initialize navgoco with default options
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


