var time=0;
var gg=0;
var cheak=0;
function preload() {
  
  a = loadImage('1.png');
  b = loadImage('2.png');
  c = loadImage('3.png');
  d = loadImage('4.png');
  e = loadImage('5.png');
  f = loadImage('6.png');
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(200);
  cheak=0;
  time=time+1;
  if(time%60>0&&time%60<=10){
    image(a, 100, 100);
    gg=gg+1;
    cheak=1;
  }
  if(time%60>10&&time%60<=20){
    image(b, 100, 100);
    gg=gg+1;
    cheak=1;
  }
  if(time%60>20&&time%60<=30){
    image(c, 100, 100);
    gg=gg+1;
    cheak=1;
  }
  if(time%60>30&&time%60<=40){
    image(d, 100,100);
    gg=gg+1;
    cheak=1;
  }  
  if(time%60>40&&time%60<=50){
    image(e, 100, 100);
    gg=gg+1;
    cheak=1;
  }  
  if(time%60>50&&time%60<=60){
    image(f, 100, 100);
    gg=0;
    cheak=1;
  }  
  
  text(time,200,200)
  
}
