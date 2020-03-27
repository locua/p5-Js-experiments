/*

The Game Project

Week 1 - part b

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the comments below. The items should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.


*/




var r = 0;


var floor_PosY = 525;

var angelX = 700;
var angelY = 500;


var rock, angel;
var mount, hous, tree, cloud;
var tree0, tree1;

/*
function preload() {
    
}
*/

function setup() 
{
    createCanvas(innerWidth,innerHeight);
    colorMode(HSB);
    imageMode(CENTER);
    rock = loadImage("rock.png");
    angel = loadImage("kelngle.png");
    //frameRate(15);
    
    
    //mountain variables setup
    
     mount = {
        x : 600,
        y : floor_PosY,
        h : 240,                 // Iterations of repeated triangles, keep in range 10 < iterations < 300 . //
        //scl :  1.5             // Horizontal stretch/ scale - height of the mountains
        
     }
    
    //house variables setup
     
     hous = {
         x : random(100, 1000),
         y : floor_PosY - 50,
     }
     
     tree0 = {
         x : 200,
         y : floor_PosY,
         s : 1.5
     }
     
     tree1 = {
         x : 800,
         y : floor_PosY,
         s : 1.2
     }
     
    
}

function draw() 
{    
    background(344, 57, 91); //fill the sky pink
    noStroke();
    
    //1. a cloud in the sky 
    //... add your code here
    cloud(200, 170, 263);

 
    

    

    
    //2. a mountain in the distance   
    
    mountain(mount.x, mount.y, mount.h);

    //mount.h = map(mouseX, 0, innerWidth, 20, 200);
    
    fill(40, 95, 51); 
    rect(0, innerHeight  * 3/4,innerWidth, innerHeight/4); //draw some brown ground
    
    
    

    
    
    //3. a tree
    tree(tree0.x, tree0.y, tree0.s);
    tree(tree1.x, tree1.y, tree1.s);
    
    // ???
    //image(rock, 1000, height*0.3);
    //fill(0);
    //ellipse(1000, height*0.8, 80, 10);
    


    
    //4. a house
    //... add your code here
    
    house(hous.x, hous.y);
    
    

    //5. another foreground item of your choice
    image(angel, angelX, angelY, 110, 150);
    //fill(0, 150);
    //ellipse(300, height*0.8, 100, 10);

  //mount.x +=1;
  //mount.h = map(sin(mount.x/5), -1, 1, 200, 240);
    
}






function mountain(x, y, h) {
    
     //var s = map(mouseY, innerHeight, 0, 0.2, 4);
    var s = 1;
    
    triangle(x, y - s * h, x + 30 * s, y, x - 30 * s, y);
    
    if( h > 20 ) {
        var tone = map(h, 20, 240, 200, 20);
        
        fill(tone/2.2);
        mountain(x + 20 * s, y, h - 25);
        fill(tone/2.2);
        mountain(x - 20 * s, y, h - 25);
        fill(tone/2.2)
        //text(tone/4, 70, 100 + h);
    }

} 







function cloud(x, y, size) {
    push();
    translate(x, y);
   
    for (var i = 0; i < size; i++) {
        
      stroke(255%i, 255, 255, 150);
      noFill();
      ellipse(0, 0, 1.3*i, i + 8);
    }
    pop(); 
    
}

function house(x, y) {
    fill(255);
    rect(x, y, 100, 50);
    fill(10);
    triangle(x, y, x + 100, y, x + 50, y-70);
    rect(x + 50, y + 30, 10, 20);
    
}


function tree(x, y, s) {
    var scl = s;
    fill(14, 100, 36);
    triangle(x, y, x + 20 * scl, y, x + 10*scl, y - 100 * scl);
    fill(139,69,19);
    rect(x - 20*scl, y - 140*scl, 60*scl, 50*scl);
}



function mousePressed() {
    angelX = mouseX;
    angelY = mouseY;
}







