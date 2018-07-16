$("button").on("click", function () {
    // Fill In your Code here
    var quantity = $("input#quant_1").val();
    var rate = $("input#rate_1").val();
    var amount = quantity * rate;
    $("input#amount_1").val(amount);
    //$("input#amount_1").removeAttr("id");
});