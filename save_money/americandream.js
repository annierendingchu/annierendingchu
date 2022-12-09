$(document).ready(function(){


//date picker
    $(function() {
        $( "#startdate" ).datepicker({
        dateFormat: 'dd/mm/yy', 
        defaultDate:"17-10-2022",
        });
    });

    $('#startdate input').change(function(){
          var dt = new Date( $(this).val());
          var year = dt.getFullYear();
          var month =  (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth()+1);
          var day = (dt.getDate() < 10 ? '0' : '') + dt.getDate();
        
        })
        

//overall message to user, title effects, hover window for progress
    $("#titlehover").click(function(){
        alert("Dear User, \n\nI'm so glad you asked why! \n\n$7.25 is the U.S. federal minimum wage. \n\nStarting Oct/17/2022 (the date of creation of this website), you are automatically enrolled in this program where you no longer need to worry about sleep and living costs. Just save up all your earnings and work towards your dream life! \n\n(Surely without spending any of your savings it must be easy to save up and become rich?)\n\nSincerely,\nThe Dream Team");
    });

    $("#titlehover").mouseenter(function(){
        $("#titlehover").css('color','red');
        $("#titlehover").css('font-size','4.1vw');

    });
 
    $("#titlehover").mouseleave(function(){
        $("#titlehover").css('color','rgb(23, 87, 236)');
        $("#titlehover").css('font-size','4vw');
    });


    $("#bank").mouseenter(function(){
        $("#bank").css('color','red');
        $("#bank").css('font-size','4.1vw');

    });
 
    $("#bank").mouseleave(function(){
        $("#bank").css('color','rgb(23, 87, 236)');
        $("#bank").css('font-size','2vw');
    });


    $("#bank").click(function(){
        $(".top").css("opacity","1");
        $(".top").toggle();
      });

      

//bottom progress bar

var bar = setInterval(function progresscat(){ 
    var beginning1 = new Date("Oct 17, 2022 00:00:00").getTime();
    var paytime1 = new Date().getTime();
    var totalhoursworked1 = Math.round((paytime1 - beginning1) / (1000*60*60));
    var paycheck1 = Math.round(totalhoursworked1 * 7.25);

    var progress1 = Math.round((paycheck1 / 25000)*100); //doesn't accept decimal places... could not figure out
    //progress1.toFixed(10);
// var progressbar1 = Math.round((paycheck) * (progress1));
   // progressbar1.toFixed(10);
// var pigprogress1 = Math.round (((paycheck) * (progress1) * 0.07));
var pigprogress1 = Math.round ((((paycheck1 / 25000)*100 ))*0.2);

   // pigprogress1.toFixed(10);
$('.progress__fill2_2').css('width', progress1 + '%'); 
$('.pig2').css('width', pigprogress1 + '%'); 
$('.moneypig2').css('width', pigprogress1 + '%'); 
console.log(pigprogress1);
   if (progress1 >= 99){
    clearInterval(bar);
    $('.progress__fill2_2').css('width','100%'); 
    $('.moneypig2').css('width', '24%'); 
    return ;
}
}, 1000);




//add money every full hour, change background according to bank account
setInterval(function(){ 
        var beginning = new Date("Oct 17, 2022 00:00:00").getTime();
        var paytime = new Date().getTime();
        var totalhoursworked = Math.round((paytime - beginning) / (1000*60*60));
        var paycheck = Math.round(totalhoursworked * 7.25);
  
        $(".label").html('$' + paycheck);
        $("#bank").html('$' + paycheck);

        if (paycheck >=25000){
            $("body").css('background-image','url("assets/cat.gif")');
        }
    }, 1000);


//hover futures
    $(".progress__fill2").mouseenter(function(){
    $(".future1").css('opacity','1')
    });

    $(".progress__fill2").mouseleave(function(){
    $(".future1").css('opacity','0')
    });


//money pig every full hour

setInterval(function(){ 
    var fullhour = new Date().getMinutes() + new Date().getSeconds;
    if (fullhour >= 118){
        $(".pig").addClass(".hide")
        $(".moneypig").addClass("show")
        $(".pig2").addClass(".hide")
        $(".moneypig2").addClass("show")
    } else {
        $(".pig").removeClass(".hide")
        $(".moneypig").removeClass("show")
        $(".pig2").removeClass(".hide")
        $(".moneypig2").removeClass("show")
    }
}, 1000);



 //hour progress bar movement + pig movement

        setInterval(function(){ 
            var size = new Date().getSeconds();
            var progressbar = Math.floor(size * (100/60));
            var pigprogress = Math.floor (size * (100/60) * 1.5);
       //     if (progressbar >= 100) {
       //         progressbar = Math.floor(size * progress);
       //     }
           $('.progress__fill').css('width', progressbar + '%'); 
           $('.pig').css('width', pigprogress + '%'); 
           $('.moneypig').css('width', pigprogress + '%'); 


        //console.log(progressbar);
        }, 1000);


   
//hour time bar count up synced with real time
        setInterval(function() {
            var local = new Date();
            var localdatetime = local.getHours() + ":" + local.getMinutes() + ":" + local.getSeconds();
          
            $('.progress__text').html(localdatetime);

          }, 1000);


//countdown to-go timer
    function makeTimer() {

        //	var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
        //    var endTime = new Date("14 February 2029 08:16:34");	
            var endTime = new Date("28 June 2102 01:00:00");			
		
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;

                var years = Math.floor(timeLeft / (60 * 60 * 24 * 365));
                var days = Math.floor(timeLeft / (60 * 60 * 24) - years * 365); 
                var hours = Math.floor(timeLeft / (60 * 60) - days * 24);
               // var hours = Math.floor((timeLeft - (days * 86400) - years * 24) / 3600 );
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
              //  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
               // var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));


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

 

    // Update the count down every 1 second
    
    var x = setInterval(function() {
       // Set the date we're counting down to
    //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    var countDownDate = new Date().getTime();

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
      if (distance > 33268970000) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "YOU MADE IT!";
      }
    //   console.log(distance);
    }, 1000);



});

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
