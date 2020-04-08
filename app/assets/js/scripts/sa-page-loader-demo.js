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


$(document).ready(function(){                       
   
  $('.element-loader-btn').on('click',function(e){
    e.preventDefault();
    $('.with-element-loader').toggleClass('loading');
  });

  $('.sa-element-loader-spinner').on('click',function(e){
    e.preventDefault();
    $('.with-element-loader').removeClass('loading');
  });

});

