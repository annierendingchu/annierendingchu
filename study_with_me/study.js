$(document).ready(function(){

    // Change background image 
    $("#background").click(function() {
        var imageUrl = ['a','b','c' ];
        // "assets/backgrounds/2.png";

        //detect the class value of clicked element
       

        //pull nth item from the array that matchs with the number of ^element  
        console.log(imageUrl[0]);

        $("body").css("background-image", "url(" + imageUrl[0] + ")");
    });





});
