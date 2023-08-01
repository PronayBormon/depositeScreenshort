$(document).ready(function() {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $('body').addClass('dark_preview');
        $('body').removeClass('white_preview');
    }
    else if($(ele).prop("checked") == false){
        $('body').addClass('white_preview');
        $('body').removeClass('dark_preview');
    }
}