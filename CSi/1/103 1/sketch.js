/*
Crime Scene

Officer Number 13523349
Job Number 868619 103

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
    vertex(169, 171);
    vertex(194, 170);
    vertex(193, 150);
    vertex(213, 128);
    vertex(255, 95);
    vertex(319, 88);
    vertex(370, 97);
    vertex(371, 141);
    vertex(451, 164);
    vertex(500, 183);
    vertex(592, 193);
    vertex(613, 186);
    vertex(666, 204);
    vertex(703, 266);
    vertex(596, 238);
    vertex(590, 247);
    vertex(422, 239);
    vertex(434, 281);
    vertex(540, 249);
    vertex(612, 331);
    vertex(590, 346);
    vertex(535, 333);
    vertex(390, 371);
    vertex(353, 311);
    vertex(250, 267);
    vertex(236, 333);
    vertex(148, 314);
    vertex(122, 292);
    vertex(120, 267);
    vertex(172, 260);
    vertex(200, 281);
    vertex(172, 236);
    vertex(133, 228);
    vertex(138, 176);
    vertex(169, 171);
    endShape();

}
