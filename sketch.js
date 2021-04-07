const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var border1, border2, border3, border4, border5;

var engine, world;

function setup() {
  	createCanvas(400,600);
  	createSprite(400, 200, 50, 50);
}

function draw() {
  	background(000000); 

	border1 = new Border(10,450, 20,300)

 	 drawSprites();
}