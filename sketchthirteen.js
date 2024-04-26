let trail = [];
let trailSpacing = 10; //spacing between Zs

function windowResized() {
    createCanvas (windowWidth, windowHeight);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(1, 149, 65);
  
  // Draw the trail
  for (let i = 0; i < trail.length; i += trailSpacing) {
    let pos = trail[i];
    textFont('actionMan')
    textSize(40);
    text('Z', pos.x, pos.y);
  }
  
  //mouse position
  trail.push({x: mouseX, y: mouseY});
  
  //limit trail length
  if (trail.length > 50) {
    trail.shift();
  }
}