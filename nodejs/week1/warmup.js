console.log("inside warmup file");

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return parseFloat((this.radius * 2).toFixed(2));
  }

  getCircumference() {
    return parseFloat((this.radius * 2 * 3.1415).toFixed(2));
  }
  getArea() {
    return parseFloat((this.radius * this.radius * 3.1415).toFixed(2));
  }
}

const circleSmall = new Circle(10);
const circleMedium = new Circle(30);
const circleLarge = new Circle(30);

console.log("Small circle diameter " + circleSmall.getDiameter());
console.log("Small circle circumference " + circleSmall.getCircumference());
console.log("Small circle area " + circleSmall.getArea());

console.log("Medium circle diameter " + circleMedium.getDiameter());
console.log("Medium circle circumference " + circleMedium.getCircumference());
console.log("Medium circle area " + circleMedium.getArea());

console.log("Large circle diameter " + circleLarge.getDiameter());
console.log("Large circle circumference " + circleLarge.getCircumference());
console.log("Large circle area " + circleLarge.getArea());
