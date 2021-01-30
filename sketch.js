
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof
var Bob1
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	
	roof = new Roof(400,50,800,50)
	Bob1 = new bob(150,550,50)
	Bob2 = new bob(250,550, 50)
	Bob3 = new bob(350,550,50)
	Bob4 = new bob(450,550,50)
    Bob5 = new bob(550,550,50)
    stroke("red");
    chain1 = new rope(Bob1.body,Roof.body,0,0);
    chain2 = new rope(Bob2.body,Roof.body,0,0);
    chain3 = new rope(Bob3.body,Roof.body,0,0);
    chain4 = new rope(Bob4.body,Roof.body,0,0);
    chain5 = new rope(Bob5.body,Roof.body,0,0);
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -100, y: -200});
	}
}


