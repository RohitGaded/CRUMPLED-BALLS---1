
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paper1=new Paper(50,50,20)
  ground=new Ground(700,height,2000,25)
  
  wall2 = new Wall(1100, 640, 20,100);
  wall1 = new Wall(1050, 680, 100,20);
  fill("yellow");
	wall3 = new Wall(1000, 640, 20,100);
  
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  

  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1,{x:110,y:-110});
  }
}



