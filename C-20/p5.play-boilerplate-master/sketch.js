function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(100, 200, 50, 50);
  fixedRect.shapeColor="green"
  
  movingRect=createSprite(300,200,50,50);
  movingRect.shapeColor="green"
}

function draw() {
  background("yellow");  
  drawSprites();
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="Red"
    movingRect.shapeColor="Red"

  }
  else{
    fixedRect.shapeColor="Green"
    movingRect.shapeColor="Green"
  }
}