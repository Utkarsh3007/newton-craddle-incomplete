
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var world

function preload(){
	
}

function setup() {
	createCanvas(500, 500);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
  
	roof = new Roof(width/2,100,300,20)

	
	bob1 = new Bob(150,400,40);
	bob2 = new Bob(200,400,40);
	bob3 = new Bob(250,400,40);
	bob4 = new Bob(300,400,40);
	bob5 = new Bob(350,400,40);
	
	/*rope1 = new Rope(bob1.body,roof.body,-90,0)
	rope2 = new Rope(bob2.body,roof.body,-40,0)
	rope3 = new Rope(bob3.body,roof.body,10,0)
	rope4 = new Rope(bob4.body,roof.body,60,0)
	rope5 = new Rope(bob5.body,roof.body,110,0)*/

	
/*var bob1Diameter=bob1.r*2
var bob2Diameter=bob2.r*2
var bob4Diameter=bob4.r*2
var bob5Diameter=bob5.r*2*/

var bob1Diameter=bob1.r
var bob2Diameter=bob2.r
var bob4Diameter=bob4.r
var bob5Diameter=bob5.r

	rope1=new Rope(bob1.body,roof.body,-bob1Diameter*2, 0)
	rope2=new Rope(bob2.body,roof.body,-bob2Diameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bob4Diameter*1, 0)
	rope5=new Rope(bob5.body,roof.body,bob5Diameter*2, 0)
	
	
	  Engine.run(engine);
	 
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine)

  roof.display();
  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  keyPressed();
 drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:40})
	
	}
  


	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0,y:0})
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:0,y:10})
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:0,y:10})
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:0,y:10})
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:0,y:10})

}


