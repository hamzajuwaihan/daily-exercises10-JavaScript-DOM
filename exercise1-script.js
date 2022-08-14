let mydiv= document.getElementById("mydiv");
mydiv.onmouseover = function() {mouseOver()};
mydiv.onmouseout = function() {mouseOut()};

function mouseOver() {
  mydiv.innerHTML = "HI";
}

function mouseOut() {
  mydiv.innerHTML = "Hello world";
}