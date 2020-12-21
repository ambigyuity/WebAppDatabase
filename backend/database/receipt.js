const db = require("./connection");

module.exports = class Receipt {
  static genReceiptNo() {
    return Math.random().toString(16).substr(2, 10);
  }

  static selectReceiptByCustomerId(custId) {
    return db.query("SELECT * from cx8o24.receipt where customer_id = $1", [custId]);
  }

};
