let xSpeed = [10, -5, 5, 7, -3];
let ySpeed = [6, 5, 3, -10, 17];
let xKoordinater = [100, 200, 300, 400, 500];
let yKoordinater = [100, 100, 100, 100, 100];



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(100);
  rect(0, 0, width, height);
  
  let d = 120;
  let antalBolde = xKoordinater.length;

  for (let i=0 ; i<antalBolde ; i++){
    if (xKoordinater[i] > width - d / 2 || xKoordinater[i] < 0 + d / 2) {
      xSpeed[i] = -xSpeed[i];
    }
  
    if (yKoordinater[i] > height - d / 2 || yKoordinater[i] < 0 + d / 2) {
      ySpeed[i] = -ySpeed[i];
    }
  
    xKoordinater[i] = xKoordinater[i] + xSpeed[i];
    yKoordinater[i] = yKoordinater[i] + ySpeed[i];
  }

  // tegn en cirkel med centrum i (x, y) og diameter d
 for (let i=0; i<antalBolde ; i++){
    circle(xKoordinater[i], yKoordinater[i], d);
 }
  


  
}
