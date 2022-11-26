$(document).ready(function(){

    // Change background image 
    //$("#background").click(function() {
     //   var imageUrl = ['a','b','c' ];
        // "assets/backgrounds/2.png";

        //detect the class value of clicked element
       

        //pull nth item from the array that matchs with the number of ^element  
      //  console.log(imageUrl[0]);

     //   $("body").css("background-image", "url(" + imageUrl[0] + ")");
    //});

    var change = $("body");
    var counter = 0;
    var myPictures = [
        "assets/backgrounds/1.png",
        "assets/backgrounds/2.png",
        "assets/backgrounds/3.png",
    ];
    
    // Here's how you can hookup the click event
    $("#background").click(function nextPic(){
      counter += 1;
      if (counter > myPictures.length -1) {
        counter = 0;
      }
      change.css("background-image" , "url(" + myPictures[counter] + ")");
    })
    
    // Here's how you can hookup the click event
    $("#background").click(function nextPic(){});
    // Load the first image
    counter -= 1; // Do this so it starts at the first, not the second
    nextPic();


//countdown display
//     $(".start").click(function timer () {
//         var $this = $(this);
//         var hour = $this.find("input#hour").val();
//         var minute = $this.find("input#minute").val();
//         var second = $this.find("input#second").val();

//         var endTime = new Date(hour:minute:second);
//         var now = new Date("00:00:00");
//         var countdown = endTime - now;

//         $("#welcome").innerHTML=hour + ":" + minute + ":" + second;
// })

// setInterval(function() { timer(); }, 1000);

//
    // $('.start').click(function () {
    //     var reqVal = $('#hour').val();
    //     var parAmt = parseInt(reqVal);
    //     var totalAmount = parAmt * 60 * 60;
    
    //     var timeloop, timeSet = function () {
    
    //         totalAmount--;
    
    //         var hours = parseInt(totalAmount/(60*60));
    //         var minutes = parseInt(totalAmount/60);
    //         var seconds = parseInt(totalAmount%60);
    
    
    //         $('#welcome').text(hours + ":" + minutes + ":" + seconds);
    //     };
    
    //     var timeloop  = setInterval(timeSet, 1000);
    
    // })




});
