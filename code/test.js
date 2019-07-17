var x=0;
var y=0;
var vx=4;
var vy=4;
var tam=50;

function setup(){
createCanvas(windowWidth, windowHeight);
  /*x=random(width);
  y=random(width);*/
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
  if(x>=width||x<=0){
  vx=-vx;
  }
  if(y>=width||y<=0){
  vy=-vy;
  }
}
