class Block extends BaseClass {
  constructor(x, y, width, height,angle) {
      super(x, y, width, height,angle)
      this.Visiblity = 255;
     

      
    }
  

   
    display(){
      if (this.body.speed < 3){
         super.display();
      }
        else{
        World.remove(world,this.body)
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop(); 
}
    }
}
