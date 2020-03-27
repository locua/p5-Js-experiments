/*
Custody Officer

Officer Number 13523349
Job Number 828013 201
  
- Help us book the suspect. Fill in the arrest warrent for the 'inmate'
  object. Put each of the objects properties in their respective fields.

- There are many possible ways of carrying out your duties, but you should 
  complete this task using ONLY the following commands:

 * text(string, x, y) [x and y are numbers]

*/

var img;
var inmate = {
  inmate_id : "9151375835",
  surname : "GOFF",
  first_name : "DEON",
  tattoos : "BODY",
  area_arrested : "STARAYA RUSSA",
  hair_colour : "PINK",
  prisoner_transport : "BICYCLE",
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
    text(inmate.inmate_id, 215, 251);
    text(inmate.surname, 512, 187);
    text(inmate.first_name, 215, 188);
    text(inmate.tattoos, 215, 316);
    text(inmate.area_arrested, 512, 386);
    text(inmate.hair_colour, 512, 317);
    text(inmate.prisoner_transport, 215, 380);
}
