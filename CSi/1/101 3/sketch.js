/*
Surveillance

Officer Number 13523349
Job Number 778971 101

- We need your help to identify the suspects and objects of interest. 
  Use the rect function to draw over the following items/people.

 * Salt and pepper (use yellow fill and black outline ) 
 * Man drinking at table (use purple fill and red outline ) 
 * Four men at the far end of the bar (use pink fill and black outline ) 
 * Ash tray (use green fill and white outline ) 

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
    fill(255, 255, 0, 100);
    stroke(0);
    rect(495, 463, 30, 33);
    
    fill(153, 50, 204, 100);
    stroke(255, 0, 0);
    rect(481, 259, 110, 150)
    
    
    fill(170, 0, 110, 100);
    stroke(0);
    rect(267, 121, 280, 134);
     
    fill(0, 255, 0, 100);
    stroke(255);
    rect(656, 484, 40, 19);

}
