/*
Evidence Logging

Officer Number 13523349
Job Number 773654 202
  
- Process the evidence item photographed at the scene. Use the text
  from the image to complete the object 'evidence_item'.

- Add properties to the 'evidence_item' object for each of the 
  descriptions on the image. The name of the property should be the 
  title as it appears on the image for example "Evidence_ID".

*/

var img;

// complete the object below...
var evidence_item = {
    Evidence_ID : "78J7MPXDHS",
    Description : "Hammer",
    Found_in : "front room",
    Sequence : "893",
    Logged_by : "Johnson",
    Pending_log : "false"
}

function preload() {
    img = loadImage('img.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {
    image(img, 0, 0);
}