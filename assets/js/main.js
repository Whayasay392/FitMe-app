var countdown = new Date("June 15, 2021") . getTime();
var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    document.getElementById("timer").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s ";

    if(distance < 0)    {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }   
}, 1000);



// function(ending)  {
//     var_second = 1000,
//        _minute = _second * 60,
//        _hour = _minute * 60,
//        _day = _hour = 24,

//        ending = new Date(end),
//        timer,

//        calculate = function()   {

//        }
//        calculate
// }