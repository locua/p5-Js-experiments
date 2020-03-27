/*
On Patrol

Officer Number 13523349
Job Number 550975 204

- Its time to do your patrol duty, but don't get lost ! Use the map() function
  and mouseX to make the police officer patrol between the two buildings from left
	to right.

- Change the assignment of policemanX in draw() to use the
  map() function

- When the mouse is moved from left to right of the image
  the police officer should patrol from the first building
  to the second and no further.

- Hint: Use img.width as one of the parameters in map()

- There are many possible ways of carrying out your duties,
  but you should complete this task using ONLY the following
  commands:

 * map()
 * mouseX

*/

var img;
var policeman = setupPoliceman(313);

function preload() {
  img = loadImage('img.jpg');
  policeman.avatar = loadImage('policeman.png');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);

  // alter the variable policemanX to use map
  var policemanX = map(mouseX, 0, img.width, 233, 595);


  ////////// DO NOT CHANGE ANYTHING BELOW /////////////
  policemanAnimate(policemanX);
  ////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
