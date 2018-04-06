var x=500;
var y=0;
var xbig=[];
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  for(var i=0;i<200;i++){
    xbig[i]=random(0,windowWidth);  
  }
  
  
}

function draw() {
  background(255);
  y=y+10;
  stroke(255, 204, 0);
  for(var i=0;i<200;i++){
     line(xbig[i],y,xbig[i],y+30);
     if(y>=windowHeight){
       y=0;
     }
  }  

}
