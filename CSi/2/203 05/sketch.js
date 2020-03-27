/*
Night Raid

Officer Number 13523349
Job Number 644100 203

- Help find the criminal hiding in the buildings, increment the
  variables x and y to animate the searchlight from:

	
* window 6, 3rd floor
       to 
* doorway 2, ground floor


- The windows and doorways are numbered from left to right.

- The floors are numbered ground, first, second and third.

- Edit startx and starty to alter the starting position of the searchlight.

- Edit endx and endy to stop the searchlight when it reaches the target.

- Make the searchlight move perfectly towards the target by adjusting the increments of x and y.
  If you get everything correct then it will stop over the target.

- There are many possible ways of carrying out your duties, but
	you should complete this task using ONLY the following commands:

 * "+=" or "+"
 * "-=" or "-"

*/

// edit the variables below to change where the spotlight starts and finishes
var startx = 734;
var starty = 93;
var endx = 315;
var endy = 595;

// other variables, you don't need to change these
var img, spotlight_image;
var x, y;

function preload()
{
	img = loadImage('img.jpg');
	spotlight_image = loadImage('spotlight.png');
}

function setup()
{
	createCanvas(img.width, img.height);

	//Initialize x and y with the start values
	x = startx;
	y = starty;
}

function draw()
{
	image(img, 0, 0);

	// alter the variables x and y below to animate the spotlight
    x-=0.7;
    y+=1;


	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	//stop the spotlight if it's near enough to endx and endy
	if (abs(endx - x) < 30 && abs(endy - y) < 30)
	{
		x = endx;
		y = endy;
	}

	//stop the spotlight if it goes off of the screen
	x = min(x,1000);
	y =	min(y,1000);
	x = max(x,0);
	y = max(y,0);

	image(spotlight_image, x-1000, y-1000);
	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
