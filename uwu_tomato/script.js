$(document).ready(function(){
    $("#hi").click(function(){
        alert("It is nice to meet you, too, UWU TOMATO.");
    });

    $(".img").click(function(){
        alert("What an adorable tomato.");
    });

    $(".freedom").click(function(){
        alert("Enjoy it while it lasts.");
    });

    $("#free").click(function(){
        alert("Congrats!");
    });

    $(".panic").click(function(){
        alert("To free you.");
    });

    $("#feel").click(function(){
        alert("Don't worry. Life is but a dream...");
    });

    $(".fainting").click(function(){
        alert("You won't be sad if you feel nothing.");
    });

    $("#sticky4").click(function(){
        alert("Sometimes I dream of being a human. --UWU");
    });

    $("#sticky3").click(function(){
        alert("I once fell in love with a strawberry, but she was too insecured about her acnes to stay with me. --UWU");
    });

    $("#sticky1").click(function(){
        alert("blingbling");
    });

    $("#sticky2").click(function(){
        alert("sparkspark");
    });

    $("#sticky6").click(function(){
        alert("See you soon.");
    });

    $(window).mousemove(function(e) {
        let cursor = $(".cursor");
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });


    
});
    //$("#hi").click(function(){
        //$(".img").attr('src','panic_right_Tomato.png')
      //  $("#hi").text("Wait, what are you doing?")
    //})

    

