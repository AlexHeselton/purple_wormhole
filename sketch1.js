var startRadius = 15;
var maxRadius = 18;
var radius = 15;
var growthSpeed = 0.40;
var grow = true;
var volume;
var cursorSpeed;


var osc;
var envelope;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
}

function draw() {
  background(201);
  translate(mouseX, mouseY);
  scale(mouseX / 50.0);
  ellipse(0, 0, radius, radius);

  envelope = new p5.Env();
  envelope.setADSR(0.001, 0.5, 0.8, 2);
  envelope.setRange(1, 0);

  if (keyIsPressed) {
    if ((key == 's') || (key == 'S')) {
      osc = new p5.SinOsc();
    }
    if ((key == 't') || (key == 'T')) {
      osc = new p5.TriOsc();
    }
    if ((key == 'q') || (key == 'Q')) {
      osc = new p5.SqrOsc();
    }
    if ((key == 'a') || (key == 'A')) {
      osc = new p5.SawOsc();
    }
  }

  if(mouseIsPressed) {
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
    cursorSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
    osc.freq(midiToFreq(66));
    volume = map(cursorSpeed, 0, 15, 0, 4);
    osc.amp(volume);
    envelope.play(osc); 
  }
}
  


