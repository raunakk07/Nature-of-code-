let bubbles = [];
let bgcolor = 0;
let button1, button2;
let noofbubbles = 2000;
let slider;
let input;
function setup() {
  createCanvas(600, 600);
  let x = random(height);
  let y = random(width);
  let r = random(10,50);
  for(let i = 0;i<noofbubbles;i++){
    let x = random(height);
    let y = random(width);
    let r = random(10,20);
    bubbles[i]= new Bubble(x,y,r);
  }

  button1 = createButton("Change color");
  button1.mousePressed(changeColor);
  button2 = createButton("change bubbles")
  button2.mousePressed(changeBubbles);
  slider = createSlider(0,255,1);
  input = createInput("enter a text");
}


function draw() {
  background(slider.value());
 for(let bubble of bubbles){
    bubble.show();
    bubble.move();
    // for(let otherBubble of bubbles){
    //   if( b!== otherBubble && bubble.intersects(otherBubble)){
    //     otherBubble.changeColor(240);
    //   }else{
    //     otherBubble.changeColor(0);
    //   }
    // }
  }
}
function changeColor(){
//   for(let bubble of bubbles){
//     bubble.clicked(mouseX,mouseY);
    
//   }
  bgcolor=random(255);
 }
function changeBubbles(){
  noofbubbles = random(0,100);
}
class Bubble{
  
  constructor(x,y,r)
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  
//   clicked(px,py){
//     let d = dist(px,py,this.x,this.y);
//     if(d<this.r){
//       this.brightness = 255;
//       //console.log("clicked on bubble")
//     }
//   }
  
  intersects(other){
    let d = dist(this.x, this.y, other.x , other.y);
    return (d<this.r + other.r);
  }
  changeColor(brightness){
    this.brightness = brightness;
  }
  
  move()
  {
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }
  show()
  {
    noStroke();
    fill(120,50);
    ellipse(this.x,this.y,this.r*2);
  }

  
}