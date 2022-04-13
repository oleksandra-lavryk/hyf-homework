const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  response.send(reviews);
});

router.get("/:id", async (request, response) => {
  const reviewId = Number(request.params.id);
  if (!isNaN(reviewId) && reviewId) {
    const review = reviews.find((review) => review.id === reviewId);
    if (review) {
      response.send(review);
    } else {
      response.status(400).json({ error: "Not founded" });
    }
  } else {
    response.status(400).json({ error: "Invalid data" });
  }
});

module.exports = router;
