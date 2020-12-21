const PassengerDb = require("../database/passenger");

exports.postCheckin = async (req, res, next) => {
  try {
    let updateTicket = await PassengerDb.updateBoardingStatusByTicketNo(
      req.body.ticketNo
    );
    res.json({
      updateTicket: updateTicket.rows,
    });
  } catch (error) {
    console.log(error);
  }
};
