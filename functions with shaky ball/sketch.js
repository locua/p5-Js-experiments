//var s;

var bubbles = [];



function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  for (var i = 0; i < 1000; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(20);

  for (var i = 0; i < bubbles.length; i++) {

    bubbles[i].display();
    bubbles[i].shake();
    bubbles[i].sizeflux();
  }

}




function Bubble() {
    
    this.x = random(0, width),
    this.y = random(0, height),
    this.sze = 50,
    this.p = 0,
    
    this.display =function() {
      stroke(200);
      strokeWeight(4);
      fill(200, 100, 140);
      ellipse(this.x, this.y, this.sze, this.sze);

    },
    
    this.shake = function() {
      this.x += random(-2, 2);
      this.y += random(-2, 2);
    },
    
    this.sizeflux = function() {

      this.sze = map(noise(this.p), 0, 1, 20, 100);
      this.p = this.p + 0.01;

    }

}
