//Create variables here
var dog , happyDog , database , foodS ,foodStock , dogImage;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(50,50)
  dog.addImage(dogImage)
  var dog = database.ref('dog/position')
  dogposition.on("value",readPosition,showError)
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
if(x<=0){
  x = 0;
}else{
  x = x-1
}
  database.ref('/').update({Food:x})
}
drawSprites();
}
function readStock(data){
  foodS = data.val();
  }
  function writeStock(x){
  database.ref('/').update({
    foodS:x
  })
  }
