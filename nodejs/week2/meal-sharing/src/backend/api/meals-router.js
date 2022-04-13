const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  let filteredMeals = meals;
  const queryParams = request.query;

  if (Object.keys(queryParams).length === 0) {
    response.send(meals);
  } else {
    let checkParam = false;
    if (queryParams["maxPrice"] && !isNaN(Number(queryParams["maxPrice"]))) {
      filteredMeals = filteredMeals.filter(
        (item) => item.price < Number(queryParams["maxPrice"])
      );
      checkParam = true;
    }
    if (queryParams["title"]) {
      filteredMeals = filteredMeals.filter((item) =>
        item.title.toLowerCase().includes(queryParams["title"].toLowerCase())
      );
      checkParam = true;
    }
    if (queryParams["limit"] && !isNaN(Number(queryParams["limit"]))) {
      filteredMeals = filteredMeals.slice(0, queryParams["limit"]);
      checkParam = true;
    }

    if (queryParams["createdAfter"]) {
      const createdAfter = new Date(queryParams["createdAfter"]);
      if (createdAfter != "Invalid Date") {
        filteredMeals = filteredMeals.filter((item) => {
          const itemDate = new Date(item.createdAt);
          return itemDate > createdAfter;
        });
        checkParam = true;
      }
    }

    if (checkParam) {
      response.send(filteredMeals);
    } else {
      response.status(400).json({ error: "Invalid params" });
    }
  }
});

router.get("/:id", async (request, response) => {
  const mealid = Number(request.params.id);
  if (!isNaN(mealid) && mealid) {
    const meal = meals.find((meal) => meal.id === mealid);
    if (meal) {
      response.send(meal);
    } else {
      response.status(400).json({ error: "Not founded" });
    }
  } else {
    response.status(400).json({ error: "Invalid params" });
  }
});

module.exports = router;
