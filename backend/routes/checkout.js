const express = require('express')
const router = express.Router();

const checkoutController = require('../controllers/checkout');


router.post('/complete', checkoutController.postCompleteCheckout);
router.get('/taxes', checkoutController.getCheckoutTaxes);
router.post('/total', checkoutController.postCheckoutTotal);




module.exports = router
