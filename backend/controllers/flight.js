const FlightsDb = require("../database/flight");

async function getIndirectFlights(flightRows) {
  for (const f of flightRows) {
    if (f.stops) {
      let indirectFlights = await FlightsDb.selectIndirectFlightsByFlightId(
        f.flight_id
      );
      f.indirectFlights = indirectFlights.rows;
    } else {
      f.indirectFlights = [];
    }
  }
}

exports.postSelectFlightsByRoundAirportAndDate = async (req, res, next) => {
  try {
    const fromAirport = req.body.bookingDetails.fromAirport;
    const toAirport = req.body.bookingDetails.toAirport;
    const deptDate = req.body.bookingDetails.deptDate;
    const returnDate = req.body.bookingDetails.returnDate;
    console.log(req.body.bookingDetails);

    let selectRespGoing = await FlightsDb.selectFlightsByRoundAirportAndDate(
      fromAirport,
      toAirport,
      deptDate
    );
    let selectRespReturning = await FlightsDb.selectFlightsByRoundAirportAndDate(
      toAirport,
      fromAirport,
      returnDate
    );

    await getIndirectFlights(selectRespGoing.rows);
    await getIndirectFlights(selectRespReturning.rows);

    console.log(selectRespGoing.rows);
    console.log(selectRespReturning.rows);

    res.json({
      flightData: [
        {
          going: true,
          returning: false,
          from: fromAirport,
          to: toAirport,
          flights: selectRespGoing.rows,
        },
        {
          going: false,
          returning: true,
          from: toAirport,
          to: fromAirport,
          flights: selectRespReturning.rows,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postSelectFlightsByRoundAirport = async (req, res, next) => {
  try {
    const fromAirport = req.body.bookingDetails.fromAirport;
    const toAirport = req.body.bookingDetails.toAirport;

    console.log(req.body.bookingDetails);

    /* check if they are flights where return date is after going date, select
    all flights that  are going */
    let selectRespGoing = await FlightsDb.selectFlightsByRoundAirportGoing(
      fromAirport,
      toAirport
    );
    // console.log(selectRespGoing.rows);

    /* if they are flights where return date is after going date, select
    all flights that  are returning */

    let selectRespReturning = null;
    if (selectRespGoing.rows.length > 0) {
      selectRespReturning = await FlightsDb.selectFlightsByRoundAirportReturning(
        toAirport,
        fromAirport
      );
      // console.log(selectRespReturning.rows);
    }

    await getIndirectFlights(selectRespGoing.rows);
    if (selectRespReturning) {
      await getIndirectFlights(selectRespReturning.rows);
      console.log(selectRespReturning.rows);
    }
    console.log(selectRespGoing.rows);

    res.json({
      flightData: [
        {
          going: true,
          returning: false,
          from: fromAirport,
          to: toAirport,
          flights: selectRespGoing.rows,
        },
        {
          going: false,
          returning: true,
          from: toAirport,
          to: fromAirport,
          flights: selectRespReturning == null ? [] : selectRespReturning.rows,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postSelectFlightsByOneAirportAndDate = async (req, res, next) => {
  try {
    const fromAirport = req.body.bookingDetails.fromAirport;
    const deptDate = req.body.bookingDetails.deptDate;

    let selectRespGoing = await FlightsDb.selectFlightsByOneAirportAndOneDate(
      fromAirport,
      deptDate
    );

    await getIndirectFlights(selectRespGoing.rows);
    console.log(selectRespGoing.rows);

    res.json({
      flightData: [
        {
          going: true,
          returning: false,
          from: fromAirport,
          flights: selectRespGoing.rows,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postSelectFlightsByOneAirport = async (req, res, next) => {
  try {
    const fromAirport = req.body.bookingDetails.fromAirport;
    let selectRespGoing = await FlightsDb.selectFlightsByOneAirport(
      fromAirport
    );

    await getIndirectFlights(selectRespGoing.rows);
    console.log(selectRespGoing.rows);

    res.json({
      flightData: [
        {
          going: true,
          returning: false,
          from: fromAirport,
          flights: selectRespGoing.rows,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getSelectAllDeptApt = async (req, res, next) => {
  try {
    let selectRespAllDeptApt = await FlightsDb.selectAllDeptAirport();

    // console.log(selectRespAllDeptApt.rows);

    res.json({
      deptApts: selectRespAllDeptApt.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postSelectAllFlightsByDeptApt = async (req, res, next) => {
  try {
    let selectRespAllFlights = await FlightsDb.selectAllFlightsByDeptAirport(
      req.body.deptApt.departure_airport
    );
    console.log(selectRespAllFlights.rows);

    res.json({
      flights: selectRespAllFlights.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getSelectAllFlightsSeats = async (req, res, next) => {
  try {
    let selectRespAllFlightsGoing = await FlightsDb.getSelectAllFlightsSeatsByFlightId(
      req.body.goingFlightId
    );
    let selectRespAllFlightsReturning = null;
    if (req.body.type == "round_trip") {
      selectRespAllFlightsReturning = await FlightsDb.getSelectAllFlightsSeatsByFlightId(
        req.body.returningFlightId
      );
      console.log(selectRespAllFlightsReturning.rows);
    }
    console.log(selectRespAllFlightsGoing.rows);

    res.json({
      seats: [
        {
          from: req.body.fromAirport,
          to: req.body.toAirport,
          going: true,
          returning: false,
          seats: selectRespAllFlightsGoing.rows,
        },
        {
          from: req.body.toAirport,
          to: req.body.fromAirport,
          going: false,
          returning: true,
          seats:
            selectRespAllFlightsReturning == null
              ? []
              : selectRespAllFlightsReturning.rows,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
};
