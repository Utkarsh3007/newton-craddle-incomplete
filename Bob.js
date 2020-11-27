class Bob {
    constructor(x, y,r) {
        var option = {
        isStatic:false,
        density:1,
        resititution:0.4,
        friction:0
        }
        this.x=x
        this.y=y
        this.r=r

        this.body = Bodies.circle(this.x, this.y,(this.r)/2, option)
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
    
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        fill("purple")
        ellipse(0,0,this.r)     
        pop();                   
    }
}