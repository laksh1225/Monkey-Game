
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);

score = 0;

survivalTime = 0;

console.log(monkey);

monkey = createSprite(80,315,10,10);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,1000,10);
ground.velocityX = -4;
ground.x = ground.width/2;

FoodGroup = createGroup();
obstaclesGroup = createGroup();
}


function draw() {
background("white");

if(keyDown("space")&& monkey.y >= 158) {

monkey.velocityY = -12;

}
monkey.velocityY = monkey.velocityY + 0.8;
  
stroke("white");
textSize(20);
fill("white");
text("Score" + score,500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time :" + survivalTime,100,50);

if(ground.x < 0){
ground.x = ground.width/2;
}

food();
obstacles();

monkey.collide(ground);

drawSprites();

  
}


function food(){
if(frameCount%80 === 0){
banana = createSprite(600,Math.round(random(120,200)),10,10);
banana.velocityX = -5;
banana.setLifeTime = 500;
banana.addAnimation("banana",bananaImage);
banana.scale = 0.1;

FoodGroup.add(banana);

}
}


function obstacles(){
 if (frameCount % 60 === 0){
var obstacle = createSprite(600,325,10,40);
obstacle.velocityX = -(6 + score/100);
obstacle.lifetime = 300;
obstacle.addImage("obstacle",obstacleImage);
obstacle.scale = 0.1;

obstaclesGroup.add(obstacle);
 }
}
