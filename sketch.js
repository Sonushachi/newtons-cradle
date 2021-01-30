const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObj,bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	roofObj = new roof(750,150,500,30);

	bobObj1 = new bob(650,400,50);
	bobObj2 = new bob(700,400,50);
	bobObj3 = new bob(750,400,50);
	bobObj4 = new bob(800,400,50);
	bobObj5 = new bob(850,400,50);

	rope1 = new rope(bobObj1.body,roofObj.body,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
roofObj.display();

bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();

rope1.display();
  
  drawSprites();
 
}



