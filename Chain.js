class Chain {
    constructor(body1, body2, offsetx, offsety){
        this.offsetX = offsetx;
        this.offsetY = offsety;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world, this.rope)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      line(body1.x, body1.y, body2.x, body2.y)
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      ellipse(0, 0, this.width, this.height);
      pop();

    }
}