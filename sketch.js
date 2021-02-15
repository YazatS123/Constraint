
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, rope1, roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bob1 = new Ball(400, 230, 20, 20);
	roof = new Ground(400, 30, 300, 20);

	

	//Create the Bodies Here.
	//rope1 = new Chain(bob1.body, roof.body, -5*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  roof.display();
  drawSprites();
 
}



