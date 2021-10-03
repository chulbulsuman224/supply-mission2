var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityY=5;
	packageSprite.visible=false;
	
	helicopterSprite=createSprite(100,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX=4;

	groundSprite=createSprite(width/2,height-35,800,30);
	groundSprite.shapeColor=color("white")

	box1=createSprite(width/2-50,height-90,20,80)
	box1.shapeColor=color("red")
	box2=createSprite(width/2+50,height-90,20,80)
	box2.shapeColor=color("red")
	box3=createSprite(width/2,height-60,80,20)
	box3.shapeColor=color("red")
	
	
}


function draw() {
	rectMode(CENTER);
	background(0);
   
	ellipseMode(RADIUS);
	ellipse();
	rect();
	packageSprite.collide(box3);
	drawSprites();
	
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   packageSprite.visible=true;
   
	 }
}



