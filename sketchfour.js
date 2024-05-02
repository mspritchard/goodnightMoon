let cow;
let pic;
var gif_loadImg, gif_createImg;


  
function preload (){
  gif_loadImg = loadImage("miniMoon.gif");
  gif_createImg = createImg("miniMoon.gif");
  pic = loadImage("emptyPic.png");
  cow = loadImage("cow.png");
  frame = loadImage("frame.png");
}
  
  function setup() {
  createCanvas(700, 600);

 
}

function draw() {
  background(1, 149, 65);
  fill(4, 145, 198);
  rect(90, 100, 500, 400)
 


  imageMode(CENTER);
  gif_createImg.position(850,530 );
  

  imageMode(CENTER); 
  image(cow, mouseX, mouseY);
  
  image(frame, width / 2, height / 2, width, height);
  
}