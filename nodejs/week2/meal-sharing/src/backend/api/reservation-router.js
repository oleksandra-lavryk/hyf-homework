const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  response.send(reservations);
});

router.get("/:id", async (request, response) => {
  const reservationId = Number(request.params.id);
  if (!isNaN(reservationId) && reservationId) {
    const reservation = reservations.find(
      (reservation) => reservation.id === reservationId
    );
    if (reservation) {
      response.send(reservation);
    } else {
      response.status(400).json({ error: "Not founded" });
    }
  } else {
    response.status(400).json({ error: "Invalid data" });
  }
});

module.exports = router;
