/*
Advanced Patrol

Officer Number 13523349
Job Number 559643 205

- I'm afraid you're on patrol duty once again ! Use the map()
  function to make the police officer patrol diagonally from
  the left building to the right.

- Use only mouseX as an input for your map funtion.

- When the mouse is moved from left to right of the image the police
  officer should only patrol from the first building to the second
  building, not any further!

- Hint: You may also want to use img.width as one parameter in map().

- The police officer should only move diagonally, not horizontally or
  vertically.

- There are many possible ways of carrying out your duties, but you
  should complete this task using ONLY the following commands:

 * map()

*/

var img;
var policeofficer = setupPoliceofficer(0);

var policeofficerX = 0;
var policeofficerY = 0;

function preload() {
  img = loadImage('img.jpg');
  policeofficer.avatar = loadImage('policeofficer.png');
}

function setup() {

  createCanvas(img.width, img.height);

}

function draw() {
  image(img, 0, 0);

  // alter the variable policeofficerX and policeofficerY to use map
  policeofficerX = map(mouseX, 0, img.width, 299, 641);
  policeofficerY = map(mouseX, 0, 100, 202, 413);


  ////////// DO NOT CHANGE ANYTHING BELOW /////////////
  animatePoliceofficer(policeofficerX, policeofficerY);
  ////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
