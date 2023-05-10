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
    constructor(x, y, width, height, lineWidth, strokeStyle, fillStyle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
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

var FLOOR = new Rectangle(0, 0, canvas.width, canvas.height, rectangleLineWidth, rectangleStrokeStyle, rectangleFillStyle);


function draw(timestamp) {
    requestAnimationFrame(draw);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    for (var i = 0; i < rectangles.length; i++) {
        var rectangle = rectangles[i];
        // Apply Physics

        // Draw
        rectangle.draw();
    }

}

requestAnimationFrame(draw);
