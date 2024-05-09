$(function() {
  $(".menu-link").click(function(e) {
    e.preventDefault();
    $(".burger").toggleClass("open");
    $(".burger-open").toggleClass("open");
    $(".menu-link").toggleClass("open");
    $(".menu-overlay").toggleClass("open");
    $("body").toggleClass("open");
  });
});