
const express = require('express')
const router = express.Router();

const passengerController = require('../controllers/passenger');

router.post('/checkin', passengerController.postCheckin);

module.exports = router