/*
Surveillance

Officer Number 13523349
Job Number 231475 101

- We need your help to identify the suspects and objects of interest. 
  Use the rect function to draw over the following items/people.

 * Man admiring dog (use purple fill and blue outline ) 
 * Army man	 (use green fill and black outline ) 
 * Dog (use cyan fill and gray outline ) 
 * Clock (use yellow fill and white outline ) 

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
    
    
    //* Man admiring dog (use purple fill and blue outline )
    fill(128, 0, 128, 100);
    stroke(0, 0, 255);
    rect(281, 130, 134, 605);
    // * Army man	 (use green fill and black outline ) 
    fill(0, 255, 0, 100);
    stroke(0);
    rect(830, 269, 56, 347);
    // * Dog (use cyan fill and gray outline ) 
    fill(0, 255, 255, 140);
    stroke(100);
    rect(273, 655, 170, 261);
    // * Clock (use yellow fill and white outline ) 
    fill(255, 255, 0, 100);
    stroke(255)
    rect(506, 103, 76, 74);

}
