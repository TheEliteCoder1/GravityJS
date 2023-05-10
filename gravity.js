var canvas = document.getElementById('Canvas')
ctx = canvas.getContext('2d')


var rectangles = [];
var rectangleWidth = 20;
var rectangleHeight = 20;
var rectangleLineWidth = 5;
var rectangleStrokeStyle = "lightgreen";
var rectangleFillStyle = "red";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const GFORCE = 9.8;
const FLOORMASS = 100;

function getCursorPositionOnMouseClick(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const mx = event.clientX - rect.left
    const my = event.clientY - rect.top
    console.log(mx, my);
    var rectangle = new Rectangle(mx, my, rectangleWidth, rectangleHeight, rectangleLineWidth, rectangleStrokeStyle, rectangleFillStyle);
    rectangles.push(rectangle);
}

// checks for mouse down
canvas.addEventListener('mousedown', function(e) {
    getCursorPositionOnMouseClick(canvas, e);
})

// draw all rectangles using attrs
class Rectangle {
    constructor(x, y, width, height, lineWidth, strokeStyle, fillStyle, mass) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.velocity = {"x": 0, "y": 0};
        this.mass = 10;
    }


    // methods do not need function keyword
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.stroke();
        ctx.fill();
    }   
}

// fills floor space from position (0, 800)
var FLOOR = new Rectangle(0, 800, canvas.width-0, canvas.height-800, rectangleLineWidth, rectangleStrokeStyle, rectangleFillStyle);


function draw(timestamp) {
    requestAnimationFrame(draw);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    for (var i = 0; i < rectangles.length; i++) {
        var rectangle = rectangles[i];
        // Apply Physics
        // Implement F=ma (Applied force) mass * accel
        // normal force stops if force of object is equal
        // if weight is greater, than it will break the other
        // object
        // accel = velocity**time
        // Implement Gravity force G = constant
        // F = G(m1m2)/R2  m = mass, r = distance between
        // both masses

        this.velocity.y = GFORCE*(())

        rectangle.x += rectangle.velocity.x;
        rectangle.y += rectangle.velocity.y;

        // Draw
        rectangle.draw();
    }

    FLOOR.draw();

}

requestAnimationFrame(draw);
