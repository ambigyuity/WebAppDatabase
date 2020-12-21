const db = require("./connection");

module.exports = class Flight {
  static selectFlightsByRoundAirportAndDate(fromAirport, toAirport, date) {
    return db.query(
      "SELECT * FROM cx8o24.flights WHERE \
              departure_airport = $1 AND \
                      arrival_airport = $2 AND \
                        scheduled_departure::date = $3 AND \
                            scheduled_arrival::date = $3",
      [fromAirport, toAirport, date]
    );
  }
  static selectFlightsByRoundAirportGoing(fromAirport, toAirport) {
    return db.query(
      "SELECT DISTINCT g.*  FROM cx8o24.flights g, cx8o24.flights r \
         WHERE g.departure_airport = $1 AND g.arrival_airport = $2 \
            AND r.departure_airport = $2 AND r.arrival_airport = $1 \
              AND g.scheduled_departure::date < r.scheduled_departure::date",
      [fromAirport, toAirport]
    );
  }
  static selectFlightsByRoundAirportReturning(fromAirport, toAirport) {
    return db.query(
      "SELECT DISTINCT g.*  FROM cx8o24.flights g, cx8o24.flights r \
         WHERE g.departure_airport = $1 AND g.arrival_airport = $2 \
            AND r.departure_airport = $2 AND r.arrival_airport = $1 \
              AND g.scheduled_departure::date > r.scheduled_departure::date",
      [fromAirport, toAirport]
    );
  }

  static selectFlightsByOneAirport(fromAirport) {
    return db.query(
      "SELECT * FROM cx8o24.flights WHERE \
              departure_airport = $1",
      [fromAirport]
    );
  }

  static selectFlightsByOneAirportAndOneDate(fromAirport, deptDate) {
    return db.query(
      "SELECT * FROM cx8o24.flights WHERE \
              departure_airport = $1 AND \
                scheduled_departure::date = $2",
      [fromAirport, deptDate]
    );
  }

  static selectAllDeptAirport() {
    return db.query("SELECT DISTINCT departure_airport FROM cx8o24.flights");
  }

  static selectAllFlightsByDeptAirport(deptApt) {  
    return db.query("SELECT * FROM cx8o24.flights WHERE departure_airport = $1", [
      deptApt,
    ]);
  }

  static selectFlightPriceByID(flight_id) {
    return db.query("SELECT price FROM cx8o24.flights WHERE flight_id = $1", [
      flight_id,
    ]);
  }

  static selectIndirectFlightsByFlightId(flight_id) {
    return db.query("SELECT * FROM cx8o24.indirect WHERE flight_id = $1", [
      flight_id,
    ]);
  }
  static getSelectAllFlightsSeatsByFlightId(flight_id) {
    return db.query("SELECT * FROM cx8o24.seats WHERE flight_id = $1", [
      flight_id,
    ]);
  }
};

