$(document).ready(function() {
    $(".Image").hide();

    var elements = $(".Image");
    var elementCount = elements.size();
    var elementsToShow = 4;
    var alreadyChoosen = ",";
    var i = 0;
    while (i < elementsToShow) {
        var rand = Math.floor(Math.random() * elementCount);
        if (alreadyChoosen.indexOf("," + rand + ",") < 0) {
            alreadyChoosen += rand + ",";
            elements.eq(rand).show();
            ++i;
        }
    }
});
