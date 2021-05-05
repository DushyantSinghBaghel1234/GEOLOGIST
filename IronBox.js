class ironBox {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':30
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("black");
    fill("black");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
