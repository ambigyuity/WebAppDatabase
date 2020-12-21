const express = require("express");
const router = express.Router();

const flightController = require("../controllers/flight");

router.post(
  "/round-select-airport-date",
  flightController.postSelectFlightsByRoundAirportAndDate
);
router.post(
  "/round-select-airport",
  flightController.postSelectFlightsByRoundAirport
);

router.post(
  "/one-select-airport-date",
  flightController.postSelectFlightsByOneAirportAndDate
);
router.post(
  "/one-select-airport",
  flightController.postSelectFlightsByOneAirport
);

router.post
(
  "/select-all-flights-deptapt",
  flightController.postSelectAllFlightsByDeptApt
);

router.get(
  "/select-all-deptapt",
  flightController.getSelectAllDeptApt
);

router.post(
  "/select-all-flights-seats",
  flightController.getSelectAllFlightsSeats
);

module.exports = router;
