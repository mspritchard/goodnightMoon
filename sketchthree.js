let phone;
let rotary;

function windowResized() {
  createCanvas (windowWidth, windowHeight);
}

function preload() {
  rotary = loadImage("rotary.png");
  phone = loadImage("phone.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(1, 149, 65);

  let rotaryX = width/2;
  let rotaryY = height/2;
  imageMode(CENTER); 
  image(rotary, rotaryX, rotaryY); 
  imageMode(CENTER); 
  image(phone, mouseX, mouseY);
}
