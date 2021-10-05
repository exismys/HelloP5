function setup() {
    createCanvas(windowWidth, windowHeight);
    
    background(51);
}
  
function draw() {
    stroke(random(255), 50);
    strokeWeight(2);

    // translate(width / 4, height / 2);
    // let v = createVector(random(-100, 100), random(-100, 100));
    // line(0, 0, v.x, v.y);

    // stroke(255, 50);
    // translate(width / 2, 0);
    // let u = p5.Vector.random2D();
    // u.mult(random(-100, 100));
    // line(0, 0, u.x, u.y);

    // Mouse tracking vector
    translate(width/2, height/2);
    let pos = createVector(width/2, height/2);
    let mouse = createVector(mouseX, mouseY);
    let centerToMouse = p5.Vector.sub(mouse, pos);
    line(0, 0, centerToMouse.x, centerToMouse.y);

}