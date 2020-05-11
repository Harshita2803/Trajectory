class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
this.trajectory = [];


  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var pos = [this.body.position.x,this.body.position.y];
    if(this.body.speed>15 && this.body.position.x>200){
      this.trajectory.push(pos);

    }
    
    for (var index in this.trajectory){
      image(this.smoke,this.trajectory[index][0],this.trajectory[index][1]);
    }


   
    }
    
}
