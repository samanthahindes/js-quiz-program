// variables
var correct = 0;

// prompt
var answer1 = prompt("What is the town that the hit series Gilmore Girls takes place?");
console.log("the answer is:" + answer1);

if ( answer1.toUpperCase() === 'STARS HOLLOW' ) {
 correct += 1;
 document.write("<p>Correct!!</p>")
}
else{
  document.write ("<p>The correct answer is Stars Hollow!")
}

var answer2= prompt("What is the name of the high school Rory attends?");

var answer3= prompt("Who owns the diner that Lorelai and Rory frequently eat at?");

var answer4= prompt("What is the name of the inn that Lorelai owns?");

var answer5= prompt("What is the name of the Rory's first boyfriend?");

// if statement


if ( answer2.toUpperCase() === 'CHILTON' ) {
 correct += 1;
  document.write("<p>Way to go!!</p>")
}
else{
  document.write ("<p>The correct answer is Chilton!</p>")
}

if ( answer3.toUpperCase() === 'LUKE' ) {
 correct += 1;
  document.write("<p>Good job!!</p>")
}
else{
  document.write ("<p>The correct answer is Stars Hollow!</p>")
}

if ( answer4.toUpperCase() === 'THE DRAGONFLY INN' ) {
 correct += 1;
  document.write("<p>Correct!!</p>")
}
else{
  document.write ("<p>The correct answer is The Dragonfly Inn!</p>")
}

if ( answer5.toUpperCase() === 'DEAN' ) {
 correct += 1;
  document.write("<p>Great Work!!</p>")
}
else{
  document.write ("<p>The correct answer is Dean!</p>")
}

console.log("correct:" + correct);

// output results
document.write("<p>You got: "+ correct + " correct</p>");

if (correct===5){
  document.write ("<p>Wow, you received a gold medal!<p>");
}

if (correct===4){
  document.write ("<p>Congrats, you received a silver medal!<p>");
}

if (correct===3){
  document.write ("<p>So close! You received a bronze medal!<p>");
}

if (correct===2){
  document.write ("<p>You can do better!");
}

if (correct===1){
  document.write ("<p>Uh oh, you need to brush up on your Gilmore Girls trivia!");
}

if (correct===0){
  document.write ("<p>Uh oh, you need to brush up on your Gilmore Girls trivia!<p>");
}
