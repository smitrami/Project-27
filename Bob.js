class Bob {
    constructor(x, y, radius) {
        var options =
        {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(this.body, World);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(1.5);
        fill("blue");
        ellipse(5, 20, this.radius);
        pop();
    }
}