/*

The Game Project

Week 2 - part a

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used lots of shape functions to create a detailed
game character

** Only submit your sketch.js **

*/

function setup()
{
    createCanvas(400, 600);
}

function draw()
{
    background(255);

    //Standing, facing frontwards
    stroke(100);
    noFill();
    rect(20, 60, 50, 80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);

    //Add your code here ...


    //Jumping facing forwards
    stroke(100);
    noFill();
    rect(220, 60, 50, 80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 220, 160);

    //Add your code here ...


    //Walking, turned left
    stroke(100);
    noFill();
    rect(20, 260, 50, 80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

    //Add your code here ...


    //Walking, turned right
    stroke(100);
    noFill();
    rect(220, 260, 50, 80);
    noStroke();
    fill(0);
    text("4. Walking right", 220, 360);

    //Add your code here ...


    //Jumping right
    stroke(100);
    noFill();
    rect(20, 460, 50, 80);
    noStroke();
    fill(0);
    text("5. Jumping to the right", 20, 560);

    //Add your code here ...


    //Jumping to the left
    stroke(100);
    noFill();
    rect(220, 460, 50, 80);
    noStroke();
    fill(0);
    text("6. Jumping to the left", 220, 560);

    //Add your code here ...

}
