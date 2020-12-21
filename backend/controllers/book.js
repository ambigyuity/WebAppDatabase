const FlightsDb = require("../database/flight");
const BooksDb = require("../database/book");

exports.getBookingRef = async (req, res, next) => {
  try {
    let bookRef = BooksDb.generateBookingRef();
    console.log(bookRef);
    
    res.json({
      bookRef,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postCreateBooking = async (req, res, next) => {
  try {
    const type = req.body.type;
    const fromAirport = req.body.fromAirport;
    const toAirport = req.body.toAirport;
    const deptDate = req.body.deptDate;
    const returnDate = req.body.returnDate;
    const numAdults = req.body.numAdults;
    const numChildren = req.body.numChildren;


    let selectRespGoing = await FlightsDb.selectFlightsGoing(
      fromAirport,
      toAirport,
      deptDate
    );
    let selectRespReturning = await FlightsDb.selectFlightsReturning(
      toAirport,
      fromAirport,
      returnDate
    );
    console.log("GOING: ", selectRespGoing.rows);
    console.log("RETURNING: ", selectRespReturning.rows);

    res.send({
      going: selectRespGoing.rows,
      returning: selectRespReturning.rows,
    });
  } catch (err) {
    console.log(err);
  }
};
