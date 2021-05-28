class Umbrella{
    constructor(x,y){
        this.umbrella = Matter.Bodies.circle(x,y,50,{isStatic : true})
        this.image = loadImage("walking_1.png")
        Matter.World.add(bWorld,this.umbrella)
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.umbrella.position.x,this.umbrella.position.y+70,300,300)
    }
}