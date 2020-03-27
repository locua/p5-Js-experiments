var charX = innerWidth/2;
var charY = 460;
var charVel = 0;
var charAcc = 0;
var charDir = -1;
var floor_PosY = 500;
var resist = 0.5;


var rat;

var n = 0;

function preload() {
    rat = loadImage("bit8_rat.png");
    
}

function setup() {
    imageMode(CENTER);
    colorMode(HSB);
    
    createCanvas(innerWidth, innerHeight);

}

function draw() {
    clear();
    
    fill(147, 88, 199);
    rect(0, 500, innerWidth, 400);
    image(rat, charX, charY, 150, 100);
    
    

    ratWalk();
   // console.log("x: ", charX, "Vel: ", charVel, "Acc: ", charAcc);
    
    charX += charVel;
    charVel += charAcc;
}


function ratWalk() {
    
    if( keyIsDown(LEFT_ARROW)) {
        
        //charVel * charDir;
        charAcc = -0.5;
        
        
    } else if(charVel <= 0 ) {
        charAcc = 0;
        charVel += resist; 
        
    }
    
    if( keyIsDown(RIGHT_ARROW)) {
        
        //charVel * charDir;
        charAcc = 0.5;
        
    } else if(charVel >= 0 ) {
        charAcc = 0;
        charVel -= resist;
                
        //console.log(charHorSped);
    }
}



