/*
Custody Officer

Officer Number 13523349
Job Number 390973 201
  
- Help us book the suspect. Fill in the arrest warrent for the 'inmate'
  object. Put each of the objects properties in their respective fields.

- There are many possible ways of carrying out your duties, but you should 
  complete this task using ONLY the following commands:

 * text(string, x, y) [x and y are numbers]

*/

var img;
var inmate = {
  inmate_id : "9773938029",
  surname : "GITTENS",
  first_name : "DALLIN",
  tattoos : "MOUTH",
  area_arrested : "BLOOMINGBURG",
  hair_colour : "BLACK",
  prisoner_transport : "TRISHAW",
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
    text(inmate.inmate_id, 193, 257);
    text(inmate.surname, 489, 188);
    text(inmate.first_name, 193, 188);
    text(inmate.tattoos, 193, 317);
    text(inmate.area_arrested, 490, 387);
    text(inmate.hair_colour, 493, 314);
    text(inmate.prisoner_transport, 390, 389);
}
