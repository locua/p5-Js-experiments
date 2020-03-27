/*
Crime Scene

Officer Number 13523349
Job Number 869284 103

- Record the crime scene for forensic analysis.
  Use beginShape, endShape and the vertex functions
  to draw tightly around the body.

- The shape should be close the edge of the body but not touching.
  You'll need to draw a lot of vertices (eg. 15) - we want it to be accurate !

- There are many possible ways of carrying out your duties, but you
  should complete this task using ONLY the following commands:

 * beginShape()
 * endShape(CLOSE) [CLOSE joins the first and last points]
 * vertex(x, y) [x and y are numbers]

*/

var img;

function preload()
{
    img = loadImage('img.jpg');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255);
    strokeWeight(3);
    noFill();

    // write the code to draw around the body below
    beginShape();
    vertex(358, 78);
    vertex(453, 115);
    vertex(487, 198);
    vertex(655, 287);
    vertex(716, 365);
    vertex(585, 441);
    vertex(389, 381);
    vertex(291, 250);
    vertex(244, 290);
    vertex(143, 220);
    vertex(221, 121);
    vertex(303, 95);
    vertex(358, 78);

    
    endShape();
}
