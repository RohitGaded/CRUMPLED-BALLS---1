class Paper {
    constructor(x, y,r) {
      var options = {
        
        isStatic:false,
        restitution:0.003,
        friction:0.5,
        density:1.5
      }
      this.x=x;
      this.y=y;
      this.r=r;

      this.body=Bodies.circle(this.x,this.y,this.r,options)
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      fill(255,0,255);

    ellipseMode(RADIUS);

     ellipse(0, 0,this.r,this.r);
      pop();
    }
  };




  