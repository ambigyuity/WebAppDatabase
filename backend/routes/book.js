const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book");

router.post("/create", bookController.postCreateBooking);

router.get("/bookRef", bookController.getBookingRef);

module.exports = router;
