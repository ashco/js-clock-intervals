//Real time time
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();

var secDegrees = seconds*6;
var minDegrees = minutes*6;
var hourDegrees = hour*30;

var tick = function(){
  secDegrees += 6;
  minDegrees += .1;
  hourDegrees += (36/4320);  
  document.getElementById('second').style.transform = "rotate(" + secDegrees + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + minDegrees + "deg)";
  document.getElementById("hour").style.transform = "rotate(" + hourDegrees + "deg)";
}

setInterval(tick, 1000);


// //tick function determines degree increase
// var secDegrees = 0;
// var minDegrees = 30;
// var hourDegrees = 290;

// var tick = function(){
//   secDegrees += 6;
//   minDegrees += .1;
//   hourDegrees += (36/4320);  
//   document.getElementById('second').style.transform = "rotate(" + secDegrees + "deg)";
//   document.getElementById("minute").style.transform = "rotate(" + minDegrees + "deg)";
//   document.getElementById("hour").style.transform = "rotate(" + hourDegrees + "deg)";
// }

// setInterval(tick, 1000);


