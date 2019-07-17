var x=0;
var y=0;
var vx=3;
var vy=3;
var ancho=340;
var alto=173;
var img;

function preload() {
  img = loadImage('code/resources/DVD.png');
}
function setup(){
createCanvas(windowWidth, windowHeight);
  x=random(width-ancho);
  y=random(height-alto);
}
function draw(){
background(200);
image(img,x,y,ancho,alto);
move();
checkSides();
}
function move(){
  x+=vx;
  y+=vy;
}
function checkSides(){
  if(x>=width-ancho||x<=0){
  tint(random(255),random(255),random(255));
  vx=-vx;
  }
  if(y>=height-alto||y<=0){
  tint(random(255),random(255),random(255));
  vy=-vy;
  }
}
