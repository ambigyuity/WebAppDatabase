const db = require("./connection");

module.exports = class Passenger {
  static genPassengerId() {
    return Math.random().toString(16).substr(2, 20);
  }

  static selectPassengersByBookRef(bookRef) {
    return db.query("SELECT * from cx8o24.passenger where book_ref = $1", [bookRef]);
  }

  static updateBoardingStatusByTicketNo(ticketNo) {
    return db.query("UPDATE cx8o24.boarding_passes \
                      SET checkin = TRUE \
                       where ticket_no = $1", [ticketNo]);
  }

};
