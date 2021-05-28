class Drop{
    constructor(x,y){
        this.drop = Matter.Bodies.circle(x,y,5,{restitution : 0.1,friction : 0.001,isStatic : false})
        Matter.World.add(bWorld, this.drop)
    }

    update(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x : random (0,800),y : random (0,400)})
        }
    }

    display(){
        fill("blue")
        ellipse(this.drop.position.x,this.drop.position.y,5,5)
    }
}