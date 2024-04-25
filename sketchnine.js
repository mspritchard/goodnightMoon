let draft, ready;

function preload() {
  ready = loadImage('greenRect.png');
  draft = loadImage('greyRect.png');
}
function windowResized() {
    createCanvas (windowWidth, windowHeight);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); 
   cursor('littlerat.png', 20, 20);
  image(ready, 0, 0);
  image(draft, 0, 0);
 
}

// function draw() {
//     image(ready, 0, 0);
//   image(draft, 0, 0);
//    imageMode(CENTER); 
//   image(rat, mouseX, mouseY);
// }

function mouseDragged() {
  copy(ready, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}
