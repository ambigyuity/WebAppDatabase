const FlightsDb = require("../database/flight");
const CheckoutDb = require("../database/checkout");
const Passenger = require("../database/passenger");
const Receipt = require("../database/receipt");
const db = require("../database/connection");

exports.postCompleteCheckout = async (req, res, next) => {
  try {
    console.log(req.body.frontendInfo);
    const data = req.body.frontendInfo;
    const total = req.body.total;
    let totalSeatCost = 0;
    let totalBaggingCost = 0;
    let ptString = "";

    for (passenger of data.passengersInfo) {
      if (passenger.seatGoing.price)
        totalSeatCost += Number(passenger.seatGoing.price);
      if (passenger.seatReturning.price)
        totalSeatCost += Number(passenger.seatReturning.price);

      let bagCost = 0;
      let bagQuantity = 0;
      if (passenger.bagging.carryOn) {
        bagCost +=
          passenger.bagging.carryOn.quantity * passenger.bagging.carryOn.price;
        passenger.bagging.checked.quantity * passenger.bagging.checked.price;
        bagQuantity += Number(passenger.bagging.carryOn.quantity);
        Number(passenger.bagging.checked.quantity);
      }
      bagQuantity = 0;
      if (passenger.bagging.checked) {
        bagCost +=
          passenger.bagging.checked.quantity * passenger.bagging.checked.price;
        bagQuantity += Number(passenger.bagging.checked.quantity);
      }
      totalBaggingCost += bagCost;

      ptString += `"(${Passenger.genPassengerId()},${passenger.firstName},${
        passenger.lastName
      },${passenger.address},${passenger.passLicenseNo},${passenger.email},${
        passenger.phone
      },${passenger.city},${passenger.state},${passenger.country},${
        passenger.zip
      },${
        totalBaggingCost == 0 ? "simple" : "custom"
      },${totalBaggingCost},${bagQuantity},${totalBaggingCost})",`;
      // ptString += `(${Passenger.genPassengerId()},${passenger.firstName},${passenger.lastName}, ${passenger.address},${passenger.Id},${passenger.email},${passenger.phone},${passenger.city},${passenger.state},${passenger.country},${passenger.zip}, ${totalBaggingCost == 0 ? "simple" : "custom"},${totalBaggingCost},${bagQuantity},${totalBaggingCost})`;
    }

    let flightCost = Number(data.selectedFlights.goingFlight.price);

    if (data.selectedFlights.returningFlight)
      flightCost += Number(data.selectedFlights.returningFlight.price);

    let totalPassengers = Number(data.booking.numAdults) + Number(data.booking.numChildren);
    flightCost *= totalPassengers;
    flightCost = flightCost.toFixed(2);

    console.log(flightCost)

    console.log("{" + ptString.slice(0, -1) + "}");
    let customerId = CheckoutDb.genCustomerId();
    let receiptId = Receipt.genReceiptNo();

    await db.query(
      `select * from cx8o24.transaction(
      $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
      $11,$12,$13,$14,$15,$16,$17,$18,$19,$20,
      $21,$22,$23,$24,$25,$26,$27,$28,$29,$30,
      $31, $32
    )`,
      [
        data.booking.type,
        data.booking.bookRef,
        new Date(),
        total.totalCost,
        data.booking.numAdults,
        data.booking.numChildren,
        data.selectedFlights.goingFlight.flight_id,

        data.selectedFlights.returningFlight
          ? data.selectedFlights.returningFlight.flight_id
          : null,
        "{" + ptString.slice(0, -1) + "}",
        data.passengersInfo.length,
        customerId,
        data.customerInfo.firstName,
        data.customerInfo.lastName,
        data.customerInfo.address,
        data.customerInfo.city,
        data.customerInfo.zip,
        data.customerInfo.state,
        data.customerInfo.country,
        data.customerInfo.email,
        data.customerInfo.phone,
        data.customerInfo.nameOnCard,
        data.customerInfo.cardNumber,
        data.customerInfo.expDate,
        data.customerInfo.securityCode,
        receiptId,
        0.08,
        10,
        totalSeatCost,
        totalBaggingCost,
        flightCost,
        total.totalCost,
        "economy",
      ]
    );

    let isSuccess = await CheckoutDb.selectTicketByBookRef(
      data.booking.bookRef
    );
    let passengers = await Passenger.selectPassengersByBookRef(
      data.booking.bookRef
    );
    let receipt = await Receipt.selectReceiptByCustomerId(customerId);

    if (isSuccess.rows.length > 0) {
      let boardingPasses = [];
      for (const f of isSuccess.rows) {
        let boardingPass = await CheckoutDb.selectBoardingPassByTicketNo(
          f.ticket_no
        );
        boardingPasses.push(boardingPass.rows);
      }
      res.json({
        message: "success",
        bookingRef: data.booking.bookRef,
        receipt: receipt.rows,
        passengers: passengers.rows,
        ticket: isSuccess.rows,
        boardingPasses: boardingPasses,
      });
    } else {
      let waitlist = await CheckoutDb.selectWaitlistByBookRef(
        data.booking.bookRef
      );
      res.json({
        message: "waitlist",
        waitlist: waitlist.rows,
        receipt: receipt.rows,
        passengers: passengers.rows,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.getCheckoutTaxes = async (req, res, next) => {
  try {
    res.json({ taxes: 0.08 });
  } catch (error) {
    console.log(error);
  }
};

exports.postCheckoutTotal = async (req, res, next) => {
  let bookingType = req.body.bookingType;
  let numAdults = req.body.numAdults;
  let numChildren = req.body.numChildren;
  let goingFlightId = req.body.goingFlight;
  let returnFlightId = req.body.returnFlight;
  let promo = req.body.promo;
  let passengersInfo = req.body.passengers;
  let tax = 0.08;
  let discount = 10;
  try {
    console.log(
      "bookingType: ",
      bookingType,
      "\nnumAdults: ",
      numAdults,
      "\nnumChildren: ",
      numChildren,
      "\ngoingFlight: ",
      goingFlightId,
      "\nreturnFlight: ",
      returnFlightId,
      "\npromo: ",
      promo
    );

    let goingFlight = await FlightsDb.selectFlightPriceByID(goingFlightId);
    let goingFlightPrice = Number(goingFlight.rows[0].price);
    let flightCost = goingFlightPrice;

    let returningFlight = null;
    let returningFlightPrice = 0;

    if (bookingType == "round_trip") {
      returningFlight = await FlightsDb.selectFlightPriceByID(returnFlightId);
      returningFlightPrice = Number(returningFlight.rows[0].price);
      flightCost += returningFlightPrice;
    }
    let totalSeatCost = 0;
    let totalBaggingCost = 0;
    for (passenger of passengersInfo) {
      if (passenger.seatGoing.price) {
        totalSeatCost += Number(passenger.seatGoing.price);
        console.log(totalSeatCost);
      }
      if (passenger.seatReturning.price) {
        totalSeatCost += Number(passenger.seatReturning.price);
        console.log(totalSeatCost);
      }
      let bagCost = 0;
      let bagQuantity = 0;
      if (passenger.bagging.carryOn) {
        bagCost +=
          passenger.bagging.carryOn.quantity * passenger.bagging.carryOn.price;
        passenger.bagging.checked.quantity * passenger.bagging.checked.price;
        bagQuantity += Number(passenger.bagging.carryOn.quantity);
        Number(passenger.bagging.checked.quantity);
      }
      bagQuantity = 0;
      if (passenger.bagging.checked) {
        bagCost +=
          passenger.bagging.checked.quantity * passenger.bagging.checked.price;
        bagQuantity += Number(passenger.bagging.checked.quantity);
      }
      totalBaggingCost += bagCost;
    }

    let totalPassengers = Number(numAdults) + Number(numChildren);
    let totalWithTax = totalPassengers * flightCost * (1 + tax);
    let finalTotal = totalWithTax - discount + totalSeatCost + totalBaggingCost;
    // console.log(totalSeatCost);
    // console.log(totalBaggingCost);

    res.json({
      total: {
        goingFlightPrice: goingFlightPrice,
        returningFlightPrice: returningFlightPrice,
        seatCost: totalSeatCost,
        baggingCost: totalBaggingCost,
        tax: tax,
        discount: discount,
        promo: promo,
        totalCost: finalTotal.toFixed(2),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
