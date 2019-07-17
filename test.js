var pos{
  x=0;
  y=0;
}
function setup(){
createCanvas(windowWidth, windowHeight);
background(200);
/*pos.x=random(width);
pos.y=random(height); */
}
function draw(){
ellipse(pos.x,pos.y,20,20);
move();
}
function move(){
  pos.x+=5;
  pos.y+=5;
}
function checkSides(){
}
