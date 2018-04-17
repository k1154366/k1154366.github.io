var cloudx=[];
var cloudy=[];
var groundx1=0;
var groundx2=1600;
var treex=1600;
var speed=0;
var time=0;
var dinosaury=300;
var jump=30;
var jumpcheak=0;
var treecheak=0;

function preload() {
  cloud = loadImage('cloud.png');
  dinosaur1 = loadImage('dinosaur1.png');
  dinosaur2 = loadImage('dinosaur2.png');
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
  time=time+1;
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
    
    dinosaury=dinosaury-jump;
    if(jump>-20){
      jump=jump-2;
    }
    
    if(dinosaury>=300){
      jumpcheak=0;
      jump=30;
      dinosaury=300;
    }
    
  }
  
  //tree
  
  if(sec%6==0){
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
  
  
  
  //goal
  fill(200, 200, 200);
  noStroke();
  rect(1320,36,150, 50);
  textSize(40);
  fill(0,0,0);
  textStyle(BOLD);
  text(time/10,1350,75);
  text( sec ,1350,150);
}

  function mouseClicked() {
    image(tree, 900, 220,150,180);
    if(jumpcheak==0){
      jumpcheak=1;
    }
  }
