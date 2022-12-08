$(document).ready(function(){
 
  $(".top").hide();


    $("#welcome").click(function (){
      $(".top").show();
      
    })
 
    $("#x").click(function (){
      $(".top").hide();
    })
 


//select time
$(function(){
  var $select = $("#minute");
  for (i=0;i<=59;i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});
$(function(){
  var $select = $("#second");
  for (i=0;i<=59;i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});
$(function(){
  var $select = $("#breaksecond");
  for (i=0;i<=59;i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});
$(function(){
  var $select = $("#breakminute");
  for (i=0;i<=59;i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});
//countdown timer
  //click start to trigger
  $(".startbutton").click(function(){


//COUNT DOWN CLOCK??
var hour = $("input#hour").val();
var minute = $("select#minute").val();
var second = $("select#second").val();
hour = parseInt(hour) ||0;
minute = parseInt(minute) ||0;
second = parseInt(second) ||0;


// function timer(){
var countdownclock = setInterval(function countdown(){
  second -= 1;
  // if (hour + minute + second <=0){
  //   clearInterval(countdownclock);
  //   document.getElementById("welcome").innerHTML = "no timer";
  // } else

  if (hour <= 0 && minute <= 0 && second<=0){
    clearInterval(countdownclock);
      hour = 0;
      minute = 0;
      second = 0;
      $("#alarm")[0].play();
    // document.getElementById("welcome").innerHTML = "no timer";
  }

  if (second <=0 && minute>0) {
    minute -= 1;
    second = 60;
    countdown()
  } 
  if (minute <= 0 && hour>0) {
    hour -= 1;
    minute = 59;
    second = 60;
    countdown();
  }

    document.getElementById("welcome").innerHTML = hour + ":" + minute + ":" + second;


$(".startbutton").hide();
    //click clear form to refresh page
$(".resetbutton").click(function (){
  // location.reload();
  clearInterval(countdownclock);
  $(".startbutton").show();

  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("welcome").innerHTML = "welcome :)";

  })

},1000);




//break timer!!!


// setTimeout (function(){


//   var pause = setInterval(function breakcount(){
//   var minutes = parseInt(0);
//   var seconds = parseInt(15);
//      seconds -= 1;
  
//     if (seconds == 0 && minutes == 0) {
//       clearInterval(pause);
//     }
//     if (seconds <=0 && minutes>0) {
//       minutes -= 1;
//       seconds = 60;
//       breakcount()
//     } 
//     if (minutes <= 0 && seconds>0) {
//       minutes = 0;
//       breakcount()
//     }
//     document.getElementById("welcome").innerHTML = "break: " + minutes + ":" + seconds;
//     $(".girl").css("background-image","url(" + "assets/girl2_break.png" + ")")
//     },1000)

//       // clearInterval(pause);
//     },5000)



})


//music playlist!!
$("#music2").hide();

var x = 0;
var music = document.getElementById("song");


$("#music").click(function(){
  $("#song")[0].play();
  $("#music2").css("color" , "lightgreen");
  $("#music").hide();
  $("#music2").show();
  
  music.addEventListener('ended', function(){
    x=x+1;
    music.src = "assets/music/" + x%4 + ".mp3";
    music.load();
    music.play();       
    })
})

$("#music2").click(function(){
  $("#song")[0].pause();
  $("#music2").css("color" , "white");
  $("#music2").hide();
  $("#music").show();
})


//background change!
    var change = $("body");
    var counter = 0;
    var myPictures = [
      "assets/backgrounds/2.gif",
      "assets/backgrounds/3.gif",
      "assets/backgrounds/4.gif",
      "assets/backgrounds/1.gif",
      "assets/backgrounds/5.gif",
      "assets/backgrounds/6.gif",
      "assets/backgrounds/7.gif",
      "assets/backgrounds/8.gif",
      "assets/backgrounds/9.gif",
      "assets/backgrounds/10.gif",
      "assets/backgrounds/11.gif",

        "assets/backgrounds/1.png",
        "assets/backgrounds/2.png",
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

});
