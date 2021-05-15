var fixR , movingR


function setup() {
  createCanvas(1200,800);
  fixR = createSprite (600, 400, 50, 80)
fixR.shapeColor = "green"

movingR = createSprite ( 400, 200 ,80 ,40)
movingR.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  drawSprites();

 movingR.x = World.mouseX
movingR.y = World.mouseY


 if(movingR.x - fixR.x < fixR.width/2 + movingR.width/2 && fixR.x - movingR.x < fixR.width/2 + movingR.width/2 && fixR.y - movingR.y < fixR.height/2 + movingR.height/2 && movingR.y - fixR.y < movingR.height/2 + fixR.height/2){
  fixR.shapeColor = "red"
  movingR.shapeColor = "red"
 }
else {fixR.shapeColor = "green" 
movingR.shapeColor = "green"
}

console.log(movingR.x - fixR.x)
}