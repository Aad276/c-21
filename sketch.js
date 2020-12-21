
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1

ground= createSprite(200,350,800,10)
ground.velocityX=-4
ground.x= ground.width/2
console.log(ground.x)

  
score = 0;
survivalTime= 0
}


function draw() {
background(185)
text("Score: "+ score, 500,50);
survivalTime=Math.ceil(frameCount/frameRate()) 
text("survivalTime: "+ survivalTime, 100,50)


if (ground.x <0){
ground.x= ground.width/2
}
  
  monkey.collide(ground)
           
  if(keyDown("space")&& monkey.y >= 205) {
        monkey.velocityY = -14;
    }
 

  
 monkey.velocityY = monkey.velocityY + 0.8
  
spawnObstacle();
spawnBanana();
  
drawSprites() 
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
     obstacle= createSprite(400,305,40,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.19;
     obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
    
    
  }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
     banana= createSprite(400,200,40,10);
     banana.addImage(bananaImage);
     banana.scale = 0.09;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 134;
    
    
  }
}

 // if(monkey.isTouching(obstacle)){
   // monkeydestroyEach()
    //score=score+1
  //}
