/*
Hot Pursuit

Officer Number 13523349
Job Number 711279 301

- You've just spotted a key suspect down a narrow alleyway. Don't let them escape !

- Guide the officer to the other end of the alleyway by changing the values of officerDirectionX and officerDirectionY in draw.

- FORWARDS: officerDirectionX = 0; officerDirectionY = -1;
- RIGHT: officerDirectionX = 1; officerDirectionY = 0;
- LEFT: officerDirectionX = -1; officerDirectionY = 0;

- No other values or combinations will move the officer

- Use conditional statements to change the officer's direction where the alleyway turns.

- I've already done the first corner to get you started.

- There are many possible ways of carrying out your duties, but
	you should complete this task using the following commands:

	 if
	 else
	 > operator
	 < operator


*/


var img;
var officerImg;
var officerPositionX;
var officerPositionY;
var officerDirectionX;
var officerDirectionY;

function preload()
{
	img = loadImage("alley.png");
	officerImg = loadImage("policeman.png");
}

function setup()
{
	createCanvas(img.width,img.height);
	img.loadPixels();

	officerPositionX = img.width/2;
	officerPositionY = img.height - 14;
	officerDirectionX = 0;
	officerDirectionY = -1;

}

function draw()
{
	background(0);
	image(img,0,0);

	//Put your conditional statements here.
	//I've done the first bit for you.

	if(officerPositionY < 657)
	{
		if(officerPositionX > 205)
		{
			officerDirectionY = 0;
			officerDirectionX = -1;
		}
		else
		{
			officerDirectionX = 0; 
            officerDirectionY = -1;
		}
	} 
    if(officerPositionY < 547)
    {
        if(officerPositionX < 338)
        {
            officerDirectionX = 1; 
            officerDirectionY = 0;
        }
        else
        {
            officerDirectionX = 0; 
            officerDirectionY = -1;
        }
    }
    if(officerPositionY < 487)
    {
 
            officerDirectionX = 1; 
            officerDirectionY = 0;
    
    }
    
    if(officerPositionX > 412)
    {
            officerDirectionX = 0; 
            officerDirectionY = -1;
    }
    if(officerPositionY < 364) 
    { 
        if(officerPositionX < 574)
    {
            officerDirectionX = 1; 
            officerDirectionY = 0;
    } else
    {
            officerDirectionX = 0; 
            officerDirectionY = -1;    
    }
    }
    if(officerPositionY < 284 )
    {
        if(officerPositionX < 726)
        {
            officerDirectionX = 1; 
            officerDirectionY = 0;
        }
        else
    {
            officerDirectionX = 0; 
            officerDirectionY = -1;
    }
    } 
    if(officerPositionY < 224 )
    {
        if(officerPositionX > 571)
        {
    
            officerDirectionX = -1; 
            officerDirectionY = 0;
        } else
        {
            officerDirectionX = 0; 
            officerDirectionY = -1; 
        }
        
    }
    if(officerPositionY < 103)
    {
        if(officerPositionX < 703)
        {
            officerDirectionX = 1; 
            officerDirectionY = 0;
        }
        else 
        {
            officerDirectionX = 0; 
            officerDirectionY = -1; 
        }
    }

    
    
    

	///////////// DO NOT CHANGE ANYTHING BELOW /////////////

	//check it officer is facing a wall
	if(!detectWalls())
	{
		if(officerPositionY > 14)
		{
			//only accept directions of horizontal or vertical
			if(officerDirectionX == 0 || officerDirectionY == 0)
			{
				if(abs(officerDirectionX) == 1 || abs(officerDirectionY) == 1)
				{
					//increment the position of the officer
					officerPositionX += officerDirectionX;
					officerPositionY += officerDirectionY;
				}
			}
		}
	}

	//draw the officer
	push();
	imageMode(CENTER); // it's much easier with we use centered images

	translate(officerPositionX, officerPositionY);
	//make the officer look where they're going
	if(officerDirectionX == -1)
	{
			rotate(-PI/2);
	}
	else if(officerDirectionX == 1)
	{
			rotate(PI/2);
	}

	//render the image
	image(officerImg, 0,0, 28,28);
	pop();
}

function detectWalls()
{
	//this function returns true when there is a wall infront of the officer
	var isWall = false;
	for(var i = 0; i < 2; i++)
	{
		if(officerDirectionY == 0)
		{
				var offsetX = officerDirectionX * 14;
				var offsetY = 9 * (i-1)
		}
		else if(officerDirectionX == 0)
		{
				var offsetX = 9 * (i-1)
				var offsetY = officerDirectionY * 14;
		}

		var c = img.get(
				officerPositionX + offsetX,
				officerPositionY + offsetY
		);

		if(c[2] < 1)
		{
				isWall = true;
				break;
		}
	}

	return isWall;
}
