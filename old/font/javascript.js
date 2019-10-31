var cube = document.getElementById("cube");
var slider = document.getElementById("slider");
var side = 0;
var wait = 0; 
var clicked = 0; 

function hide()
{
if (clicked==0)
{
var reminder = document.getElementById("reminder");
var grey = document.getElementById("grey"); 
reminder.setAttribute("style","opacity:0;");
grey.setAttribute("style","opacity:0;");
setTimeout(disp,1000);
clicked=1;
}
}
function F1()
{
hide()
 var cube = document.getElementById("cube");
var slider = document.getElementById("slider"); 
 side = 1;
 wait = 0;
cube.setAttribute("style","-moz-transform: rotatey(0deg);-ms-transform: rotatey(0deg);-o-transform: rotatey(0deg);-webkit-transform: rotatey(0deg);transform: rotatey(0deg);-moz-transition: -moz-transform 2s ease;-o-transition: -o-transform 2s ease;-webkit-transition: -webkit-transform 2s ease;transition: transform 2s ease;");
slider.setAttribute("style","opacity:0;   -moz-transition: opacity 0s;-o-transition: opacity 0s;-webkit-transition: opacity 0s;transition: opacity 0s;");
}
function F2()
{
hide()
var cube = document.getElementById("cube");
var slider = document.getElementById("slider");
 side = 2; 
wait = 0;
cube.setAttribute("style"," -moz-transform: rotatey(90deg);-ms-transform: rotatey(90deg);-o-transform: rotatey(90deg);-webkit-transform: rotatey(90deg);transform: rotatey(90deg);-moz-transition: -moz-transform 2s ease;-o-transition: -o-transform 2s ease;-webkit-transition: -webkit-transform 2s ease;transition: transform 2s ease;");
slider.setAttribute("style","opacity:0;-moz-transition: opacity 0s;-o-transition: opacity 0s;-webkit-transition: opacity 0s;transition: opacity 0s;");
}
function F3()
{
hide()
var cube = document.getElementById("cube");
var slider = document.getElementById("slider");
  side = 3; 
  wait = 0;
cube.setAttribute("style","-moz-transform: rotatey(180deg);-ms-transform: rotatey(180deg);-o-transform: rotatey(180deg);-webkit-transform: rotatey(180deg);transform: rotatey(180deg);-moz-transition: -moz-transform 2s ease;-o-transition: -o-transform 2s ease;-webkit-transition: -webkit-transform 2s ease;transition: transform 2s ease;");
slider.setAttribute("style","opacity:0;-moz-transition: opacity 0s;-o-transition: opacity 0s;-webkit-transition: opacity 0s;transition: opacity 0s;");
}
function F4()
{
hide()
var cube = document.getElementById("cube");
var slider = document.getElementById("slider");
  side = 4;
  wait = 0;
cube.setAttribute("style","-moz-transform: rotatey(270deg);-ms-transform: rotatey(270deg);-o-transform: rotatey(270deg);-webkit-transform: rotatey(270deg);transform: rotatey(270deg);-moz-transition: -moz-transform 2s ease;-o-transition: -o-transform 2s ease;-webkit-transition: -webkit-transform 2s ease;transition: transform 2s ease;");
slider.setAttribute("style","opacity:0;-moz-transition: opacity 0s;-o-transition: opacity 0s;-webkit-transition: opacity 0s;transition: opacity 0s;");
}
 function F5()
{
hide()
var cube = document.getElementById("cube");
var slider = document.getElementById("slider");
  side = 5;  
wait = 0;
cube.setAttribute("style","-moz-transform: rotatex(90deg);-ms-transform: rotatex(90deg);-o-transform: rotatex(90deg);-webkit-transform: rotatex(90deg);transform: rotatex(90deg);-moz-transition: -moz-transform 2s ease;-o-transition: -o-transform 2s ease;-webkit-transition: -webkit-transform 2s ease;transition: transform 2s ease;");
setTimeout(gal,20);
} 
function disp()
{
var reminder = document.getElementById("reminder");
var grey = document.getElementById("grey"); 
reminder.setAttribute("style","display:none;");
grey.setAttribute("style","display:none;");
}
function F6()
{
var cube = document.getElementById("cube");
var slider = document.getElementById("slider");
 side = 6; 
wait = 0;
hide()
cube.setAttribute("style","-moz-transform: rotatex(-90deg);-ms-transform: rotatex(-90deg);-o-transform: rotatex(-90deg);-webkit-transform: rotatex(-90deg);transform: rotatex(-90deg);-moz-transition: -moz-transform 2s ease;-o-transition: -o-transform 2s ease;-webkit-transition: -webkit-transform 2s ease;transition: transform 2s ease;");
slider.setAttribute("style","opacity:0;-moz-transition: opacity 0s;-o-transition: opacity 0s;-webkit-transition: opacity 0s;transition: opacity 0s;");
}
function gal()
{
wait = wait +1;
var slider = document.getElementById("slider");
if ((wait<100) && (side == 5))
{
setTimeout(gal,20);
}
else if (side == 5)
{
slider.setAttribute("style","opacity:1;-moz-transition: opacity 1s;-o-transition: opacity 1s;-webkit-transition: opacity 1s;transition: opacity 1s;");
wait = 0;
}
else
wait = 0;

}

