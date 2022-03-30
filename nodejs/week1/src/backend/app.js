const express = require("express");
const app = express();

const reservations = require("./data/reservations");
const { mealsWithReviews } = require("./mealsWithReviews");

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});

app.get("/meal", async (request, response) => {
  const randNum = Math.floor(Math.random() * mealsWithReviews.length);
  response.send(mealsWithReviews[randNum]);
});

app.get("/cheap-meals", async (request, response) => {
  const cheapMeal = mealsWithReviews.filter((meal) => meal.price < 60);
  response.send(cheapMeal);
});

app.get("/large-meals", async (request, response) => {
  const largeMeal = mealsWithReviews.filter(
    (meal) => meal.maxNumberOfGuests > 2
  );
  response.send(largeMeal);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  const randNum = Math.floor(Math.random() * reservations.length);
  response.send(reservations[randNum]);
});

module.exports = app;
