
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var ball
function preload(){
	
}

function setup() {
	createCanvas(1200, 600);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball)

	ground = new Ground(600,550, 1200, 20)
	left_wall= new Ground(1000, 520, 10, 100)
	right_wall= new Ground(800, 520, 10, 100)

	
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,{x:0, y:0},{x:0.05, y:0})
		Matter.Body.applyForce(ball.body,{x:0, y:0},{x:0, y:-0.05})  
	}
}


function draw() {
	
  background(0);
  Engine.update(engine)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 20, 20)
  ground.display();
  left_wall.display();
  right_wall.display();
  rectMode(CENTER);
  drawSprites();
 
}



