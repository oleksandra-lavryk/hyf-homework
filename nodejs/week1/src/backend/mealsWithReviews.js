const meals = require("./data/meals");
const reviews = require("./data/reviews");

meals.forEach((meal) => {
  meal["reviews"] = [];
  reviews.forEach((review) => {
    if (review.mealId === meal.id) {
      meal["reviews"].push(review);
    }
  });
});

module.exports.mealsWithReviews = meals;
