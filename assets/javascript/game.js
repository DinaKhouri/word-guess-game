console.log("hello world");

// my array from words that computer can chose from, it can be as much as we want
var words = ["plan", "dog", "study", "travel", "steak"];
//added music effects
var bell = document.getElementById("bell");
var wrong = document.getElementById("wrong");
var clap = document.getElementById("clap");
var sorry = document.getElementById("sorry");

//computer picks randomly from array of words
var rand = words[Math.floor(Math.random() * words.length)];
console.log(rand);
//created this array to be able to compare the index of right letter
//and to add you win messege when the array reaches a specific length
var rightletters = [];
//created an array of wrongwords to be able to change hanging man images
// accourding to length of this array, and to be able to show a msg that says you lost when the array reaches a specific length
var wrongletters = [];
//this starts as an empty array then generates number of dashes after the computer picks a word and counts the letters
// computer puts dashes acocurding to number of letters of rand using .push method and for loop that we learned in class
var dashesadded = [];
var dashes = function() {
  for (d = 0; d < rand.length; d++) {
    dashesadded.push("_");
  }
  return dashesadded;
};
console.log(dashes());
// show dashes on screen
document.getElementById("currentword").innerHTML = dashesadded;
//computer creats array of rand letters to be able to compare it later and see results resource https://www.w3schools.com/jsref/jsref_split.asp
var splitrand = rand.split("");
console.log(splitrand);

// let computer recognize the letter the player presses

document.addEventListener("keypress", function(event) {
  var letter = event.key;
  console.log(letter);
  //condition if letter matches any letter from random selected word
  if (rand.indexOf(letter) > -1) {
    //result 1 add correct letter to array
    rightletters.push(letter);
    //result 2 check for me
    console.log(rightletters);
    //result 3 replace dash with new correct letter by
    //first :finding out the index of the letter in the splitrand array and show it on console
    console.log(splitrand.indexOf(letter));
    // second : actually replacing it by creating a new array
    var index = splitrand.indexOf(letter);
    // then this code from https://stackoverflow.com/questions/5915789/how-to-replace-an-item-in-an-array-with-javascript
    if (index !== -1) {
      dashesadded[index] = letter;
      // check for developer ! yey it worked !!
      console.log(dashesadded);
      // show it on screen
      //document.write(dashesadded);
      document.getElementById("currentword").innerHTML = dashesadded;
      bell.play();
    }
  } else {
    wrongletters.push(letter);
    console.log(wrongletters);
    var score = wrongletters.length;
    console.log(score);
  }
  //when score reaches the count 6 we should show the msg "sorry"
  //add if to display hangman images based on score count
  //there might seem that there is a problem with playing the bell and wrong sound
  //as they dont play everytime but it happens only when we press all the buttons too fast,
  //if we take a moment between presses they will all play the sounds correctly
  if (score == 1) {
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/man1.png">';
    wrong.play();
  } else if (score == 2) {
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/man2.png">';
    wrong.play();
  } else if (score == 3) {
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/man3.png">';
    wrong.play();
  } else if (score == 4) {
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/man4.png">';
    wrong.play();
  } else if (score == 5) {
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/man5.png">';
    wrong.play();
  } else if (score == 6) {
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/man6.png">';
    wrong.play();
  } else if (score == 7) {
    console.log("sorry");
    document.getElementById("manlocation").innerHTML = // added mybutton class to both the sorry and
      //wow imgs so that when the user clicks it takes him back to the main page to play again
      '<a class="mybutton" href="index.html"><img src="assets/images/sorry.png"></a>';
    sorry.play();
  } else if (dashesadded.toString() == splitrand.toString()) {
    console.log("you win");
    clap.play();
    document.getElementById("manlocation").innerHTML =
      '<a class="mybutton" href="index.html"><img src="assets/images/wow.png"></a>';
  }
  document.getElementById("wrongguesses").innerHTML = wrongletters;
  document.getElementById("guessesleft").innerHTML = 6 - wrongletters.length;
});
