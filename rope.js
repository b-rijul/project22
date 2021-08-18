class Rope {
    constructor(x,y,w,h) {
       this.w=w;
       this.x=x;
       this.y=y;
       this.h=h;
    }


display() {
    con1 = Matter.Constraint.create({
        pointA:{x:300,y:100},
        bodyB:bob1,
        pointB:{x:0,y:0},
        length:60,
        stiffness:0.1
      });

    World.add(world,con1);  
}
}
