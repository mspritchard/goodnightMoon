let angle = 0;
function preload(){
  moon = loadImage("moon.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  image(moon, 10, 10);
  translate(200, 200);
  rotate(angle);
  text('goodnight moon',100, 100);
//the bigger the number you're adding, the faster it will go
  angle = angle + 1;
}