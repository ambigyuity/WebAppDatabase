/*aircraft*/
INSERT INTO aircraft
VALUES ('773', 'Boeing 777-300', 11100);

INSERT INTO aircraft
VALUES ('763', 'Boeing 767-300', 7900);

INSERT INTO aircraft
VALUES ('SU9', 'Boeing 777-300', 5700);

INSERT INTO aircraft
VALUES ('320', 'Boeing 777-300', 6400);

INSERT INTO aircraft
VALUES ('321', 'Boeing 777-300', 6100);

/*airport */
INSERT INTO airport
VALUES (
        'HOU',
        'George Bush Airport',
        'Houston',
        NULL,
        'CT'
    );

INSERT INTO airport
VALUES (
        'JFK',
        'John F Kennedy Airport',
        'New York',
        NULL,
        'ET'
    );

INSERT INTO airport
VALUES (
        'LAX',
        'Los Angeles Airport',
        'Los Angeles',
        NULL,
        'PT'
    );

INSERT INTO airport
VALUES ('ORD', 'O Hare Airport', 'Chicago', NULL, 'CT');

INSERT INTO airport
VALUES ('MIA', 'Miami Airport', 'Miami', NULL, 'ET');

INSERT INTO flights
VALUES (
        1001,
        'PG0010',
        '2020-11-10 09:50:00+03',
        '2020-11-10 14:55:00+03',
        'HOU',
        'JFK',
        'Scheduled',
        '773',
        10,
        0,
        102.99,
        TRUE
    );

INSERT INTO flights
VALUES (
        1002,
        'PG0020',
        '2020-11-11 09:50:00+03',
        '2020-11-11 15:55:00+03',
        'LAX',
        'JFK',
        'Scheduled',
        '763',
        10,
        0,
        89.49,
        FALSE
    );

INSERT INTO flights
VALUES (
        1003,
        'PG0030',
        '2020-11-11 09:50:00+03',
        '2020-11-11 16:55:00+03',
        'ORD',
        'MIA',
        'Scheduled',
        'SU9',
        10,
        0,
        346.99,
        FALSE
    );

INSERT INTO flights
VALUES (
        1004,
        'PG0040',
        '2020-11-12 09:50:00+03',
        '2020-11-12 12:55:00+03',
        'JFK',
        'ORD',
        'Scheduled',
        '320',
        10,
        0,
        199.50,
        FALSE
    );

INSERT INTO flights
VALUES (
        1005,
        'PG0050',
        '2020-11-12 09:50:00+03',
        '2020-11-12 12:55:00+03',
        'MIA',
        'LAX',
        'Scheduled',
        '321',
        10,
        0,
        249.99,
        FALSE
    );

INSERT INTO flights
VALUES (
        1006,
        'PG0060',
        '2020-11-13 09:50:00+03',
        '2020-11-13 12:55:00+03',
        'JFK',
        'HOU',
        'Scheduled',
        '773',
        10,
        0,
        149.99,
        TRUE
    );

INSERT INTO flights
VALUES (
        1007,
        'PG0070',
        '2020-11-14 09:50:00+03',
        '2020-11-14 12:55:00+03',
        'JFK',
        'LAX',
        'Scheduled',
        '763',
        10,
        0,
        99.50,
        TRUE
    );

INSERT INTO flights
VALUES (
        1008,
        'PG0080',
        '2020-11-14 09:50:00+03',
        '2020-11-14 16:55:00+03',
        'MIA',
        'ORD',
        'Scheduled',
        'SU9',
        10,
        0,
        210.00,
        FALSE
    );

INSERT INTO flights
VALUES (
        1009,
        'PG0090',
        '2020-11-15 09:50:00+03',
        '2020-11-15 12:55:00+03',
        'ORD',
        'JFK',
        'Scheduled',
        '320',
        10,
        0,
        49.99,
        FALSE
    );

INSERT INTO flights
VALUES (
        1010,
        'PG0100',
        '2020-11-12 09:50:00+03',
        '2020-11-12 12:55:00+03',
        'LAX',
        'MIA',
        'Scheduled',
        '321',
        10,
        0,
        129.99,
        FALSE
    );


INSERT INTO indirect
VALUES (
        2001,
        1001,
        '2020-11-10 10:50:00+03',
        '2020-11-10 11:55:00+03',
        'MIA',
        'ORD'
    );

