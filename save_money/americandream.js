$(document).ready(function(){

//current time and seconds
//    setInterval(myTimer, 1000);

// function myTimer() {
  //    const d = new Date();
    //  document.getElementById("currenttime").innerHTML = d.toLocaleTimeString();
    //}
 




 //hour progress bar movement
        var size = 0;  
        var interval = setInterval(function(){  
         size = size + 50;  
         $('.progress__fill').css('width', size + '%');  
         if(size >= 100)  
         {  
          clearInterval(interval); 
         }  
        }, 1000);


//hour time bar count up synced with real time
        setInterval(function() {
            var local = new Date();
            var localdatetime = local.getMinutes() + ":" + local.getSeconds();
          
            $('.progress__text').html(localdatetime);
          }, 1000);


//countdown to-go timer
    function makeTimer() {

        //	var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
        //    var endTime = new Date("14 February 2029 08:16:34");	
            var endTime = new Date("3 November 2023 00:00:00");			
		
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;

                var years = Math.floor(timeLeft / (60 * 60 * 24 * 365));
                 var days = Math.floor(timeLeft / (60 * 60 * 24) - years * 365); 
                var hours = Math.floor((timeLeft - (days * 86400) - years * 24) / 3600 );
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));


                if (hours < "10") { hours = "0" + hours; }  
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
               document.getElementById("togo").innerHTML = years + "y " + days + "d " + hours + "h "
              + minutes + "m " + seconds + "s " + "<br> to go";

            //    $("#days").html(days + "<span>D</span>");
              //  $("#hours").html(hours + "<span>H</span>");
                //$("#minutes").html(minutes + "<span>M</span>");
                //$("#seconds").html(seconds + "<span>S</span>");		
    
        }
        setInterval(function() { makeTimer(); }, 1000);






    //countdown timer!!

    // Set the date we're counting down to
    //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    var countDownDate = new Date().getTime();

    // Update the count down every 1 second
    
    var x = setInterval(function() {
    
      // Get today's date and time
      var start = new Date("Oct 17, 2022 00:00:00").getTime();
    //  var start = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - start;
    
      // Time calculations for days, hours, minutes and seconds
      var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("countdown").innerHTML = years + "y " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance > 3326897000) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "YOU MADE IT!";
      }
    }, 1000);


    //hourly countdown

    



//description minute second timer
//    var sec = 0;
//    function pad ( val ) { return val > 9 ? val : "0" + val; }
//    setInterval( function(){
//        $("#second").html(pad(++sec%60));
//        $("#minute").html(pad(parseInt(sec/60,10)));
//    }, 1000);


    //countup
    //    $('#countdown').countup({
      //      start: new Date(2022, 10, 17, 00, 00, 00) //year, month, day, hour, min, sec
        // });
        // Creating the plugin

    //    $.fn.countup = function(prop){

//        var options = $.extend({
  //      callback    : function(){},
    //    start       : new Date(2022, 10, 17, 00, 00, 00)    // Changing this to "start"
      //  },prop);
//
        // Tename the "left" variable to "passed"
  //      var passed = 0, d, h, m, s,
    //    positions;

      //  init(this, options);

//        positions = this.find('.position');

  //      (function tick(){

        // Calculate the passed time
    //    passed = Math.floor((new Date() - options.start) / 1000);

        // Calculate the passed minutes, hours and days     

   //     d = Math.floor(passed / days);
     //   updateDuo(0, 1, d);
       // passed -= d*days;

     //   h = Math.floor(passed / hours);
       // updateDuo(2, 3, h);
       // passed -= h*hours;

 //       m = Math.floor(passed / minutes);
   //     updateDuo(4, 5, m);
     //   passed -= m*minutes;

        // Number of seconds passed
       // s = passed;
      //  updateDuo(6, 7, s);

        // Calling an optional user supplied callback
        //options.callback(d, h, m, s);

        // Scheduling another call of this function in 1s
   //     setTimeout(tick, 1000);
    //})();

    // This function updates two digit positions at once
    //function updateDuo(minor,major,value){
      //  switchDigit(positions.eq(minor),Math.floor(value/10)%10);
        //switchDigit(positions.eq(major),value%10);
    //}

   // return this;
    //};
});