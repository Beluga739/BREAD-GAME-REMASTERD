 var gordan_ramsayIMG,kniveIMG,white_breadIMG,whole_wheat_breadIMG,hamburger_bunsIMG,hotdog_bunsIMG,comment_bubbleIMG,bagutteIMG,briocheIMG;

var gordan_ramsay,knive,comment_bubble;
var white_bread,whole_wheat_bread,hamburger_buns,hotdog_buns,bagutte,brioche;


function preload(){
  gordan_ramsayIMG = loadImage("ASSESTS/gordan_ramasy.jpg");
  kniveIMG = loadImage("ASSESTS/kinve.jpg");
  white_breadIMG = loadImage("ASSESTS/white_bread.jpg");
  whole_wheat_breadIMG = loadImage("ASSESTS/whole_wheat_bread.jpg");
  hamburger_bunsIMG = loadImage("ASSESTS/hamburger_buns.jpg");
  hotdog_bunsIMG = loadImage("ASSESTS/hotdog_buns.jpg");
  comment_bubbleIMG = loadImage("ASSESTS/comment_bubble.jpg");
  bagutteIMG = loadImage("ASSESTS/bagutte.jpg");
  briocheIMG = loadImage("ASSESTS/brioche.jpg");

  
  
}

function setup() {
  createCanvas(800, 800);
  
  gordan_ramsay = createSprite(600,600,10,10);
  gordan_ramsay.addImage(gordan_ramsayIMG);

  white_bread = createSprite(400,400,10,10);
  gordan_ramsay.addImage(gordan_ramsayIMG);
  
  
  /*gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;*/
  
  
}

function draw() {
  
  
  drawSprites();
}

