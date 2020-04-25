const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var ground1;
var ball1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
    var balloptions={
        restitution: 1
    }
    ball= Bodies.circle(200,250,20,balloptions);
    World.add(world,ball);
    var ground1_options={
        isStatic: true
    }
    ground1= Bodies.rectangle(200,220,200,20,ground1_options);
    World.add(world,ground1);
    var ball1options={
        restitution: 1
    }
    ball1= Bodies.circle(200,10,20,ball1options);
    World.add(world,ball1);
}   

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,20);
    rect(ground1.position.x,ground1.position.y,400,20);
    ellipse(ball1.position.x,ball1.position.y,20);
}