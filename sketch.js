
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
  
	roof= new Roof(200,50,200,10);
	bob1= new Bob(250,200,10);
	bob2= new Bob(300,200,10);
	bob3= new Bob(350,200,10);
	bob4= new Bob(400,200,10);
	bob5= new Bob(450,200,10);
	rope1 = new Ropes(bob1.body, {x:110 , y:50});
	rope2 = new Ropes(bob2.body, {x:150 , y:50});
	rope3 = new Ropes(bob3.body, {x:200 , y:50});
	rope4 = new Ropes(bob4.body, {x:250 , y:50});
	rope5 = new Ropes(bob5.body, {x:300 , y:50});
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
 //rope1=new Ropes(bobObject1.body,roofObject.body,-bobDiameter*2,0)
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function keyPressed(){

	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.position, {x:-10,y:-50})

	}
}