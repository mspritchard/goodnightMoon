let img1, img2;

function preload() {
  img1 = loadImage('singlemitten.png');
  img2 = loadImage('mitten1.png');
}

function setup() {
  createCanvas(600, 600);
  background(1, 149, 65);
    imgWidth = width / 2;
    imgHeight = height / 2;
  //image(img1, 0, 0, width, height);
}

function draw(){

  image(img1, 0, 0, imgWidth, imgHeight);
}

function keyPressed() {
  if (key === '2') {
    image(img2, width/2, height/2, imgWidth, imgHeight);
  }
  
  if (key === '1') {
    image(img1, 0, 0, imgWidth, imgHeight);
  }
  
}
