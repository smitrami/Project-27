
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(340, 100, 335, 40);

	bob1 = new Bob(200, 380, 70);
	bob2 = new Bob(270, 380, 70);
	bob3 = new Bob(340, 380, 70);
	bob4 = new Bob(410, 380, 70);
	bob5 = new Bob(480, 380, 70);

	rope1 = new rope(bob1.body, roof.body, 200, 100);
	rope2 = new rope(bob2.body, roof.body, 270, 100);
	rope3 = new rope(bob3.body, roof.body, 340, 100);
	rope4 = new rope(bob4.body, roof.body, 410, 100);
	rope5 = new rope(bob5.body, roof.body, 480, 100);
	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("white");
	Engine.update(engine);
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

	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob5.body.position, { x: -20, y: -15 });
	}
}
