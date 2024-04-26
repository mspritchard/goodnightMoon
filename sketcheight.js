var link;

let sentence = "And a little blank";
let wordIndexToReplace = 3; // Change this to the index of the word you want to replace
let words = ["barn", "toyhouse", "mansion", "hotel", "school"];

function windowResized() {
  createCanvas (windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, 200);
  fill('black');
  textSize(55);
  textAlign(CENTER);
  textFont("Alata");
  //link = createA("https://mspritchard.github.io/goodnightMoon/pagenine.html");
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