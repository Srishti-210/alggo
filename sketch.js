var moverect;
var fixrect;

function setup() {
  createCanvas(800,400);
   moverect= createSprite(200, 200, 150, 50);
   fixrect= createSprite(400,200,100,50);
   moverect.shapeColor="yellow";
   fixrect.shapeColor="yellow";
}

function draw() {
  background(255,255,255);
  
  moverect.x=mouseX;
  moverect.y=mouseY;

  if(moverect.x-fixrect.x<(moverect.width/2+fixrect.width/2)&&
  fixrect.x-moverect.x<(moverect.width/2+fixrect.width/2)&&
  moverect.y-fixrect.y<(moverect.height/2+fixrect.height/2)&&
  fixrect.y-moverect.y<(moverect.height/2+fixrect.height/2)){

  moverect.shapeColor="red";
  fixrect.shapeColor="red";

  }

 else{
  moverect.shapeColor="yellow";
  fixrect.shapeColor="yellow";
 }


  drawSprites();
}