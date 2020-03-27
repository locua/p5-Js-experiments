var a;
var angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);



}

function draw() {
background(255, 0, 0);
//ellipse(100, 100, 50, 50);
//rotateX(angle);
a = 100;
rotateX(angle);
rotateZ(angle);
torus(a);
angle+=0.01;
}
