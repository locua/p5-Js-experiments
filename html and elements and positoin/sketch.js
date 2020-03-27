var canvas;
var h1;
var h1_2;
var x = 300;
var y = 200;


function setup() {
  canvas = createCanvas(200, 200);
  translate(100, 100);
  canvas.position(400, 300);

  createP("Good afternoon!");
  createP("click for a banana");
  
  h1_2 = createElement("h1", "Waiting for click");

  h1 = createElement("h1", "I <3 YOU");
//  h1.position(200, 200);
}

function draw() {
  background(0);
  fill(200, 100, 20);
  rectMode(CENTER);
  rect(100, 100, 100, 100);
  
  h1.position(x, y);
  x = x + random(-2, 2);
  y = y + random(-2, 2);
}

function mousePressed() {
  createP("banana")
  h1_2.html("666 hahahahahahahahahahaha 666")
  
}