const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,base1,base2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16


function setup(){

var canvas = createCanvas(1200,800)
engine = Engine.create();
    world = engine.world;


ground = new Ground (600,750,1200,20)
base1 = new Ground( 390,650,500,20 )

    box1 = new Box(300,610,30,40)
    box2 = new Box(330,610,30,40)
    box3 = new Box(360,610,30,40)
    box4 = new Box(390,610,30,40)
    box5 = new Box(420,610,30,40)
    box6 = new Box(450,610,30,40)
    box7 = new Box(480,610,30,40)
    box8 = new Box(330,565,30,40)
    box9 = new Box(360,565,30,40)
    box10 = new Box(390,565,30,40)
    box11 = new Box(420,565,30,40)
    box12 = new Box(450,565,30,40)
    box13 = new Box(360,520,30,40)
    box14 = new Box(390,520,30,40)
    box15 = new Box(420,520,30,40)
    box16 = new Box(390,475,30,40)

}

function draw(){

ground.display()
base1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
}



