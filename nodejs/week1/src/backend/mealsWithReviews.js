const meals = require("./data/meals");
const reviews = require("./data/reviews");

const resultArr = [];
meals.forEach((meal) => {
  const newMeal = meal;
  newMeal["reviews"] = [];
  reviews.forEach((review) => {
    if (review.mealId === meal.id) {
      newMeal["reviews"].push(review);
    }
  });
  resultArr.push(newMeal);
});

module.exports.mealsWithReviews = resultArr;
