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
    for (key in queryParams) {
      switch (key) {
        case "maxPrice":
          const maxPrice = Number(queryParams[key]);
          if (!isNaN(maxPrice) && maxPrice) {
            filteredMeals = filteredMeals.filter(
              (item) => item.price < maxPrice
            );
            checkParam = true;
          }
          break;
        case "limit":
          const limit = Number(queryParams[key]);
          if (!isNaN(limit)) {
            filteredMeals = filteredMeals.slice(0, limit);
            checkParam = true;
          }
          break;
        case "title":
          if (queryParams[key]) {
            filteredMeals = filteredMeals.filter((item) =>
              item.title.toLowerCase().includes(queryParams[key].toLowerCase())
            );
            checkParam = true;
          }
          break;
        case "createdAfter":
          const createdAfter = new Date(queryParams[key]);
          if (createdAfter != "Invalid Date") {
            filteredMeals = filteredMeals.filter((item) => {
              const itemDate = new Date(item.createdAt);
              return itemDate > createdAfter;
            });
            checkParam = true;
          }
          break;
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
    let meal = {};
    meals.forEach((item) => {
      if (item.id === mealid) {
        meal = item;
      }
    });
    response.send(meal);
  } else {
    response.status(400).json({ error: "Invalid params" });
  }
});

module.exports = router;
