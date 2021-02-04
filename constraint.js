class Constraint{
    constructor(x,y){
        var options={
            bodyA:x,
            bodyB:y,
            stiffness:0.04,
            length:10
        }
        this.body= Matter.Constraint.create(options);
        World.add(world,this.body);


    }
    dotted_Line(){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
    }
}