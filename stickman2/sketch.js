diameter = 40;
let xpos = 20;

function setup() {
  createCanvas(800, 800);
  Training=1;
}

function draw() {
  background(220);
  if(xpos == 20){
    gårModHøjre = true;
  }
  circle(xpos, 400, diameter);
var gårModVenstre

  if (gårModHøjre == true){
      xpos += 1;
  }
  else{
    xpos -= 1;
  }
  if (xpos == 780){
      gårModHøjre = false;
  }
  if (xpos == 20){
      gårModHøjre = true;
  }

}