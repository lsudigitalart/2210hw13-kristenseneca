var time1 = 1000;
var time2 = 10000;
var time3 = 8000;
var time4 = 15000;
var time5 = 16000;

var angle = 50;
var offset = 50;
var scalar = 1;
var speed = .005;
var speed2 = 2;
var r = 0;

var startX = 800;
var stopX = 800;
var startY = 900;
var stopY = 450;

var startX2 = -20;
var stopX2 = 1100;
var startY2 = 450;
var stopY2 = -400;

var startX3 = 900;
var stopX3 = 900;
var startY3 = 1300;
var stopY3 = 700;

var x = startX;
var y = startY;

var xTWO = startX2;
var yTWO = startY2;

var xTHREE = startX3;
var yTHREE = startY3;


var step = 0.005;
var pct = 0.0;



var space;
var earth;
var thesun;
var star;
var alien;
var spacerock;
var rocket;
var salute;
//var music;

function preload(){

   //music = loadSound("acrosstheuniverse.mp3");
   space = loadImage("background.jpg");
   earth = loadImage("earth.png");
   thesun = loadImage("sun.png");
   star = loadImage("star.png");
   alien = loadImage("alien.png")
   spacerock = loadImage("rock.png")
   rocket = loadImage("rocketship.png")
   salute = loadImage("salute.png")

}

function setup() {
  createCanvas(1000,700);
  imageMode(CENTER);
  image(space, width/2,height/2);


}

function draw(){
  image(space, width/2,height/2);       //BACKGROUND IMAGE

  if (pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startX) * pct);
    pct += step;
  }
  image(alien,x,y,330,350);            //ALIEN


  if (pct < 5.0) {
    xTWO = startX2 + ((stopX2-startX2) * pct);
    yTWO = startY2 + ((stopY2-startX2) * pct);
    pct += step;
    var speed2 = 2;
    }
    image(rocket,xTWO,yTWO,300,300);            //ROCKETSHIP



var currentTime = millis();
if (currentTime > time3) {

xTHREE = startX3 + ((stopX3-startX3) * pct);
yTHREE = startY3 + ((stopY3-startX3) * pct);
pct += step;
}
image(salute,xTHREE,yTHREE,150,200);            //VULCAN



if (currentTime > time3) {
fill(random(0,255), random(0,255), 0);
textSize(50);
textFont("House Slant");
text("P E A C E  O U T", 600, 650);
}

if (currentTime > time5) {
  fill(0);
  ellipse(700,700,700,700)

}




    rotate(r);
    r = r - .001;
    image(spacerock,500,500,100,100);           //SPACEROCK SPACEROCK SPACEROCK

    rotate(r);
    r = r - .001;
    image(spacerock,700,400,200,200);           //SPACEROCK SPACEROCK SPACEROCK

    rotate(r);
    r = r - .001;
    image(spacerock,200,200,200,200);           //SPACEROCK SPACEROCK SPACEROCK




  rotate(r);
  r = r + .005;
  image(earth, 500, 500, 300,300);

  rotate(r);
  r = r + .001;
    image(star, 700, 550, 200, 200);

    rotate(r);
    r = r + .001;
      image(star, 400, 600, 100, 100);

      rotate(r);
      r = r + .001;
        image(star, 200, 200, 100, 100);       //ROTATIONS









var currentTime = millis();             //TIME
if (currentTime > time1) {


  rotate(r);
  r = r + .001;
  image(thesun, 20, 20, 1000,1000);
}



if (currentTime > time2) {

  rotate(r);
  r = r + .01;
  image(thesun, 20, 20, 1000,1000);


  x = x + 2;
   image(star, x, y,500,500);




}

if (currentTime > time4) {
  rotate(r);
  r = r + .01;
  image(thesun, 20, 20, 4000,4000);
}






}
