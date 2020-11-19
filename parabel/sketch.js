function setup() {
  createCanvas(500, 1000);
}

function draw() {
  background(110)

  let ax = 0
  let ay = 0
  let bx = mouseX
  let by = mouseY
  let cx = width
  let cy = 0

  circle(ax, ay, 10)
  circle(bx, by, 10)
  circle(cx, cy, 10)
  line(ax, ay, bx, by)
  line(cx, cy, bx, by)

  let n = map(mouseY, 0, height, 0, 50, true)

  for (i = 0; i <= n; i++) {
    let x_1 = map(i, 0, n, ax, bx, true)
    let y_1 = map(i, 0, n, ay, by, true)
    let x_2 = map(i, 0, n, bx, cx, true)
    let y_2 = map(i, 0, n, by, cy, true)
    line(x_1, y_1, x_2, y_2)
    // circle(x_1, y_1, 10)
    // circle(x_2, y_2, 10)
  }
}

