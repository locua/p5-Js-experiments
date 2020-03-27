/*
Custody Officer

Officer Number 13523349
Job Number 495144 201
  
- Help us book the suspect. Fill in the arrest warrent for the 'inmate'
  object. Put each of the objects properties in their respective fields.

- There are many possible ways of carrying out your duties, but you should 
  complete this task using ONLY the following commands:

 * text(string, x, y) [x and y are numbers]

*/

var img;
var inmate = {
  inmate_id : "6833044992",
  surname : "WOODHAM",
  first_name : "JETT",
  tattoos : "BRAIN",
  area_arrested : "MILLBRAE",
  hair_colour : "PURPLE",
  prisoner_transport : "AIRCRAFT"
};

function preload() {
    img = loadImage('img.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {
    image(img, 0, 0);
    
    // add the code to write on the form below
    text(inmate.inmate_id, 205, 290);
    text(inmate.surname, 505, 233);
    text(inmate.first_name, 204, 232);
    text(inmate.tattoos, 212, 361);
    text(inmate.area_arrested, 503, 434);
    text(inmate.hair_colour, 501, 361);
    text(inmate.prisoner_transport, 204, 429);
}