INSERT INTO indirect
VALUES (
        2002,
        1001,
        '2020-11-10 12:50:00+03',
        '2020-11-10 14:55:00+03',
        'ORD',
        'JFK'
    );

INSERT INTO indirect
VALUES (
        2003,
        1006,
        '2020-11-13 11:50:00+03',
        '2020-11-13 12:55:00+03',
        'ORD',
        'HOU'
    );

INSERT INTO indirect
VALUES (
        2004,
        1007,
        '2020-11-14 11:00:00+03',
        '2020-11-14 12:55:00+03',
        'HOU',
        'LAX'
    );


INSERT INTO boarding
VALUES (
	1001,
	'2020-11-10 09:30:00+03',
	'A0',
	10,
	'TRUE'
);

INSERT INTO boarding
VALUES (
	1002,
	'2020-11-11 09:30:00+03',
	'A1',
	10,
	'TRUE'
);

INSERT INTO boarding
VALUES (
	1003,
	'2020-11-11 09:30:00+03',
	'A2',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1004,
	'2020-11-12 09:30:00+03',
	'A3',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1005,
	'2020-11-12 09:30:00+03',
	'A4',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1006,
	'2020-11-13 09:30:00+03',
	'A5',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1007,
	'2020-11-14 09:30:00+03',
	'A6',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1008,
	'2020-11-14 09:30:00+03',
	'A7',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1009,
	'2020-11-15 09:30:00+03',
	'A8',
	10,
	'TRUE'
);
INSERT INTO boarding
VALUES (
	1010,
	'2020-11-12 09:30:00+03',
	'A9',
	10,
	'TRUE'
);



INSERT INTO seats
VALUES(
	'773',
	'A22',
	'Economy',
	20.00,
	1001
);

INSERT INTO seats
VALUES(
	'773',
	'A32',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'A42',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'A52',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'A62',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'A72',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'A82',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'A92',
	'Economy',
	20.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'B01',
	'Business',
	30.00,
	1001
);
INSERT INTO seats
VALUES(
	'773',
	'C01',
	'Comfort',
	50.00,
	1001
);


INSERT INTO seats
VALUES(
	'763',
	'A21',
	'Economy',
	20.00,
	1002
);


INSERT INTO seats
VALUES(
	'763',
	'A31',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'A41',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'A51',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'A61',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'A71',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'A81',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'A91',
	'Economy',
	20.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'B01',
	'Business',
	30.00,
	1002
);

INSERT INTO seats
VALUES(
	'763',
	'C01',
	'Comfort',
	50.00,
	1002
);

INSERT INTO seats
VALUES(
	'SU9',
	'D01',
	'Business',
	30.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'D02',
	'Business',
	30.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'D03',
	'Business',
	30.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'D04',
	'Business',
	30.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'D05',
	'Business',
	30.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'E01',
	'Economy',
	20.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'E02',
	'Economy',
	20.00,
	1003
);

INSERT INTO seats
VALUES(
	'SU9',
	'E03',
	'Economy',
	20.00,
	1003
);

INSERT INTO seats
VALUES(
	'SU9',
	'E04',
	'Economy',
	20.00,
	1003
);
INSERT INTO seats
VALUES(
	'SU9',
	'E05',
	'Economy',
	20.00,
	1003
);

INSERT INTO seats
VALUES(
	'320',
	'A01',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A02',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A03',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A04',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A05',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A06',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A07',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A08',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A09',
	'Economy',
	20.00,
	1004
);
INSERT INTO seats
VALUES(
	'320',
	'A10',
	'Economy',
	20.00,
	1004
);

INSERT INTO seats
VALUES(
	'321',
	'A01',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A02',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A03',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A04',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A05',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A06',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A07',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A08',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A09',
	'Economy',
	20.00,
	1005
);
INSERT INTO seats
VALUES(
	'321',
	'A10',
	'Economy',
	20.00,
	1005
);

INSERT INTO seats
VALUES(
	'773',
	'A22',
	'Economy',
	20.00,
	1006
);

INSERT INTO seats
VALUES(
	'773',
	'A32',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'A42',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'A52',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'A62',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'A72',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'A82',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'A92',
	'Economy',
	20.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'B01',
	'Business',
	30.00,
	1006
);
INSERT INTO seats
VALUES(
	'773',
	'C01',
	'Comfort',
	50.00,
	1006
);


INSERT INTO seats
VALUES(
	'763',
	'A21',
	'Economy',
	20.00,
	1007
);


