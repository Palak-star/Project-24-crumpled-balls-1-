
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,420,800,30)
    leftrect = new dustbin(550,365,10,80)
    rightrect = new dustbin(650,365,10,80)
    centerect = new dustbin(600,400,90,10)

    paper = new Paper(200,400,10,10)
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  leftrect.display();
  rightrect.display();
  centerect.display();
   paper.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

       Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

  }
}

