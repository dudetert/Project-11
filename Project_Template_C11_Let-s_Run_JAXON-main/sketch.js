var jaxon, path;
var jaxon_running, pathImg;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner1.png","Runner1.png","Runner2.png","Runner2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,20,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  jaxon = createSprite(120,300,120,120)
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.1
}

function draw() {
  background(0);

  
  if(mouseX > 110 && mouseX < 300){
    jaxon.x = mouseX;
  }

  if(path.y > path.height -500){
    path.y -= 152.4;
  }

  drawSprites();
}
