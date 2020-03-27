/*
Local Knowledge

Officer Number 13523349
Job Number 495254 102

- We have detected some illegal activity which we want to investigate, but
  first we need to narrow down the area of interest. Use the ellipse,
  triangle and quad functions to draw on the map.

Draw a orange triangle, connecting the following areas:
 + whitehead building
 + laben centre
 + deptford town hall

Draw a green ellipse centered at 'st james hatcham playground' with the width '108' and height '175'

Draw a gray quad with points connecting the following areas:
 + central stores
 + water and wine
 + dean house
 + santander

- You should plot your coordinates at the center of the area specified

- You should follow the instructions above regarding the colour of the
  shapes

- There are many possible ways of carrying out your duties, but you
  should complete this task using ONLY the following commands:

 * ellipse(use numbers only)
 * triangle(use numbers only)
 * quad(use numbers only)
 * fill(use RGB numbers only, you may want to use semi-transaprent fill)

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

	// write the code to draw the shapes below


}
