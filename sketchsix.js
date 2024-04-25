let x = 20;
var s = 0;
let cats;

function preload(){
  cats = loadImage("cats.png");
}

function windowResized() {
    createCanvas (windowWidth, windowHeight);
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(1, 149, 65);
  if (keyIsPressed == true) { 
    x+=7;                      
  }
  image(cats, x-560, 80);
  //trying to make the image move faster
  s = s + 60;
}