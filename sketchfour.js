let cow;
let pic;
let x = 0; 
let y = 0; 
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
  gif_createImg.position(900,650);
   //x+= (mouseX - x) * 0.04; 
   //y+= (mouseY - y) * 0.04; 

  x = constrain(mouseX, 100, 600); 
  y = constrain(mouseY, 100, 500); 

  imageMode(CENTER); 
  image(cow, x, y);

 

   
  
  image(frame, width / 2, height / 2, width, height);
  
}