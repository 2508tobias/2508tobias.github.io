function setup() {
  createCanvas(1000, 1000);
}

let colour = "white";
function draw() {
 
  let posx = mouseX;
  let posy = mouseY;

  background(250);
  strokeWeight(10);
  fill(colour);
  line(250, 0, 250, 500);
  line(0, 250, 500, 250);

  strokeWeight(5);
  circle(posx, posy, 100);


  if (posx < 250 && posy < 250) {
    colour = "white";
  }
  if (posx > 250 && posy < 250) {
    colour = "red";
  }
  if (posx < 250 && posy > 250) {
    colour = "red";
  }
  if (posx > 250 && posy > 250) {
    colour = "white";
  }
  

 

  


  
}

