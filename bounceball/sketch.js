let xSpeed = [10, -5, 5, 7, -3];
let ySpeed = [6, 5, 3, -10, 17];
let xPos = [100, 200, 300, 400, 500];
let yPos = [100, 200, 150, 200, 573];



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(100);
  rect(0, 0, width, height);
  
  let d = 120;
  let antalBolde = xPos.length;

  for (let i=0 ; i < antalBolde ; i++) {
    if (xPos[i] > width - d / 2 || xPos[i] < 0 + d / 2) {
      xSpeed[i] = -xSpeed[i];
    }
  
    if (yPos[i] > height - d / 2 || yPos[i] < 0 + d / 2) {
      ySpeed[i] = -ySpeed[i];
    }
  
    xPos[i] += xSpeed[i];
    yPos[i] += ySpeed[i];
  }

 for (let i = 0; i < antalBolde; i++) {
    circle(xPos[i], yPos[i], d);
 }
}
