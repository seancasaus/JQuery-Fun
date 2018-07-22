//inline styling
$("h4.boot").css({
  "color": "white",
  "background-color": "grey",
  "font-family": "arial, helvetica, sans-serif",
  "text-align": "center",
  "padding": "10px",
  "line-height": "2em"
});

$("h4.boot").css("color", "red");

$("button").on("click", function () {
  $("p").addClass("beautify");
  $(this).addClass("beautify");
});

$("button").on("dblclick", function () {
  $(this).addClass("blue_border");
});

$("p").on("click", function () {
  $(this).css({
    "color": "white",
    "background-color": "grey",
    "font-family": "arial, helvetica, sans-serif",
    "text-align": "center",
    "padding": "10px",
    "line-height": "2em"
  })
});