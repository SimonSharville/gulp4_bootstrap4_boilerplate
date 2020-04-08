// Add Local Scripts here


$(document).ready(function(){                       
   
  $('.activate-loader').on('click',function(e){
    e.preventDefault();
    $('body').addClass('loading');
  });

  $('.sa-page-loader-spinner').on('click',function(e){
    e.preventDefault();
    $('body').removeClass('loading');
  });


});

