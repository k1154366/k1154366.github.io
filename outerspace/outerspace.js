var starx=[];
var stary=[];
var startime=[];
var starlife=[];
var starcount=45;
var time=0;
var distant=0;
var r=0;
var speed=2.5;
var xsen=0;
var ysen=0;
function preload() {
  Spacecraft=loadImage('Spacecraft.png');
  back=loadImage('back.png');
}
function setup() {
  createCanvas(1520,730);
  
  for(var i=0;i<starcount;i++){
    starx.push(random(560,960));
    stary.push(random(295,435));
    startime.push(random(0,80));
    starlife.push(0);
  }  
  
}

function draw() {
  time=time+1;

  background(0);
  //text(time,300,300);
  //image(back,0,0,1520,730);
  
  for(var i=0;i<starcount;i++){
    xsen=(starx[i]-760)/200;
    ysen=(stary[i]-365)/250;
    if(starlife[i]==1){
      //draw star
      distant=int(dist(starx[i],stary[i],760,365));
      r=sqrt(distant*distant*distant)/8000;
      stroke(255);
      for(var j=0;j<10;j++){
        fill(j/10*255);
        stroke(j/10*255);
        ellipse(starx[i]+j*xsen*2, stary[i]+j*ysen*2,r,r);
      }
    }
    if(startime[i]<=time){
      starlife[i]=1;
    }
    if(starx[i]<=760&&starlife[i]==1){
      starx[i]=starx[i]+xsen*speed;
    }
    if(starx[i]>760&&starlife[i]==1){
      starx[i]=starx[i]+xsen*speed;
    } 
    if(stary[i]<=365&&starlife[i]==1){
      stary[i]=stary[i]+ysen*speed;
    }
    if(stary[i]>365&&starlife[i]==1){
      stary[i]=stary[i]+ysen*speed;
    } 
    if(starx[i]<0||starx[i]>1520){
      starx[i]=random(560,960);
      stary[i]=random(295,435);
    }
    
  }
  //image(Spacecraft,0,0,1520,730);
}
