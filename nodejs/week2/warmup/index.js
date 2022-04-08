const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
  const firstNum = req.query.first;
  const secondNum = req.query.second;
  if (firstNum && secondNum) {
    const result = Number(firstNum) + Number(secondNum);
    res.send(result.toString());
  } else {
    res.send("Invalid or incomplete data");
  }
});

app.get("/numbers/multiply/:fisrtnumber/:secondnumber", (req, res) => {
  const firstNum = req.params.fisrtnumber;
  const secondNum = req.params.secondnumber;
  if (firstNum && secondNum && !isNaN(firstNum) && !isNaN(secondNum)) {
    const result = Number(firstNum) * Number(secondNum);
    res.send(result.toString());
  } else {
    res.send("Invalid data");
  }
});

app.listen(3001, () => console.log(`Calculator:listening on port 3001`));
