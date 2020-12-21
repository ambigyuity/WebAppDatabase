const db = require("./connection");

module.exports = class Book {
  static generateBookingRef(){
    return Math.random().toString(36).substr(2, 6);
  }
};
