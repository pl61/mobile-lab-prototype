$(document).ready(function() {
  //collapse when clicking outside
  $(document).click(function (event) {
    let clickover = $(event.target);
    if (!clickover.is('#twitTog') && $('#navbarLeft2').hasClass('show')) {
      $('#twitTog').click();
    } else if (!clickover.is('#navTog') && $('#navbarLeft').hasClass('show')) {
      $('#navTog').click();
    }
  });
  //animate section jumps
  $("a[href^='#']").on("click", function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 25
    }, 1000);
  });
  //highlight only portraits
  $(".wrapper").hover(function() {
    $(this).children(".rounded-circle").css({"box-shadow": "0 0 10px #6495ED", "border": "1px solid #6495ED"});
  }, function() {
    $(this).children(".rounded-circle").css({"box-shadow": "", "border": "1px solid transparent"});
  });
});
