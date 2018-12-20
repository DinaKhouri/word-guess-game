console.log("hello world");

// I avoided picking words with the same letter twice xD
var words = ["plan", "dog", "study", "travel", "steak"];
//added music effects
var bell = document.getElementById("bell");
var wrong = document.getElementById("wrong");
var lost = document.getElementById("lost");

//computer picks randomly from array of words
var rand = words[Math.floor(Math.random() * words.length)];
console.log(rand);
//created this array to be able to compare the index of right letter and to add you win messege when the array reaches a specific length
var rightletters = [];
//created and array of wrongwords to be able to change hanging man images accourding to length of this array, and to be able to show a msg that says you lost when the array reaches a specific length
var wrongletters = [];
//this starts as an empty array then generates number of dashes after the computer picks a word and counts the letters
//will create dashesadded array from this one to be able to show the correct guesses and replace them with dashes
// var dashes=[];

// computer counts letters of picked word resource for code https://stackoverflow.com/questions/39451725/how-to-count-letters-inside-a-string
//function letterCounter(str) {
//  var letters = 0;
//var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//for (var i=0; i<str.length;i++) {
//  if (str[i] === alphabet.split("")) {
//     letters = letters + str[i];
// }
//}
//}
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
  //when score reaches the count 8 we should show the msg "sorry"
  //add if to display hangman images based on score count
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
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/sorry.png">';
    wrong.lost();
  } else if (dashesadded.toString() == splitrand.toString()) {
    console.log("you win");
    document.getElementById("manlocation").innerHTML =
      '<img src="assets/images/wow.png">';
  }
  document.getElementById("wrongguesses").innerHTML = wrongletters;
  document.getElementById("guessesleft").innerHTML = 6 - score;
});
