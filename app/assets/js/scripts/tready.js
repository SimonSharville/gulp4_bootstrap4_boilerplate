(function( $ ){
   $.fn.tready = function(func) {
      if (typeof(Turbolinks) != 'undefined' &&Turbolinks.supported) {
        this.on('turbolinks:load', func);
      } else {
        this.ready(func);
      }
      return this;
   };
})(jQuery);
