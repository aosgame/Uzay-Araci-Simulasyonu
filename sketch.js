
var stars=[];
function setup() {
  createCanvas(500,800);

  for (var i = 0; i < 1800; i++) {
    stars[i]=new Star();
  }
}

function draw() {
  background(25,50,75);//0-255 r,g,b
  translate(width/2,height/2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].createStar();
    stars[i].updateStar();
  }
}

function Star(){
  this.x=random(-width,width);
  this.y=random(-height,height);
  this.z=random(width);


    this.createStar=function(){
      var sx=map(this.x/this.z,0,1,0,width);
      var sy=map(this.y/this.z,0,1,0,height);
      fill(255);
      noStroke();
      ellipse(sx,sy,8,8);
    }

    this.updateStar=function(){
      this.z=this.z-10;
      if(this.z<1){
        this.z=width;
      }
    }
}
