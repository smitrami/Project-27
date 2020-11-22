class rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options =
        {
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }
        };

        this.rope = Constraint.create(options);
        World.add(this.rope, World);
    }
    display() {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}