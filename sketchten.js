let string = `
Goodnight room.
Goodnight room.
Goodnight room.
Goodnight room.
Goodnight room.
Goodnight room.
Goodnight room.
Goodnight room.`;

let currentCharacter = 0;

let margin = 60;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(1, 149, 65);
//}

//function mousePressed() { 
  let currentString = string.substring(0, currentCharacter);
  
  push();
  textSize(24);
  textFont('Courier');
  textAlign(LEFT, TOP);
  text(currentString, 90, 10);
  pop();
  
  currentCharacter += random(0, 0.9);
  
}

//text(currentString, margin +10, margin + 10, width - margin*2, height - margin)