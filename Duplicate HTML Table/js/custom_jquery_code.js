var tracker = 0;

$(".duplicate_Btn").on("click", function () {
    if (tracker === 0) {
        //table replaced
        $("div#place").html($("div#smart").html());

        //changed button text
        $(".duplicate_Btn").attr('value', 'Click to Remove Table');

        //changed button tracker
        tracker = 1;
    } else {
        $("#place").html('<div id="place"> <h4> This area will be replaced by the below table </h4> </div>');
        $(".duplicate_Btn").attr('value', 'Click to Duplicate Table');
        tracker = 0;
    }
});