INSERT INTO seats
VALUES(
	'763',
	'A31',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'A41',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'A51',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'A61',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'A71',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'A81',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'A91',
	'Economy',
	20.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'B01',
	'Business',
	30.00,
	1007
);

INSERT INTO seats
VALUES(
	'763',
	'C01',
	'Comfort',
	50.00,
	1007
);

INSERT INTO seats
VALUES(
	'SU9',
	'D01',
	'Business',
	30.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'D02',
	'Business',
	30.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'D03',
	'Business',
	30.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'D04',
	'Business',
	30.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'D05',
	'Business',
	30.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'E01',
	'Economy',
	20.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'E02',
	'Economy',
	20.00,
	1008
);

INSERT INTO seats
VALUES(
	'SU9',
	'E03',
	'Economy',
	20.00,
	1008
);

INSERT INTO seats
VALUES(
	'SU9',
	'E04',
	'Economy',
	20.00,
	1008
);
INSERT INTO seats
VALUES(
	'SU9',
	'E05',
	'Economy',
	20.00,
	1008
);

INSERT INTO seats
VALUES(
	'320',
	'A01',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A02',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A03',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A04',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A05',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A06',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A07',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A08',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A09',
	'Economy',
	20.00,
	1009
);
INSERT INTO seats
VALUES(
	'320',
	'A10',
	'Economy',
	20.00,
	1009
);

INSERT INTO seats
VALUES(
	'321',
	'A01',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A02',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A03',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A04',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A05',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A06',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A07',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A08',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A09',
	'Economy',
	20.00,
	1010
);
INSERT INTO seats
VALUES(
	'321',
	'A10',
	'Economy',
	20.00,
	1010
);

INSERT INTO safety
VALUES(
       1001,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1002,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1003,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1004,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1005,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1006,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1007,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1008,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1009,
       TRUE,
       TRUE
);

INSERT INTO safety
VALUES(
       1010,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1001,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1002,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1003,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1004,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1005,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1006,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1007,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1008,
       TRUE,
       TRUE
);

INSERT INTO flight_amenity
VALUES(
       1009,
       TRUE,
       FALSE
);

INSERT INTO flight_amenity
VALUES(
       1010,
       FALSE,
       TRUE
);

INSERT INTO fuel
VALUES(
       1001,
       100,
       5000
);

INSERT INTO fuel
VALUES(
       1002,
       100,
       6000
);


INSERT INTO fuel
VALUES(
       1003,
       100,
       7000
);


INSERT INTO fuel
VALUES(
       1004,
       100,
       8000
);

INSERT INTO fuel
VALUES(
       1005,
       100,
       9000
);


INSERT INTO fuel
VALUES(
       1006,
       100,
       4500
);


INSERT INTO fuel
VALUES(
       1007,
       100,
       5500
);

INSERT INTO fuel
VALUES(
       1008,
       100,
       6500
);

INSERT INTO fuel
VALUES(
       1009,
       100,
       7500
);

INSERT INTO fuel
VALUES(
       1010,
       100,
       4200
);

INSERT INTO pilot_detail
VALUES(
       1001,
       'Simon Says',
       'Bob Builder'
                         
);
INSERT INTO pilot_detail
VALUES(
       1002,
       'Cormac Kazuya',
       'Rutendo Kirabo'
                         
);
INSERT INTO pilot_detail
VALUES(
       1003,
       'Volya Nanjala','Rupa Vilfredo'
                         
);
INSERT INTO pilot_detail
VALUES(
       1004,
       'Shlomit Teodoro','Gunter Alexandra'
                         
);
INSERT INTO pilot_detail
VALUES(
       1005,
       'Vitaliy Benjamin','Korneliya Ilbert'
                         
);
INSERT INTO pilot_detail
VALUES(
       1006,
       'Ranjeet Etain','Bazyli Dulce'
                         
);
INSERT INTO pilot_detail
VALUES(
       1007,
       'Amir Okorie','Petronela Nefertiti'
                         
);
INSERT INTO pilot_detail
VALUES(
       1008,
       'Harshad Elin','Minke Marcela'
                         
);
INSERT INTO pilot_detail
VALUES(
       1009,
       'Rosette Brais','Thandi Kamilla'
                         
);
INSERT INTO pilot_detail
VALUES(
       1010,
       'Bishan Xenokrates','Lorencio Joi'
                         
);

