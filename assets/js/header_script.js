
$(document).ready(function () {
  $("#mobile-button").on('click', function() {
    $(".mobile-nav").toggleClass("is-open");
  });
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




//not sure why yet, but I can either have smooth scrolling or active links
//cannot have both yet
//$(document).ready(function () {
//  $(".nav").on("click",function () {
//    $('a').removeClass("is-active");
//    $(this).find("a").addClass("is-active");
//  });
//});
