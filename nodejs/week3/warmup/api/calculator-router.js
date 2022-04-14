const express = require("express");
const router = express.Router();

router.get("/", (request, response) => response.send("Calculator main page"));

router.get("/add", (request, response) =>
  makeCalculation(request.query, response, "+", 0)
);

router.get("/multiply", (request, response) =>
  makeCalculation(request.query, response, "*", 1)
);

router.get("/division", (request, response) =>
  makeCalculation(request.query, response, "/")
);
router.get("/subtraction", (request, response) =>
  makeCalculation(request.query, response, "-")
);

router.post("/add", (request, response) => {
  makeCalculation(request.body, response, "+", 0);
});
router.post("/multiply", (request, response) => {
  makeCalculation(request.body, response, "*", 1);
});
router.post("/division", (request, response) => {
  makeCalculation(request.body, response, "/");
});
router.post("/subtraction", (request, response) => {
  makeCalculation(request.body, response, "-");
});

function makeCalculation(requestQuery, response, action, initialValue) {
  if (Object.keys(requestQuery).length === 0) {
    response.send({ Message: "No parameters" });
    return;
  }
  let result;
  switch (action) {
    case "+":
      result = Object.values(requestQuery).reduce(
        (previousValue, currentValue) => {
          if (
            previousValue !== "" &&
            currentValue !== "" &&
            !isNaN(Number(previousValue)) &&
            !isNaN(Number(currentValue))
          ) {
            return Number(previousValue) + Number(currentValue);
          }
        },
        initialValue
      );
      break;
    case "-":
      result = Object.values(requestQuery).reduce(
        (previousValue, currentValue) => {
          if (
            previousValue &&
            currentValue &&
            !isNaN(Number(previousValue)) &&
            !isNaN(Number(currentValue))
          ) {
            return Number(previousValue) - Number(currentValue);
          }
        }
      );
      break;
    case "/":
      result = Object.values(requestQuery).reduce(
        (previousValue, currentValue) => {
          if (
            previousValue &&
            currentValue &&
            previousValue != 0 &&
            currentValue != 0 &&
            !isNaN(Number(previousValue)) &&
            !isNaN(Number(currentValue))
          ) {
            return Number(previousValue) / Number(currentValue);
          }
        }
      );
      break;
    case "*":
      result = Object.values(requestQuery).reduce(
        (previousValue, currentValue) => {
          if (
            previousValue &&
            currentValue &&
            !isNaN(Number(previousValue)) &&
            !isNaN(Number(currentValue))
          ) {
            return Number(previousValue) * Number(currentValue);
          }
        },
        initialValue
      );
      break;
  }
  if (result !== undefined) {
    response.send({ result: result });
  } else {
    response.send({ message: "Invalid data" });
  }
}

module.exports = router;
