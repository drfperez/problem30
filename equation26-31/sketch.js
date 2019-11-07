// x position variable var 
let xpos = 20;
let ypos=200;
// speed variable
let speed = 2;
var img; 
function preload() { 
  img = loadImage("toyota4.png"); 
  } 
  
  function setup() { 
    createCanvas(600, 400); 
    } 
    
    function draw() { 
      background(255);
      imageMode(CENTER); 
  xpos = xpos + speed;
  ypos= ypos-speed;
  // if the car moves off screen, change the speed's polarity 
  if((xpos > width)||(xpos<20)) { 
    xpos=20;}
    else{
      xpos=xpos+speed;}
    if ((ypos>height)||(ypos<0)){
    ypos=200; }
    else{
      ypos=ypos-speed;}
    
    // draw a car
  image(img, xpos, ypos,200,140);	
  // display xpos variable 
  fill(0); 
  text("xpos = " + xpos, 25, 25);
  text("ypos="+ypos,25,50);
  
  //fill(0,0,255);
 //triangle(480,480,1080,100,1080,480,1080);
  }