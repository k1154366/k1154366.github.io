var cloudx=[];
var cloudy=[];
var groundx1=0;
var groundx2=1600;
var treex=1600;
var speed=0;
var time=0;
var dinosaury=300;
var jump=-30;
var jumpcheak=0;
var treecheak=0;
var gameover=0;
function preload() {
  cloud = loadImage('cloud.png');
  dinosaur1 = loadImage('dinosaur1.png');
  dinosaur2 = loadImage('dinosaur2.png');
  dinosaur3 = loadImage('dinosaur3.png');
  tree = loadImage('tree.png');
  ground = loadImage('ground.png');
  speed=10;
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  cloudx[0]=30;
  cloudy[0]=50;
  for(var i=1;i<5;i++){
    cloudx[i]=cloudx[i-1]+random(300,500);
    cloudy[i]=random(0,100);
  }
  frameRate(120);
  
}

function draw() {
  var sec = second();
  background(255,255,255);
  //cloud
  for(var i=0;i<4;i++){
    image(cloud,cloudx[i],cloudy[i],80,50);
  }
  for(var i=0;i<4;i++){
    cloudx[i]=cloudx[i]-speed;
    if(cloudx[i]<-80){
      cloudx[i]=windowWidth;
    }
  }
  //ground
  image(ground, groundx1, 300,1600,200);
  image(ground, groundx2, 300,1600,200);
  groundx1=groundx1-speed;
  groundx2=groundx2-speed;
  if(groundx1<-windowWidth){
    groundx1=windowWidth;
  }
  if(groundx2<-windowWidth){
    groundx2=windowWidth;
  }  
  //dinosaur
  if(time%20>=10){
    image(dinosaur1, 250,dinosaury,132,120);
  }else{
    image(dinosaur2, 250,dinosaury,132,120);
  }
  //jump
  if(jumpcheak==1){
    if(gameover==1){
      overy=dinosaury;
    }
    dinosaury=dinosaury-jump;
    if(jump>-30){
      jump=jump-1;
    }
    
    if(dinosaury>=300){
      jumpcheak=0;
      jump=-30;
      dinosaury=300;
    }
    
  }
  
  //tree
  if(sec%5==0){
    treecheak=1;
  }
  if(treecheak==1){
    image(tree, treex, 220,150,180);
    treex=treex-speed;
  } 
  if(treex<=-80){
    treecheak=0;
    treex=1650;
  }
  
  //game over
  
  if(treex==290&&jump<0){
    gameover=1;
  }
  
  
  //goal
  if(gameover==0){
   time=time+1; 
  }
  //over screen
  if(gameover==1&&dinosaury>180){
    background(255,255,255);
    image(tree, treex+speed, 220,150,180);
    image(ground, groundx1+speed, 300,1600,200);
    image(ground, groundx2+speed, 300,1600,200);
    speed=0;
    for(var i=0;i<4;i++){
      image(cloud,cloudx[i],cloudy[i],80,50);
    }
    image(dinosaur3, 267,dinosaury+5,110,100);
    textSize(180);
    fill(255, 10, 10);
    text('GAMEOVER', 250, 300);    
    noLoop();
  }
  
  fill(200, 200, 200);
  noStroke();
  rect(1320,36,150, 50);
  textSize(40);
  fill(0,0,0);
  textStyle(BOLD);
  text(time/10,1350,75);
}

  function mouseClicked() {
    if(jumpcheak==0&&gameover==0){
      jumpcheak=1;
      jump=20;
    }
    
  }
