let img;
let imgWidth;
let imgHeight;
let aspectRatio;

function preload() {
    img = loadImage('lilStar.png');
}

function setup() {
    createCanvas(600, 600);
    imgWidth = width / 2;
    imgHeight = height / 2; 
    aspectRatio = img.width / img.height; 
}

function draw() {
    background(1, 149, 65);
    image(img, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight);
}

function mousePressed() {
    let newWidth = random(100, 400); 
    let newHeight = newWidth / aspectRatio; 

    if (newHeight > height) {
        newHeight = height;
        newWidth = newHeight * aspectRatio;
    }

    imgWidth = newWidth;
    imgHeight = newHeight;
}