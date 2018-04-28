var time=0;
var speedall=2;
var hunder=0;
var rectx=40;
var boolx=[];
var booly=[];
var boolxspeed=[];
var boolyspeed=[];
var boolw=[];
var boolc=[];
function setup() {
  createCanvas(800, 400);
  for(var i=1;i<70;i++){
    boolx[i]=random(340,460);
    booly[i]=random(150,270);
    boolw[i]=random(5,10);
    boolc[i]=ceil(random(0,5));
    if(boolx[i]<=400){
      boolxspeed[i]=random(-20,-5);
    }
    if(boolx[i]>400){
      boolxspeed[i]=random(20,5);
    }
    if(booly[i]<=210){
      boolyspeed[i]=random(-20,-5);
    }
    if(booly[i]>210){
      boolyspeed[i]=random(20,5);
    }    
  }
  
}

function draw() {
  background(220);
  
  time=time+1;
  hunder=time/speedall%100;
  strokeWeight(0.8);
  fill(0);
  textSize(15);
  text(rectx,30,10);
  text(hunder,30,30);  
  //長方形
  strokeWeight(4);
  stroke(51);
  fill(255, 204, 0);
  rect(rectx, 150, 120, 120, 20);
  //威積分
  textSize(32);
  strokeWeight(4);
  fill(255);
  text("微積分",rectx+12,215);
  if(hunder==0){
    rectx=40;
    for(var i=1;i<70;i++){
      boolx[i]=random(340,460);
      booly[i]=random(150,270);
      boolw[i]=random(5,15);
      boolc[i]=ceil(random(0,5));
      if(boolx[i]<=400){
        boolxspeed[i]=random(-15,-5);
      }
      if(boolx[i]>400){
        boolxspeed[i]=random(15,5);
      }
      if(booly[i]<=210){
        boolyspeed[i]=random(-15,-5);
      }
      if(booly[i]>210){
        boolyspeed[i]=random(15,5);
      }    
    }
      
  }
  if(hunder>=0&&hunder<50){
    rectx=rectx+11/speedall;
  }
  if(rectx<=220){
    fill(116,184,250);
    rect(340, 150, 120, 120, 20);
    fill(255);
    text("人生",367,215);
    }else{
      for(var i=1;i<70;i++){
        if(boolc[i]==1){
          fill(250,84,84);
        }
        if(boolc[i]==2){
          fill(250,84,220);
        }
        if(boolc[i]==3){
          fill(240,250,120);
        }
        if(boolc[i]==4){
          fill(116,250,150);
        }
        if(boolc[i]==5){
          fill(116,227,250);
        }
        noStroke();
        ellipse(boolx[i], booly[i], boolw[i], boolw[i]);
        boolx[i]=boolx[i]+boolxspeed[i];
        booly[i]=booly[i]+boolyspeed[i];
      }
    }
}
