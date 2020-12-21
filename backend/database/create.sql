SET SCHEMA 'cx8o24';

DROP TABLE IF EXISTS airport CASCADE;

DROP TABLE IF EXISTS boarding_passes CASCADE;

DROP TABLE IF EXISTS seats CASCADE;

DROP TABLE IF EXISTS aircraft CASCADE;

DROP TABLE IF EXISTS ticket CASCADE;

DROP TABLE IF EXISTS ticket_flights CASCADE;

DROP TABLE IF EXISTS bookings CASCADE;

DROP TABLE IF EXISTS flights CASCADE;

DROP TABLE IF EXISTS boarding CASCADE;

DROP TABLE IF EXISTS baggings CASCADE;

DROP TABLE IF EXISTS waitlist CASCADE;

DROP TABLE IF EXISTS indirect CASCADE;

DROP TABLE IF EXISTS card_info CASCADE;

DROP TABLE IF EXISTS customer_info CASCADE;

DROP TABLE IF EXISTS receipt CASCADE;

DROP TABLE IF EXISTS passenger CASCADE;

DROP TABLE IF EXISTS pilot_detail CASCADE;

DROP TABLE IF EXISTS fuel CASCADE;

DROP TABLE IF EXISTS flight_amenity CASCADE;

DROP TABLE IF EXISTS safety CASCADE;

CREATE TABLE aircraft(
    aircraft_code char(3),
    model char(25),
    RANGE integer,
    PRIMARY KEY(aircraft_code),
    CONSTRAINT "flights_aircraft_code_fkey" FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code),
    CONSTRAINT "seats_aircraft_code_fkey" FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code) ON DELETE CASCADE
);

CREATE TABLE airport (
    airport_code char(3) NOT NULL,
    airport_name char(40),
    city char(20),
    coordinates point,
    timezone text,
    PRIMARY KEY (airport_code)
);

CREATE TABLE flights (
    flight_id integer NOT NULL,
    flight_no character(6) NOT NULL,
    scheduled_departure timestamp WITH time zone NOT NULL,
    scheduled_arrival timestamp WITH time zone NOT NULL,
    departure_airport character(3) NOT NULL,
    arrival_airport character(3) NOT NULL,
    STATUS character varying(20) NOT NULL,
    aircraft_code character(3) NOT NULL,
    seats_available integer NOT NULL,
    seats_booked integer NOT NULL,
    price numeric(10, 2) NOT NULL,
    stops boolean NOT NULL,
    PRIMARY KEY (flight_id),
    CONSTRAINT flights_aircraft_code_fkey FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code),
    CONSTRAINT flights_arrival_airport_fkey FOREIGN KEY (arrival_airport) REFERENCES airport(airport_code),
    CONSTRAINT flights_departure_airport_fkey FOREIGN KEY (departure_airport) REFERENCES airport(airport_code),
    CONSTRAINT flights_check CHECK ((scheduled_arrival > scheduled_departure)),
    CONSTRAINT flights_status_check CHECK (
        (
            (STATUS)::text = ANY (
                ARRAY [('On Time'::character varying)::text, ('Delayed'::character varying)::text, ('Departed'::character varying)::text, ('Arrived'::character varying)::text, ('Scheduled'::character varying)::text, ('Cancelled'::character varying)::text]
            )
        )
    )
);

CREATE TABLE bookings (
    book_ref character(6) NOT NULL,
    book_date timestamp WITH time zone NOT NULL,
    total_amount numeric(10, 2) NOT NULL,
    numAdults integer NOT NULL,
    numChildren integer NOT NULL,
    PRIMARY KEY(book_ref)
);

CREATE TABLE customer_info(
    customer_id varchar(10) NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    address text NOT NULL,
    city text NOT NULL,
    zip integer NOT NULL,
    state varchar(2) NOT NULL,
    country varchar(3) NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    book_ref character(6),
    PRIMARY KEY(customer_id),
    CONSTRAINT customer_info_book_ref_fkey FOREIGN KEY(book_ref) REFERENCES bookings(book_ref)
);

CREATE TABLE receipt(
    receipt_no varchar(10) NOT NULL,
    customer_id varchar(10) NOT NULL,
    taxes numeric(4, 2) NOT NULL,
    discount numeric(4, 2) NOT NULL,
    seat_cost numeric(10, 2) NOT NULL,
    baggage_cost numeric(10, 2) NOT NULL,
    flight_cost numeric(10, 2) NOT NULL,
    total_cost numeric(10, 2) NOT NULL,
    PRIMARY KEY(receipt_no),
    CONSTRAINT receipt_customer_id_fkey FOREIGN KEY(customer_id) REFERENCES customer_info(customer_id)
);

