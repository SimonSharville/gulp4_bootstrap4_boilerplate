// Add Local Scripts here


// https://stackoverflow.com/questions/26819675/navbar-highlight-for-current-page
$(function(){
  $('a').each(function(){
      if ($(this).prop('href') == window.location.href) {
          $(this).addClass('active'); 
          $(this).parents('.nav-item').addClass('active');
          // Added
          $(this).parents('div.dropdown-submenu').addClass('active');

          $(this).parents('.mega-item').addClass('active');
      }
  });
});


// Kept for reference
// $(function() {
//   $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
// });

