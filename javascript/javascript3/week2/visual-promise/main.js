const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redBoxTargetX = document.querySelector(
  "ul.targets li:nth-child(1)"
).offsetLeft;
const redBoxTargetY = document.querySelector(
  "ul.targets li:nth-child(1)"
).offsetTop;
const blueBoxTargetX = document.querySelector(
  "ul.targets li:nth-child(2)"
).offsetLeft;
const blueBoxTargetY = document.querySelector(
  "ul.targets li:nth-child(2)"
).offsetTop;

const greenBoxTargetX = document.querySelector(
  "ul.targets li:nth-child(3)"
).offsetLeft;
const greenBoxTargetY = document.querySelector(
  "ul.targets li:nth-child(3)"
).offsetTop;

function translateOneByOne() {
  moveElement(redBox, {
    x: redBoxTargetX,
    y: redBoxTargetY,
  })
    .then(() => console.log("Red box has been moved"))
    .then(() =>
      moveElement(blueBox, {
        x: blueBoxTargetX,
        y: blueBoxTargetY,
      })
    )
    .then(() => console.log("Blue box has been moved"))
    .then(() =>
      moveElement(greenBox, {
        x: greenBoxTargetX,
        y: greenBoxTargetY,
      })
    )
    .then(() => console.log("Green box has been moved"));
}

function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, {
      x: redBoxTargetX,
      y: redBoxTargetY,
    }),
    moveElement(blueBox, {
      x: blueBoxTargetX,
      y: blueBoxTargetY,
    }),
    moveElement(greenBox, {
      x: greenBoxTargetX,
      y: greenBoxTargetY,
    }),
  ]).then(() => console.log("All boxes have been moved"));
}

translateOneByOne(); //run moving boxing one by one

// translateAllAtOnce(); //run moving boxing same time
