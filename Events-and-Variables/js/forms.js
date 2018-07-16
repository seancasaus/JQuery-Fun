$("form").on("submit", function () {
  var inputedWord = $("input#entered_word").val();
  alert(inputedWord);
});

//auto fill a form
$("button#loc_button").on("click dblclick", function () {
  var enteredZip = $("input#entered_zip").val();
  //ideally would use google maps API to get location from zip
  $("input#entered_city_state").val(enteredZip + " Tampa, FL");
});

//focus event
$("input#entered_zip").on("focus", function () {
  $("h2#city_display").text("About to type");
});