var startRadius = 15;
var maxRadius = 18;
var radius = 15;
var growthSpeed = 0.40;
var grow = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
}

function draw() {
  background(201);
  translate(mouseX, mouseY);
  scale(mouseX / 50.0);
  ellipse(0, 0, radius, radius);

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
  }

}
  


