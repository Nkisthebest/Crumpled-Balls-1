
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    var canvas=createCanvas(800, 400);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;
    paper1 = new Paper(100,300, 10);
    dustbin1 = new Dustbin(620,330, 100, 20);
    dustbin2 = new Dustbin(560,300,20,100);
    dustbin3 = new Dustbin(680,300,20,100);
    ground = new Ground(600,350,1200,20);
}
function draw() {
  background(0);
  Engine.update(engine);
  paper1.display()
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }



