var x=0;
var y=0;
var vx=3;
var vy=3;
var ancho=340;
var alto=173;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var currentImg;
var images=[];

function preload() {
  img1 = loadImage('code/resources/green.png');
  img2 = loadImage('code/resources/purple.png');
  img3 = loadImage('code/resources/red.png');
  img4 = loadImage('code/resources/blue.png');
  img5 = loadImage('code/resources/yellow.png');
  img6 = loadImage('code/resources/pink.png');
  img7 = loadImage('code/resources/orange.png');
  img8 = loadImage('code/resources/white.png');
  images.push(img1);
  images.push(img2);
  images.push(img3);
  images.push(img4);
  images.push(img5);
  images.push(img6);
  images.push(img7);
  images.push(img8);
}
function setup(){
createCanvas(windowWidth, windowHeight);
x=random(width-ancho);
y=random(height-alto);
currentImg=random(images);
}
function draw(){
background(200);
image(currentImg,x,y,ancho,alto);
move();
checkSides();
}
function move(){
  x+=vx;
  y+=vy;
}
function checkSides(){
  if(x>=width-ancho||x<=0){
  currentImg=random(images);
  vx=-vx;
  }
  if(y>=height-alto||y<=0){
  currentImg=random(images);
  vy=-vy;
  }
}
