let phone;
let rotary;

function preload() {
  rotary = loadImage("rotary.png");
  phone = loadImage("phone.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(1, 149, 65);
  imageMode(CORNER); 
  image(rotary, 130, 100); 
  imageMode(CENTER); 
  image(phone, mouseX, mouseY);
}
