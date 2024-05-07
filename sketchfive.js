var link;

let sentence = "And there were __ little bears sitting on chairs";
let wordIndexToReplace = 3; // Change this to the index of the word you want to replace
let words = ["two", "three", "four", "five", "six"];

function windowResized() {
  createCanvas (windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, 200);
  fill('black');
  textSize(55);
  textAlign(CENTER);
  textFont("Alata");
  //link = createA("https://mspritchard.github.io/goodnightMoon/pagesix.html");
}

function draw() {
  background(1, 149, 65);
  text(sentence, width/2, height/2);
  //link.position(100,30);
}

function mousePressed() {
  // Split the sentence into an array of words
  let sentenceArray = sentence.split(" ");
  
  // Randomly select a word from the words array
  let randomWord = random(words);
  
  // Replace the word at the selected index with the random word
  sentenceArray[wordIndexToReplace] = randomWord;
  
  // Join the sentence array back into a string
  sentence = sentenceArray.join(" ");
}