CREATE TABLE card_info(
    customer_id varchar(10) NOT NULL,
    cardholder_name text NOT NULL,
    card_no text NOT NULL,
    expiration text NOT NULL,
    cvv text NOT NULL,
    PRIMARY KEY(customer_id),
    CONSTRAINT card_info_customer_id FOREIGN KEY(customer_id) REFERENCES customer_info(customer_id)
);

CREATE TABLE passenger(
    passenger_id varchar(20),
    book_ref character(6),
    first_name text,
    last_name text,
    address text,
    passport_license TEXT,
    email text,
    phone text,
    city text,
    state varchar(2),
    country varchar(3),
    zip integer,
    PRIMARY KEY(passenger_id),
    CONSTRAINT passenger_book_ref_fkey FOREIGN KEY(book_ref) REFERENCES bookings(book_ref)
);

CREATE TABLE ticket(
    ticket_no char(13) NOT NULL,
    book_ref character(6) NOT NULL,
    passenger_id varchar(20) NOT NULL,
    PRIMARY KEY (ticket_no),
    CONSTRAINT tickets_book_ref_fkey FOREIGN KEY (book_ref) REFERENCES bookings(book_ref),
    CONSTRAINT tickets_passenger_id_fkey FOREIGN KEY(passenger_id) REFERENCES passenger(passenger_id)
);

