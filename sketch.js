
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bin1,bin2,bin3;
var ob1;
var ground;
var binny,binnyImg;
var bg;

function preload(){
binnyImg=	loadImage("dustbingreen.png")
bg=loadImage("bg.jpg");
}
function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binny=createSprite(1070,510,250,300);
	binny.addImage(binnyImg)
	binny.scale=0.7;
	bin1 = new Bin(1240,510,250,300);
//	bin1.shapeColor="white";
	bin2 = new Bin(960,510,20,160);
//	bin2.shapeColor="white";
	bin3= new Bin(1080,580,250,20);
	//bin3.shapeColor="white";
	ob1=new Ppaper(200,340);
	
//	ob1.scale=0.5;
	ground=new Ground(width/2,640,width,40);
	Engine.run(engine);
  
}


function draw() {
  
  background(bg);
  textSize(30);
  fill("black")
  text("Press space to re-throw",width/2,100)
 console.log(ob1.body.position);
  keyP();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  ob1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ob1.body,ob1.body.position,{x:110,y:-110})
	}
}
function keyP(){
	if(keyDown("space")){
		Matter.Body.setPosition(ob1.body,{x:200,y:607})
	}
}
