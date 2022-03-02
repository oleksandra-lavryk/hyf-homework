const canvas = document.querySelector("canvas");
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

const greenCircle = new Circle(
  window.innerWidth / 2,
  window.innerHeight / 2,
  50,
  0,
  2 * Math.PI,
  "green"
);
greenCircle.draw();

// Every 1s create a new circle instance and draw that to the canvas.
setInterval(() => {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  const randomR = Math.floor((Math.random() * window.innerWidth) / 4);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const newRandomCircle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );
  newRandomCircle.draw();
}, 1000);

// Follow the mouse creating circles
document.addEventListener("mousemove", (e) => {
  const cursorX = e.pageX;
  const cursorY = e.pageY;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const newCursorCircle = new Circle(
    cursorX,
    cursorY,
    30,
    0,
    2 * Math.PI,
    randomColor
  );
  newCursorCircle.draw();
});
