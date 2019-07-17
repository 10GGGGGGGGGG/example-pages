var ball{
x=0;
y=0;
vx=4;
vy=4;
tam=50;
}

function setup(){
createCanvas(windowWidth, windowHeight);
  ball.x=random(width);
  ball.y=random(width);
}
function draw(){
background(200);
ellipse(ball.x,ball.y,ball.tam,ball.tam);
move();
checkSides();
}
function move(){
  ball.x+=ball.vx;
  ball.y+=ball.vy;
}
function checkSides(){
  if(ball.x>=width||ball.x<=0){
  ball.vx=-ball.vx;
  }
  if(ball.y>=width||ball.y<=0){
  ball.vy=-ball.vy;
  }
}