CREATE TABLE waitlist(
    book_ref character(6) NOT NULL,
    flight_id integer NOT NULL,
    position integer NOT NULL,
    PRIMARY KEY(book_ref, flight_id),
    CONSTRAINT waitlist_book_ref_fkey FOREIGN KEY(book_ref) REFERENCES bookings(book_ref),
    CONSTRAINT waitlist_flight_id_fkey FOREIGN KEY(flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE ticket_flights (
    ticket_no character(13) NOT NULL,
    flight_id integer NOT NULL,
    fare_conditions character varying(10) NOT NULL,
    amount numeric(10, 2) NOT NULL,
    PRIMARY KEY (ticket_no, flight_id),
    CONSTRAINT ticket_flights_flight_id_fkey FOREIGN KEY (flight_id) REFERENCES flights(flight_id),
    CONSTRAINT ticket_flights_ticket_no_fkey FOREIGN KEY (ticket_no) REFERENCES ticket(ticket_no),
    CONSTRAINT ticket_flights_amount_check CHECK ((amount >= (0)::numeric))
);

CREATE TABLE baggings(
    baggage_no character varying(13) NOT NULL,
    bagType text NOT NULL,
    cost numeric(10, 2) NOT NULL,
    quantity integer NOT NULL,
    price numeric(10, 2) NOT NULL,
    PRIMARY KEY(baggage_no)
);

CREATE TABLE boarding_passes (
    ticket_no character(13) NOT NULL,
    seat_no character varying(3),
    baggage_no character varying(13) NOT NULL,
    arrival_gate character(2) NOT NULL,
    arrival_time timestamp WITH time zone NOT NULL,
    boarding_no integer NOT NULL,
    checkin boolean NOT NULL,
    PRIMARY KEY(ticket_no),
    CONSTRAINT boarding_passes_ticket_no_fkey FOREIGN KEY (ticket_no) REFERENCES ticket(ticket_no),
    CONSTRAINT boarding_passes_baggage_no_fkey FOREIGN KEY (baggage_no) REFERENCES baggings(baggage_no)
);

CREATE TABLE seats (
    aircraft_code character(3) NOT NULL,
    seat_no character varying(3) NOT NULL,
    fare_conditions character varying(10) NOT NULL,
    price numeric(10, 2) NOT NULL,
    flight_id INTEGER NOT NULL,
    PRIMARY KEY (aircraft_code, seat_no, flight_id),
    CONSTRAINT seats_aircraft_code_fkey FOREIGN KEY (aircraft_code) REFERENCES aircraft(aircraft_code) ON DELETE CASCADE,
    CONSTRAINT seats_flight_id_fkey FOREIGN KEY (flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE boarding(
    flight_id integer NOT NULL,
    boarding_time timestamp WITH time zone NOT NULL,
    gate character varying(2) NOT NULL,
    wait_list integer,
    checked_bags boolean NOT NULL,
    PRIMARY KEY(flight_id),
    CONSTRAINT boarding_flight_id_fkey FOREIGN KEY(flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE indirect(
    indirect_flight_id integer NOT NULL,
    flight_id integer NOT NULL,
    scheduled_departure timestamp WITH time zone NOT NULL,
    scheduled_arrival timestamp WITH time zone NOT NULL,
    departure_airport character(3) NOT NULL,
    arrival_airport character(3) NOT NULL,
    PRIMARY KEY(indirect_flight_id),
    CONSTRAINT indirect_flight_id_fkey FOREIGN KEY(flight_id) REFERENCES flights(flight_id),
    CONSTRAINT indirect_arrival_airport_fkey FOREIGN KEY (arrival_airport) REFERENCES airport(airport_code),
    CONSTRAINT indirect_departure_airport_fkey FOREIGN KEY (departure_airport) REFERENCES airport(airport_code),
    CONSTRAINT indirect_check CHECK ((scheduled_arrival > scheduled_departure))
);

CREATE TABLE pilot_detail(
    flight_id integer NOT NULL,
    pilot_name text NOT NULL,
    co_pilot text NOT NULL,
    PRIMARY KEY(flight_id),
    CONSTRAINT pilot_flight_id_fkey FOREIGN KEY(flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE fuel(
    flight_id integer NOT NULL,
    fuel_level integer NOT NULL,
    fuel_capacity integer NOT NULL,
    PRIMARY KEY(flight_id),
    CONSTRAINT fuel_flight_id_fkey FOREIGN KEY(flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE flight_amenity(
    flight_id integer NOT NULL,
    movie boolean NOT NULL,
    meal boolean NOT NULL,
    PRIMARY KEY(flight_id),
    CONSTRAINT amenity_flight_id_fkey FOREIGN KEY(flight_id) REFERENCES flights(flight_id)
);

CREATE TABLE safety(
    flight_id INTEGER NOT NULL,
    preflight_check BOOLEAN NOT NULL,
    DOUBLE_CHECK BOOLEAN NOT NULL,
    PRIMARY KEY(flight_id),
    CONSTRAINT SAFETY_FLIGHT_ID_FKEY FOREIGN KEY(FLIGHT_ID) REFERENCES flights(flight_id)
);

DROP TYPE IF EXISTS pt CASCADE;

CREATE TYPE pt AS (
    passenger_id VARCHAR(20),
    first_name TEXT,
    last_name TEXT,
    address TEXT,
    passport_license text,
    email TEXT,
    phone text,
    city TEXT,
    state VARCHAR(2),
    country VARCHAR(3),
    zip INTEGER,
    bag_type text,
    bagCost numeric(10, 2),
    bagQuantity integer,
    bagPrice numeric(10, 2)
);

CREATE OR REPLACE FUNCTION cx8o24.transaction(
        TYPE text,
        bookRef CHARACTER(6),
        bookDate TIMESTAMP,
        totalAmount NUMERIC(10, 2),
        num_Adults INT,
        num_Children INT,
        goingFlightId INT,
        returnFlightId INT,
        passengers pt [],
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
        tax numeric(4, 2),
        discounts numeric(4, 2),
        seatCost numeric(10, 2),
        baggageCost numeric(10, 2),
        flightCost numeric(10, 2),
        totalCost numeric(10, 2),
        fareConditions character varying(10)
    ) RETURNS void AS $BODY$
DECLARE goingSeats INTEGER;

returnSeats INTEGER;

pass_passenger_id VARCHAR(20);

pass_first_name TEXT;

pass_last_name TEXT;

pass_address TEXT;

pass_passport_license VARCHAR(12);

pass_email TEXT;

pass_phone VARCHAR(10);

pass_city TEXT;

pass_state VARCHAR(2);

pass_country VARCHAR(3);

pass_zip INTEGER;

ticketNo character(13);

baggageNo character varying(13);

bag_Type text;

bagCost numeric(10, 2);

bagQuantity integer;

bagPrice numeric(10, 2);

seatNo character varying(3);

boarding_no integer;

arrival_gate character(2);

arrival_time timestamp WITH time zone;

goinglistPosition INTEGER;

returnlistPosition INTEGER;

BEGIN
SET SCHEMA 'cx8o24';

INSERT INTO cx8o24.bookings(
        book_ref,
        book_date,
        total_amount,
        numAdults,
        numChildren
    )
VALUES (
        bookRef,
        bookDate,
        totalAmount,
        num_Adults,
        num_Children
    );

FOREACH pass_passenger_id,
pass_first_name,
pass_last_name,
pass_address,
pass_passport_license,
pass_email,
pass_phone,
pass_city,
pass_state,
pass_country,
pass_zip IN array passengers LOOP
INSERT INTO cx8o24.passenger(
        passenger_id,
        book_ref,
        first_name,
        last_name,
        address,
        passport_license,
        email,
        phone,
        city,
        state,
        country,
        zip
    )
VALUES (
        pass_passenger_id,
        bookRef,
        pass_first_name,
        pass_last_name,
        pass_address,
        pass_passport_license,
        pass_email,
        pass_phone,
        pass_city,
        pass_state,
        pass_country,
        pass_zip
    );

END LOOP;

INSERT INTO cx8o24.customer_info(
        customer_id,
        first_name,
        last_name,
        address,
        city,
        zip,
        state,
        country,
        email,
        phone,
        book_ref
    )
VALUES(
        customerID,
        cust_first_name,
        cust_last_name,
        cust_address,
        cust_city,
        cust_zip,
        cust_state,
        cust_country,
        cust_email,
        cust_phone,
        bookRef
    );

INSERT INTO cx8o24.card_info(
        customer_id,
        cardholder_name,
        card_no,
        expiration,
        cvv
    )
VALUES(customerID, cardholderName, cardNo, exp, cvvz);

INSERT INTO cx8o24.receipt(
        receipt_no,
        customer_id,
        taxes,
        discount,
        seat_cost,
        baggage_cost,
        flight_cost,
        total_cost
    )
VALUES(
        receiptNo,
        customerID,
        tax,
        discounts,
        seatCost,
        baggageCost,
        flightCost,
        totalCost
    );

SELECT seats_available
FROM cx8o24.flights
WHERE flight_id = goingFlightId FOR
UPDATE INTO goingSeats;

SELECT seats_available
FROM  cx8o24.flights
WHERE flight_id = returnFlightId FOR
UPDATE INTO returnSeats;

IF (
    (
        TYPE = 'round_trip'
        AND goingSeats > totalPassengers
        AND returnSeats > totalPassengers
    )
    OR (
        TYPE = 'one_way'
        AND goingSeats > totalPassengers
    )
) THEN FOREACH pass_passenger_id,
pass_first_name,
pass_last_name,
pass_address,
pass_passport_license,
pass_email,
pass_phone,
pass_city,
pass_state,
pass_country,
pass_zip,
bag_type,
bagCost,
bagQuantity,
bagPrice IN array passengers LOOP
SELECT substr(md5(random()::text), 0, 13) INTO ticketNo;

SELECT substr(md5(random()::text), 0, 13) INTO baggageNo;

SELECT substr(md5(random()::text), 0, 2) INTO arrival_gate;

SELECT scheduled_departure
FROM  cx8o24.flights
WHERE flight_id = goingFlightId INTO arrival_time;

SELECT floor(random() * 100 -1) INTO boarding_no;

INSERT INTO  cx8o24.ticket(ticket_no, book_ref, passenger_id)
VALUES (ticketNo, bookRef, pass_passenger_id);

INSERT INTO  cx8o24.baggings(baggage_no, bagtype, cost, quantity, price)
VALUES(
        baggageNo,
        bag_type,
        bagCost,
        bagQuantity,
        bagPrice
    );

INSERT INTO  cx8o24.boarding_passes(
        ticket_no,
        seat_no,
        baggage_no,
        arrival_gate,
        arrival_time,
        checkin,
        boarding_no
    )
VALUES(
        ticketNo,
        seatNo,
        baggageNo,
        arrival_gate,
        arrival_time,
        'FALSE',
        boarding_no
    );

INSERT INTO  cx8o24.ticket_flights(ticket_no, flight_id, fare_conditions, amount)
VALUES(
        ticketNo,
        goingFlightId,
        fareConditions,
        totalCost
    );

UPDATE  cx8o24.flights
SET seats_available = seats_available - 1,
    seats_booked = seats_booked + 1
WHERE seats_available > 0
    AND flight_id = goingFlightId;

UPDATE  cx8o24.flights
SET seats_available = seats_available - 1,
    seats_booked = seats_booked + 1
WHERE seats_available > 0
    AND flight_id = returnFlightId;

END LOOP;

ELSE
SELECT COUNT(*) + 1
FROM  cx8o24.waitlist
WHERE flight_id = goingFlightId INTO goinglistPosition;

SELECT COUNT(*) + 1
FROM  cx8o24.waitlist
WHERE flight_id = returnFlightId INTO returnlistPosition;

INSERT INTO  cx8o24.waitlist
VALUES(bookRef, goingFlightID, goinglistPosition);

INSERT INTO  cx8o24.waitlist
VALUES(bookRef, returnFlightID, returnlistPosition);

END IF;

END;

$BODY$ LANGUAGE 'plpgsql';
