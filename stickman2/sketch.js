diameter = 40;
let xpos = 20;

function setup() {
  createCanvas(800, 800);
  Training=1;
}

function draw() {
  background(220);
  let hastighed = mouseY;

  if(xpos == 20){
    gårModHøjre = true;
  }
  circle(xpos, 400, diameter);

  if (gårModHøjre == true){
      xpos += 1*(mouseY/100);
  }
  else{
    xpos += -1*(mouseY/100);
  }
  if (xpos == 780){
      gårModHøjre = false;
  }
  if (xpos == 20){
      gårModHøjre = true;
  }

}