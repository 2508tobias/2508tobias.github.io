function setup() {
  createCanvas(1000, 1000);
}
let circleweight = 5;
let colour = 250;
function draw() {
 
  let posx = mouseX;
  let posy = mouseY;

  background(250);
  strokeWeight(10);
  fill(colour);
  line(250, 0, 250, 500);
  line(0, 250, 500, 250);

  strokeWeight(circleweight);
  circle(posx, posy, 100);

  if (posx > 250) {
    circleweight = 30;
  }
  else {
    circleweight = 5;
  }

  if (posy > 250) {
    colour = 0;
  }
  else {
    colour = 250;
  }

  


  
}

