var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper1; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
  
	box1 = createSprite(650,650,200,20);
	box1.shapeColor = "red";
	

    box2 = createSprite(550,610,20,100);
	box2.shapeColor = "red";
	

	box3 = createSprite(750,610,20,100);
	box3.shapeColor = "red";
	

	var ground_options = {
		isStatic:true
		
	}

	ground = Bodies.rectangle(400,690,200,20,ground_options);
	World.add(world,ground);

	console.log(ground);	
	
	var paper1_options ={
		isStatic:false,
		restitution:0,
		friction:0.5,
		density:1.2
	}
	paper1 = Bodies.circle(56,46,55,paper1_options);
	World.add(world,paper1);

	
	
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(RADIUS);
  ellipse(paper1.position.x,paper1.position.y,30,30);

 
  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
		
	}
}




