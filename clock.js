var secDegrees = 0;
var minDegrees = 30;
var hourDegrees = 290;

var tick = function(){
  secDegrees += 6;
  minDegrees += .1;
  hourDegrees += (36/4320);  
  document.getElementById('second').style.transform = "rotate(" + secDegrees + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + minDegrees + "deg)";
  document.getElementById("hour").style.transform = "rotate(" + hourDegrees + "deg)";
}

setInterval(tick, 1000);