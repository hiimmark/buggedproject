var hammersprite,plane

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
	var options = {
		'density': 2,
		'friction': 1.0,
		'restitution': 0.5,
	}
	var aoptions = {
		'isStatic': true
	}
	var soptions = {
		'density' : 1,
		'restitution': 1,
		'friction': 1
	}
	var coptions = {
		'restitution' : 0.3,
		'friction' : 5,
		'density' : 1,
		'isStatic' : false
	}
	hammersprite = Bodies.rectangle(300,300,100,40,options)
	fill("yellow")
	World.add(world, hammersprite);
	stone = Bodies.rectangle(200,300,200,200,soptions)
	World.add(world, stone)
	plane = Bodies.rectangle(400,700,800,30,aoptions)
	World.add(world, plane);
	rubber = Bodies.circle(500,630,100,coptions)
	Engine.run(engine);
  
}


function draw() {
	background(255);
  rectMode(CENTER);
	ellipseMode(CENTER);
  
  
  Engine.update(engine)
  rect(mouseX,mouseY,100,40)
  rect(plane.position.x, plane.position.y, 800,30)
  rect(stone.position.x, stone.position.y, 200,200)
  ellipse(rubber.position.x, rubber.position.y, 100)
}



