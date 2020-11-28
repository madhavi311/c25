class dustbin {
    constructor(x, y,width,height)
    {
        var opt = {
            isStatic: true
        }
        this.body=Bodies.rectangle(x, y , width, height, opt);
        this.w=width;
        this.h=height;
        this.image=loadImage("sprites/dustbingreen.png")
        World.add(world, this.body)
    }
    display()
        {
var pos= this.body.position
rectMode(CENTER);
fill(255);
image(this.image,pos.x, pos.y, this.w, this.h);
        }
    
}