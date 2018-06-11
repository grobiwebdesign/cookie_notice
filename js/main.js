//cookie notice
$(document).ready(function(){   
    setTimeout(function () {
        $(".cookie_notice").fadeIn(200);
     }, 4000);
    $(".accept").click(function() {
        $(".cookie_notice").fadeOut(200);
    }); 
}); 
