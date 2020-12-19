class Bob{

    constructor(x,y,radius){
    
    var option = {
    
    restitution:0.8,
    friction:0.7,
    density:2
    
    }
    
    this.body = Bodies.circle(x,y,radius,option);
    this.radius = radius;
   
    World.add(world,this.body)
    
  
    
    
    }
    
    
    display(){
    push();
    ellipseMode(RADIUS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("pink")
    stroke("black")
    ellipse(0,0,this.radius,this.radius)
    pop();
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }