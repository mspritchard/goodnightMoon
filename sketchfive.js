let sentence = "And there were # little bears sitting on chairs";
let wordIndexToReplace = 3; // Change this to the index of the word you want to replace
let words = ["two", "three", "four", "five", "six"];

function setup() {
  createCanvas(400, 200);
  FileList('black');
  textSize(16);
  textAlign(CENTER);
  textFont('Alata');
}

function draw() {
  background(1, 149, 65);
  text(sentence, width/2, height/2);
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