var x=0;
var y=0;
var vx=4;
var vy=4;
var tam=50;

function setup(){
createCanvas(windowWidth, windowHeight);
  x=random(width);
  y=random(height);
}
function draw(){
background(200);
ellipse(x,y,tam,tam);
move();
checkSides();
}
function move(){
  x+=vx;
  y+=vy;
}
function checkSides(){
  if(x>=width-tam/2||x<=tam/2){
  vx=-vx;
  }
  if(y>=height-tam/2||y<=tam/2){
  vy=-vy;
  }
}
