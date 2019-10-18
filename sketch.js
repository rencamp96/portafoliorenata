////////////////////////////////////////////////
// VARIABLES ///////////////////////////////////
////////////////////////////////////////////////

var canvas;

var sec;
var trans;

var Y_AXIS = 1;
var X_AXIS = 2;
var cf1, cf2, cf3, cf4, cf5, cf6, cf7, cf8;

var sec = 440;
var trans = 200;
var por = 150;

////////////////////////////////////////////////
// FUNCIONES ///////////////////////////////////
////////////////////////////////////////////////

p5.disableFriendlyErrors = true;

function setup() {
  canvas = createCanvas(windowWidth, 3300);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

////////////////////////////////////////////////
// COLORES PARA EL FONDO ///////////////////////
////////////////////////////////////////////////

  cf1 = color(255);
  cf2 = color(220, 255, 250);
  cf3 = color(223, 255, 221);
  cf4 = color(245,225,255);
  cf5 = color(252, 255, 210);
  cf6 = color(220, 255, 250);
  cf7 = color(217, 211, 255);

  noLoop();
}

function draw() {


  setGradient(0, 0, windowWidth, 800, cf1, cf2, Y_AXIS);
  fill(cf2);
  rect(0,800, windowWidth, 3500);

  stroke(0);
  strokeWeight(5);
  fill(50, 50, 50);
  line((windowWidth / 2), 120, (windowWidth / 2), 3200);
  ellipse((windowWidth / 2), 120, 30,30);
  ellipse((windowWidth / 2), 3200, 30,30);


}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 3300);
}
