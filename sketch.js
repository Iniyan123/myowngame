var monster1,monster2,monster3,monster4,monster5;
var monster1Img,monster2Img,monster3Img,monsterImg,monster5Img;
var cloud,cloudImg;
var tree,treeImg;
var Sam, samImg, samA;
var ground,groundImg;
function preload(){
monster1Img = loadImage("Monster 1.png");
monster2Img = loadImage("Monster 2.png");
monster3Img = loadImage("Monster 3.png");
monster4Img = loadImage("Monster 4.png");
monster5Img = loadImage("Monster 5.png");
cloudImg = loadImage("Cloud.png");
samA = loadImage("Character running.gif");
samImg = loadImage("Sam standing.png");
groundImg = loadImage("ground.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  Sam = createSprite(70, 300, 20, 20);
  Sam.addImage(samImg);
  ground = createSprite(500, height, windowWidth, 10)
  ground.addImage(groundImg);
  ground.scale = 2;
  ground.depth = Sam.depth;
  Sam.depth+= 1;
}

function draw() {
  background("lightblue"); 
  if(keyDown(RIGHT_ARROW)){
    ground.velocityX = -2;
    Sam.addImage("running",samA);
  } 
  drawSprites();
}