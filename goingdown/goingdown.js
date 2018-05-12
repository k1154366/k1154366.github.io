var time=0;
var stonx=[];
var stony=[];
var colo=0;
var peoplex=570;
var peopley=570;
var gomode=0;
var gomode1=0;
var stone_speed=3;
var people_speed=3;
var people_xspeed=5;
var stony_bo=0;
var die=0;
var score=0;

function preload() {
  cut1 = loadImage('cut1.png');
  cut2 = loadImage('cut2.png');
  cut3 = loadImage('cut3.png');
  magma= loadImage('magma.jpg');
  allback = loadImage('allback.jpg');
  stone = loadImage('stone.png');
  people1=loadImage('people1.png');
  people2=loadImage('people2.png');  
  people3=loadImage('people3.png');
  people4=loadImage('people4.png');   
}
function setup() {
  createCanvas(1520,730);
  stonx[0]=550;
  stony[0]=650;
  for(var i=1;i<7;i++){
    stonx[i]=random(490,900);
    stony[i]=stony[i-1]+120+random(50,120);
  }
  stony_bo=stony[6];
}

function draw() {
  //speedcount
  //back
  colorMode(RGB);
  background(150); 
  time=time+1;
  image(allback,0,0,1520,730);
  image(magma,490,0,540,730);
  
  //fall or not fall
  for(var i=0;i<7;i++){
    if(peopley+85>=stony[i]&&peopley+75<=stony[i]&&peoplex>=stonx[i]-50&&peoplex<=stonx[i]+100){
      peopley=stony[i]-78;
      people_speed=stone_speed;
      break;
    }else{
      people_speed=-6;
    }
  }  
  //stone
  for(var i=0;i<7;i++){
    image(stone,stonx[i],stony[i],130,30);
    stony[i]=stony[i]-stone_speed;

    if(stony[0]<-30&&i==0){
      stony[0]=stony[6]+120+random(50,120);
      stonx[0]=random(490,900);
    }else if(stony[i]<-30){
      stonx[i]=random(490,900);
      stony[i]=stony[i-1]+120+random(50,120);
    }
  }  
  //top
  for(var i=0;i<8;i++){
    if(time%30>=0&&time%30<10){
      image(cut3, 490+i*65, -45, 90, 90);
    }
    if(time%30>=10&&time%30<20){
      image(cut2,490+i*65, -45, 90, 90);
    }
    if(time%30>=20&&time%30<30){
      image(cut1, 490+i*65, -45, 90, 90);
    } 
  }
  //GO LEFT OR RIGHT
  peopley=peopley-people_speed;
  if(keyIsDown(LEFT_ARROW)){
    if(peoplex<490){
      people_xspeed=0;
    }
    gomode=1;
    peoplex=peoplex-people_xspeed;
    if(time%20>10){
      image(people3,peoplex,peopley,80,80);
    }
    if(time%20<=10){
      image(people4,peoplex,peopley,80,80);
    }  
      people_xspeed=5;
  }else if(keyIsDown(RIGHT_ARROW)){
    if(peoplex>950){
      people_xspeed=0;
    }    
    gomode=2;
    peoplex=peoplex+people_xspeed;
    if(time%20>10){
      image(people1,peoplex,peopley,80,80);
    }
    if(time%20<=10){
      image(people2,peoplex,peopley,80,80);
    }
      people_xspeed=5;
  }else{
    if(gomode==2){
      image(people1,peoplex,peopley,80,80);
    }
    if(gomode==1){
      image(people4,peoplex,peopley,80,80);
    }
    if(gomode==0){
      image(people4,peoplex,peopley,80,80);
    }
  }
  //bang san
  
  colorMode(RGB);
  stroke(74,127,170);
  strokeWeight(50);
  line(470,0,470,730);
  strokeWeight(150);
  line(1100,0,1100,730);
  strokeWeight(10);
  stroke(0);
  line(490,0,490,730);
  line(1030,0,1030,730);
  
  //SCORE
  noStroke();
  score=ceil(time/15);
  textSize(25);
  stroke(255);
  strokeWeight(7);
  fill(255, 0, 0);
  text("SCORE:",1050,200);
  text(score,1050,250);  
  
  //die
  if(peopley<=20||peopley>=650){
     colorMode(RGB);
     textSize(80);
     strokeWeight(5);
     stroke(10,10,10);
     fill(255, 0, 0);
     text("GAME OVER",515,350);
     die=1;
     //noLoop();
   }
}
/*
function mouseClicked() {
  if (die == 1) {
    peoplex=570;
    peopley=570;
    stonx[0]=550;
    stony[0]=650;
    for(var i=1;i<7;i++){
      stonx[i]=random(490,900);
      stony[i]=stony[i-1]+120+random(50,120);
    }
    stony_bo=stony[6];
    die=0;
  }
}*/
