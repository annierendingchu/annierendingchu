$(document).ready(function(){

//countdown timer
  //click start to trigger
  $(".startbutton").click(function(){

  //   function makeTimer() {

  //   var hour = $("input#hour").val();
  //   var minute = $("input#minute").val();
  //   var second = $("input#second").val();
  //   hour = parseInt(hour) ||0;
  //   minute = parseInt(minute) ||0;
  //   second = parseInt(second) ||0;

  //   var h1 = new Date().getHours() + hour;
  //   var m1 = new Date().getMinutes() + minute;
  //   var s1 = new Date().getSeconds() + second;
  //   var h2 = new Date().getHours();
  //   var m2 = new Date().getMinutes();
  //   var s2 = new Date().getSeconds();

  //   var x = new Date().setHours(h1,m1,s1);
  //     x = Date.parse(x);
  //   var y = new Date().setHours(h2,m2,s2);
  //     y = Date.parse(y);

  //   var timespan = x - y

  //   var timerhour = Math.floor(timespan/ (60 * 60 * 1000));
  //   var timerminute = Math.floor(timespan/ (60 * 1000) - (hour * 60 ));
  //   var timersecond = Math.floor(timespan/ (1000) - (minute * 60) - (hour * 60 * 60));

  //   var currenttimer = timerhour + ":" + timerminute + ":" + timersecond;


  //   $('#welcome').html(u);

  // }
  // setInterval(function() { makeTimer(); }, 1000);

 // ---------------------------------------------------------

//   // Set the date we're counting down to
 

// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var hour = $("input#hour").val();
var minute = $("input#minute").val();
var second = $("input#second").val();
hour = parseInt(hour) ||0;
minute = parseInt(minute) ||0;
second = parseInt(second) ||0;

  const u = new Date();
  u.setHours(u.getHours()+hour);
  u.setMinutes(u.getMinutes()+minute);
  u.setSeconds(u.getSeconds()+second);
  var uu = u.getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = uu - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("welcome").innerHTML =  hours + "h " + minutes + "m " + seconds + "s ";
      // $('#welcome').html(u);


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("welcome").innerHTML = "no timer";
  }
}, 1000);

})


//background change!
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
