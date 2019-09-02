// Add Local Scripts here

$(function() {   
  $('[data-toggle="popover"]').popover() 
});

$(function() { 
    $('[data-toggle="tooltip"]').tooltip(); 
});

// Not Working
// done(function(data) {
//   $(".modal-content").html($(data).find('.inner_modal'));
//   $(".modal-header").prepend('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
//   $('[data-toggle="popover"]').popover({trigger: "hover",  placement: 'auto left'});
// });
