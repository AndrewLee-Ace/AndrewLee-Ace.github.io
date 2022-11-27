var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var backgroundcolor = document.getElementById("bgcolor");
var color = document.getElementById("color");


function setBackground() {
  colorPicker.addEventListener('change', function() {
    let bgc = backgroundcolor.value;
    document.body.style.backgroundColor = bgc;
  });
  
}


