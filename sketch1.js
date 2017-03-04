

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
}

function draw() {
  background(201);
  translate(mouseX, mouseY);
  scale(mouseX / 50.0);
  ellipse(0, 0, 15, 15);


}
  


