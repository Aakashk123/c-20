var fixedRect,movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
}

function draw() {
  background(0); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

   console.log('distance',movingRect.x-fixedRect.x);

   if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 )
   {

    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

   }
   else
   {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";


   }


  drawSprites(); 
  
}