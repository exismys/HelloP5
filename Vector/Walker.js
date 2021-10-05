class Walker {
    constructor(x, y, r = 10) {
        this.pos = createVector(x, y);
        this.vel = createVector(1, -1);
        this.r = r;
    }

    update() {
        this.pos.x = this.pos.x + this.vel.x;
        this.pos.y = this.pos.y + this.vel.y;
    }

    show() {
        stroke(255);
        strokeWeight(2);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }
}