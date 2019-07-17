var x=0;
var y=0;

function setup(){
createCanvas(windowWidth, windowHeight);
background(200);
/*x=random(width);
y=random(height); */
}
function draw(){
ellipse(x,y,20,20);
move();
}
function move(){
  x+=5;
  y+=5;
}
function checkSides(){
}
