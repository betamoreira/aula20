var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600,100,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = "true";
  retMovendo = createSprite(600,600,80,30);
  retMovendo.shapeColor= "green";
  retMovendo.debug = "true";


  retFixo.velocityY = 5;
  retMovendo.velocityY = -5;

  obj1 = createSprite(100,200,50,50);
  obj1.shapeColor = "green";
  obj2 = createSprite(200,200,50,50);
  obj2.shapeColor = "green";
  obj3 = createSprite(300,200,50,50);
  obj3.shapeColor = "green";
  obj4 = createSprite(400,200,50,50);
  obj4.shapeColor = "green";

}

function draw() {
  background(255,255,255);  


  if(isTouching(retMovendo, obj1)){
    retMovendo.shapeColor = "blue";
    obj1.shapeColor = "blue";
  }
  else {
    retMovendo.shapeColor = "green";
    obj1.shapeColor = "green";
  }

  /*retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;*/

  drawSprites();
}

function isTouching(objeto1, objeto2){

  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
    && objeto1.y - objeto2.y < objeto2.width/2 + objeto1.width/2
    && objeto2.y - objeto1.y < objeto2.width/2 + objeto1.width/2){
    
      return true;
  }
  else {
  
    return false;
  }

}