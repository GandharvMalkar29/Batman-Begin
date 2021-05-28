var umbrella;
var maxDrop = 100;
var drop = []

function preload(){
    
}

function setup(){
    createCanvas(800,400);
    bEngine = Matter.Engine.create()
    bWorld = bEngine.world

    umbrella = new Umbrella(300,200);
    for(var i = 0;i<maxDrop; i ++){
        drop.push(new Drop(random (0,800),random (0,100)))
    }
}

function draw(){
    Matter.Engine.update(bEngine)
    background("black")
    umbrella.display();
    for(var i = 0; i<maxDrop; i ++){
        drop[i].display()
        drop[i].update()
    }
}   

