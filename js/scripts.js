var findAndReplace = function(text, search, replace) {
  return replace;
};


$(document).ready(function() {
  $("form#replacer").submit(function(event) {
    var text = $("input#text").val();
    var search = $("input#search").val();
    var replace = $("input#replace").val();

    var result = findAndReplace(text, search, replace);

    $(".result-text").append(result);

    $(".results").fadeToggle();
    $(".data-entry").slideToggle();

    event.preventDefault();
  });
});
