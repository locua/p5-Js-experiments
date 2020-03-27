/*
Surveillance

Officer Number 13523349
Job Number 499945 101

- We need your help to identify the suspects and objects of interest. 
  Use the rect function to draw over the following items/people.

 * Philco (use orange fill and green outline ) 
 * Prior (use yellow fill and white outline ) 
 * News (use green fill and white outline ) 
 * Alert (use yellow fill and red outline ) 

- The rectangles should cover the target as accurately as possible without 
  including anything else.

- There are many possible ways of carrying out your duties, but you should 
  complete this task using ONLY the following commands:

 * stroke (use RGB numbers only)
 * fill (use RGB numbers only)
 * rect (use numbers only - avoid using 'width', 'height', 'img.width', 
   'img.height')

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
    
	// write code to draw the rectangles below...
    fill(255, 165, 0, 100);
    stroke(0, 255, 0);
    rect(188, 330, 50, 33);
    
    fill(255, 255, 0, 100);
    stroke(255);
    rect(142, 454, 55, 32);
    
    fill(0, 255, 0, 100);
    stroke(255);
    rect(500, 178, 110, 48);
    
    
    fill(255, 255, 0, 100);
    stroke(255, 0, 0);
    rect(644, 0, 100, 46);

}
