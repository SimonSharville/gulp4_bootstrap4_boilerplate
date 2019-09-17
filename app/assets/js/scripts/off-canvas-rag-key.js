// Add Local Scripts here

 // http://blog.themearmada.com/off-canvas-slide-menu-for-bootstrap/

 $(document).ready(function(){                       
   
  // Rag Key Slider
   $('#rag-key-expander').on('click',function(e){
     e.preventDefault();
     $('body').toggleClass('rag-key-expanded');
   });
   $('#rag-key-close').on('click',function(e){
     e.preventDefault();
     $('body').removeClass('rag-key-expanded');
   });
   
 });


