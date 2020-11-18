
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(60, 200, 60);


	ground = new Ground(400, height, 800, 20);
	
	rightRect = new Dustbin(700, 600, 10, 100);
	 leftRect = new Dustbin(500, 600, 10, 100);
	  baseRect = new Dustbin(600, 650, 200, 10);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("white");
	paper.display();
	rightRect.display();
	leftRect.display();
	
	ground.display();
	baseRect.addPic();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 136, y: -136 });
	}
}



