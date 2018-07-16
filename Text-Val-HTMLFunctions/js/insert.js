//when single clicked
$("#btn_main").on("click", function () {
    $(".dope").text("This is a new sentence");
    //alert($(".dope").text());
    $("#btn_main").val("Double click");
});

//when double clicked
$("#btn_main").on("dblclick", function () {
    $(".dope").text("You'll learn how to replace me");
    $("#btn_main").val("Replace");
});

//adds cool class css styling
$("#btn_new").on("click", function () {
    $(".dope").html('<b class="cool">This is html</b>');
    alert($("#btn_new").val());
});