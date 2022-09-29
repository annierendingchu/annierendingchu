$(document).ready(function(){
    $("#hi").click(function(){
        alert("It is nice to meet you, too, UWU TOMATO.");
    });

    $(".img").click(function(){
        alert("What an adorable tomato.");
    });

    $(".panic").click(function(){
        alert("To free you.");
    });


    $(window).mousemove(function(e) {
        let cursor = $(".cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window).mouseleave(function(e) {
        window.location.replace("http:");

        });
    });
    //$("#hi").click(function(){
        //$(".img").attr('src','panic_right_Tomato.png')
      //  $("#hi").text("Wait, what are you doing?")
    //})

    

