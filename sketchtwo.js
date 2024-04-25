//gradient variable object
var gradient = {
  r: 100,
  g: 100,
  b: 100
}

function windowResized() {
  createCanvas (windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gradient.r = random(0, 100);
  gradient.g = random(125, 255);
  gradient.b = random(0, 150);
  background(gradient.r, gradient.g, gradient.b);
}
function draw() {
  background(gradient.r, gradient.g, gradient.b);
}
function mousePressed() {
  gradient.r = random(0, 100);
  gradient.g = random(125, 255);
  gradient.b = random(0, 150);
  background(gradient.r, gradient.g, gradient.b)
}




