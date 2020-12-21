const db = require("./connection");

module.exports = class Checkout {
  static genCustomerId() {
    return Math.random().toString(32).substr(2, 10);
  }

  static selectTicketByBookRef(bookRef) {
    return db.query("SELECT * from cx8o24.ticket where book_ref = $1", [bookRef]);
  }
  static selectWaitlistByBookRef(bookRef) {
    return db.query("SELECT * from cx8o24.waitlist where book_ref = $1", [bookRef]);
  }
  static selectBoardingPassByTicketNo(tickNo) {
    return db.query("SELECT * from cx8o24.boarding_passes where ticket_no = $1", [tickNo]);
  }

  static createTransactionFunction() {
    return db.query(
      `
DROP TYPE IF EXISTS pt CASCADE;
CREATE TYPE pt AS (
  passenger_id VARCHAR(20),first_name TEXT,
  last_name TEXT, address TEXT,
  passport_license text,email TEXT,
  phone text,city TEXT,
  state VARCHAR(2),country VARCHAR(3),
  zip INTEGER, bag_type text,
  bagCost numeric(10,2), bagQuantity integer,
  bagPrice numeric(10,2)
);

CREATE OR REPLACE FUNCTION
      transaction(
          type text,
          bookRef CHARACTER(6),
          bookDate TIMESTAMP,
          totalAmount NUMERIC(10, 2),
          num_Adults INT,
          num_Children INT,
          goingFlightId INT,
          returnFlightId INT,
          passengers pt[],
          totalPassengers INT,
          customerID varchar(10),
          cust_first_name text,
          cust_last_name text,
          cust_address text,
          cust_city text,
          cust_zip integer,
          cust_state varchar(2),
          cust_country varchar(3),
          cust_email text,
          cust_phone text,
          cardholderName text,
          cardNo text,
          exp text,
          cvvz text,
          receiptNo varchar(10),
          tax numeric(4,2),
          discounts numeric(4,2),
          seatCost numeric(10,2),
          baggageCost numeric(10,2),
          flightCost numeric(10,2),
          totalCost numeric(10,2),
          fareConditions character varying(10)
      ) RETURNS void AS
  $BODY$

        DECLARE
          goingSeats INTEGER;returnSeats INTEGER;
          pass_passenger_id VARCHAR(20);pass_first_name TEXT;
          pass_last_name TEXT;pass_address TEXT;
          pass_passport_license VARCHAR(12);
          pass_email TEXT; pass_phone VARCHAR(10);
          pass_city TEXT; pass_state VARCHAR(2);
          pass_country VARCHAR(3);pass_zip INTEGER;
          ticketNo character(13); baggageNo character varying(13);
          bag_Type text;bagCost numeric(10,2); bagQuantity integer;bagPrice numeric(10,2);
          seatNo character varying(3); boarding_no integer;
          arrival_gate character(2); arrival_time timestamp with time zone;
		  goinglistPosition INTEGER; returnlistPosition INTEGER;
        BEGIN
            INSERT INTO bookings(
              book_ref,book_date,total_amount,numAdults,numChildren)
              VALUES (
                bookRef,bookDate,totalAmount,
                  num_Adults,num_Children);

            FOREACH
              pass_passenger_id,pass_first_name,pass_last_name,
              pass_address,pass_passport_license,pass_email,
              pass_phone,pass_city,pass_state,pass_country,pass_zip
            IN array passengers
            LOOP
              INSERT INTO passenger(
                  passenger_id,book_ref,first_name,last_name,
                  address,passport_license,email,
                  phone,city,state,country,zip)
              VALUES (
                  pass_passenger_id, bookRef,pass_first_name,
                  pass_last_name,pass_address,pass_passport_license,
                  pass_email,pass_phone,pass_city,pass_state,
                  pass_country,pass_zip);
            END LOOP;


            INSERT INTO customer_info(
                        customer_id,first_name,last_name,address,city,zip,
                        state,country,email,phone,book_ref)
            VALUES(
              customerID,cust_first_name,cust_last_name,cust_address,
              cust_city, cust_zip, cust_state,cust_country,
              cust_email,cust_phone,bookRef
            );


            INSERT INTO card_info(customer_id,cardholder_name,card_no,expiration,cvv)
            VALUES(customerID,cardholderName, cardNo, exp, cvvz);

            INSERT INTO receipt(receipt_no,customer_id,taxes,discount,seat_cost,baggage_cost,flight_cost,total_cost)
            VALUES(receiptNo, customerID, tax, discounts, seatCost, baggageCost, flightCost, totalCost);


            SELECT seats_available FROM flights
              WHERE flight_id = goingFlightId FOR UPDATE INTO goingSeats;
            SELECT seats_available FROM flights
              WHERE flight_id = returnFlightId  FOR UPDATE INTO returnSeats;

              IF 
              ((type = 'round_trip' 
                AND goingSeats > totalPassengers 
                AND returnSeats > totalPassengers) OR 
                (type = 'one_way' 
                  AND goingSeats > totalPassengers))
                THEN
                    FOREACH
                    pass_passenger_id,pass_first_name,pass_last_name,
                    pass_address,pass_passport_license,pass_email,
                    pass_phone,pass_city,pass_state,pass_country,pass_zip,
                    bag_type, bagCost, bagQuantity, bagPrice
                    IN array passengers
                    LOOP
                          select substr(md5(random()::text), 0, 13)  INTO ticketNo;
                          select substr(md5(random()::text), 0, 13)  INTO baggageNo;

                          select substr(md5(random()::text), 0, 2)  INTO arrival_gate;
                          select scheduled_departure from flights
                           where flight_id= goingFlightId  INTO arrival_time;
                          select floor(random()*100-1)  INTO boarding_no;

                          INSERT INTO ticket(ticket_no,book_ref,passenger_id)
                          VALUES (ticketNo, bookRef, pass_passenger_id);

                          INSERT INTO baggings(baggage_no, bagtype, cost, quantity, price)
                          VALUES(baggageNo,bag_type, bagCost, bagQuantity, bagPrice);

                          INSERT INTO boarding_passes(ticket_no, seat_no, baggage_no, arrival_gate, arrival_time, boarding_no)
                          VALUES(ticketNo, seatNo, baggageNo, arrival_gate, arrival_time, boarding_no);

                          INSERT INTO ticket_flights(ticket_no, flight_id, fare_conditions, amount)
                          VALUES(ticketNo, goingFlightId, fareConditions, totalCost);
						  
			  UPDATE flights SET seats_available =  seats_available - 1, seats_booked = seats_booked + 1 
                              WHERE seats_available > 0 AND flight_id = goingFlightId;
						
			  UPDATE flights SET seats_available =  seats_available - 1, seats_booked = seats_booked + 1 
                              WHERE seats_available > 0 AND flight_id = returnFlightId;
										
                    END LOOP;
			  ELSE
			  	select count(*)+1 from waitlist where flight_id= goingFlightId  INTO goinglistPosition;
				select count(*)+1 from waitlist where flight_id= returnFlightId  INTO returnlistPosition;
				
			  	INSERT INTO waitlist
				VALUES(bookRef, goingFlightID, goinglistPosition);
				
				INSERT INTO waitlist
				VALUES(bookRef, returnFlightID, returnlistPosition);
					

              END IF;
        END;
  $BODY$
LANGUAGE 'plpgsql';
`
    );
  }
};
