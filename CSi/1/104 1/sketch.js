/*
Deduction

Officer Number 13523349
Job Number 343228 104

An informant has left a hidden clue in this letter.
Find it by using the line function to plot lines between the words below.
This will reveal a unique pattern for our detectives to decipher later.

Line: 1, Word: use
Line: 2, Word: domestic
Line: 3, Word: privileged
Line: 4, Word: uncommonly
Line: 6, Word: maintenance
Line: 7, Word: foreman
Line: 10, Word: allen
Line: 12, Word: man


You should draw a line connecting the center of each word in the list above to
the center of the next word in the list.

There are many possible ways of carrying out your duties, but you should
complete this task using ONLY the following commands:

 * line()

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(8);
	stroke(255,0,0);
}

function draw()
{
	image(img,0,0);

	// write the code to draw the lines below

    line(596, 133, 615, 173);
    line(615, 173, 627, 212);
    line(627, 212, 625, 252);
    line(625, 252, 288, 331);
    line(288, 331, 319, 369);
    line(319, 369, 458, 488);
    line(458, 488, 513, 571);
}
