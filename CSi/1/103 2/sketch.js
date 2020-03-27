/*
Crime Scene

Officer Number 13523349
Job Number 424455 103

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
    vertex(215, 108);
    vertex(198, 147);
    vertex(164, 224);
    vertex(258, 284);
    vertex(296, 227);
    vertex(386, 334);
    vertex(399, 372);
    vertex(600, 414);
    vertex(725, 356);
    vertex(691, 267);
    vertex(472, 149);
    vertex(481, 105);
    vertex(334, 65);
    vertex(269, 102);
    vertex(215, 108);
    //vertex();
    //vertex();
    endShape();
    
}
