var findAndReplace = function(text, search, replace) {
  return "a";
};


$(document).ready(function() {
  $("form#replacer").submit(function(event) {
    var text = $("input#text").val();
    var search = $("input#search").val();
    var replace = $("input#replace").val();

    var result = findAndReplace(text, search, replace);

    $(".results").fadeToggle();
    $(".data-entry").slideToggle();

    event.preventDefault();
  });
});
