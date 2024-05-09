$(function() {
  $(".Contenido-2").click(function(e) {
    e.preventDefault();
    $(".mail1").toggleClass("open");
    $(".mail2").toggleClass("open");
  });
});

$(function() {
  $(".fin").click(function(e) {
    e.preventDefault();
    $(".insta-1").toggleClass("open");
    $(".insta-2").toggleClass("open");
  });
});

$(function() {
  $(".fin2").click(function(e) {
    e.preventDefault();
    $(".email-1").toggleClass("open");
    $(".email-2").toggleClass("open");
  });
});
