function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255), 100);
  circle(mouseX, mouseY, 20)
}