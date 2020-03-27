var cx = 0;
var cy = 0;
r = 0;

var mount_Move_x = 600;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
 


}

function draw() {
 background(255, 165, 10);
    
 mountain(mount_Move_x, 600, 240);
    
    push();
    translate(600, 200);
    
  for (var i = 0; i < 200; i++) { 
      stroke(255%i, 255, 255, 150);
      noFill();
      ellipse(0, 0, i, i + 8);
  }
    pop(); 
    
  //mount_Move_x +=10;
    
  //if(mount_Move_x > innerWidth + 200) {
    //  mount_Move_x = -200;
  //}
    r+=0.0001;
    
}


  function mountain(x, y, h) {
    triangle(x, y - h, x + 30, y, x - 30, y);
    
    if( h > 20 ) {
        var tone = map(h, 40, 220, 200, 20);
        fill(tone/2);
        //stroke(200);
        
        mountain(x + 20, y, h - 25);
        fill(tone/2);
        mountain(x - 20, y, h - 25);
        fill(tone/2);
        //text(tone, 100, 100 + h);
    }

} 


