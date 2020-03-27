/*
Custody Officer

Officer Number 13523349
Job Number 545476 201
  
- Help us book the suspect. Fill in the arrest warrent for the 'inmate'
  object. Put each of the objects properties in their respective fields.

- There are many possible ways of carrying out your duties, but you should 
  complete this task using ONLY the following commands:

 * text(string, x, y) [x and y are numbers]

*/

var img;
var inmate = {
  inmate_id : "2000723706",
  surname : "BRUMFIELD",
  first_name : "BRIA",
  tattoos : "NAIL",
  area_arrested : "TURTLEPOINT",
  hair_colour : "BLUE",
  prisoner_transport : "BUS",
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
    text(inmate.inmate_id, 183, 278);
    text(inmate.surname, 479, 208);
    text(inmate.first_name, 181, 211);
    text(inmate.tattoos, 181, 344);
    text(inmate.area_arrested, 478, 411);
    text(inmate.hair_colour, 475, 340);
    text(inmate.prisoner_transport, 204, 414);
}
