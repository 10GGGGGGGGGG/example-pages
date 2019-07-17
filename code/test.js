var pos{
x=0;
y=0;
}

function setup(){
createCanvas(windowWidth, windowHeight);
  pos.x=random(width);
  pos.y=random(width);
}
function draw(){
background(200);
ellipse(pos.x,pos.y,20,20);
move();
checkSides();
}
function move(){
  pos.x+=2;
  pos.y+=2;
}
function checkSides(){
  
}
