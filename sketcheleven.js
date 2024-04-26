let angle = 0;
let radius = 150;
let rotationSpeed = 1;

function preload(){
  moon = loadImage("moon.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(1, 149, 65);
  translate(width/2, height/2);
  rotate(angle);
  image(moon, -moon.width/2, -moon.height/2);

  let x = radius * cos(angle);
  let y = radius * sin(angle);

  let speedFactor = map(mouseX, 0, width, 0.1, 5);
  rotationSpeed = speedFactor;
  angle += rotationSpeed;

  //image(moon, 10, 10);
  //translate(200, 200);
  //rotate(angle);
  //text('goodnight moon',100, 100);
//the bigger the number you're adding, the faster it will go
  //angle = angle + 1;
}

function mouseClicked(){
  rotationSpeed += 1;
}