var startRadius = 15;
var maxRadius = 18;
var radius = 15;
var growthSpeed = 0.40;
var grow = true;
var volume;
var cursorSpeed;
var mouseClick;

var alphaVal = 20;
var envelope;
var osc;
var sinOsc;
var playing = false;

var bgcolor = 255;

function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(220);
  osc.amp(0);
  osc.start();
  background(bgcolor);
  
}

function draw() {

  //background(201);
  translate(mouseX, mouseY);
  scale(mouseX / 50.0);
  fill(125, 0, alphaVal, alphaVal);
  ellipse(0, 0, radius, radius);

  alphaVal = map(mouseX, 0, windowWidth, 20, 255);
  osc.freq(map(mouseY, 0, windowHeight, 440, 220));
  volume = map(mouseX, 0, windowWidth, 0, 0.8);
  
   //cursorSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
  if (playing == true) {
    osc.amp(volume, 0.05);
  }
  else {
    osc.amp(0, 0.05);
  }

  if (mouseClick == true) {
    if (radius <= startRadius) {
        radius += growthSpeed;
        grow = true;
    }
    else if ((radius > startRadius) && (radius < maxRadius)) {
        if (grow == true) {
          radius += growthSpeed;
        }
        else {
          radius -= growthSpeed;
        }
    }
    else {
        radius -= growthSpeed;
        grow = false;
    }
  }
}

function mousePressed() {
    mouseClick = true;
    playing = true; 
}

function mouseReleased() {
  mouseClick = false;
  playing = false;
}


 function keyPressed() {
    if ((key == 's') || (key == 'S')) {
      osc.setType('sine');
    }
    if ((key == 't') || (key == 'T')) {
      osc.setType('triangle')
    }
    if ((key == 'q') || (key == 'Q')) {
      osc.setType('square')
    }
    if ((key == 'a') || (key == 'A')) {
      osc.setType('sawtooth')
    }
    if ((key == 'b') || (key == 'B')) {
      background(bgcolor); 
    }
  }





  


