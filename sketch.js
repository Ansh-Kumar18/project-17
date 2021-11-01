var tower,towerImage;
var ghost,ghostImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;

function preload(){
  towerImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-standing.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY = 1
  
  ghost = createSprite(200,200);
  ghost.addImage("ghost",ghostImage);
  ghost.scale = 0.4;
  
  doorGroup = new Group();
  climberGroup = new Group();
}

function draw(){
  background("black");
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3;
  }
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x - 3;
  }
  
  if(keyDown("space")){
    ghost.velocityY = - 10;
  }
  ghost.velocityY = ghost.velocityY + 0.8;
  
  if(tower.y > 400){
    tower.y = 300;
  }
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  spawnDoors();
   
  drawSprites();
}

function spawnDoors(){
  if(frameCount % 240 === 0){
    door = createSprite(200,-50);
    door.addImage("door",doorImage);
    door.x = Math.round(random(120,400))
    door.velocityY = 1;
    door.lifetime = 800;
    doorGroup.add(door)
    
    climber = createSprite(200,10);
    climber.addImage("climber",climberImage);
    climber.x = door.x;
    climber.velocityY = 1;
    climber.lifetime = 800;
    climberGroup.add(climber)
    
    ghost.depth = door.depth
    ghost.depth += 1 
 }
  
}
