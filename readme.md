VIDEO DEMO: https://drive.google.com/file/d/19kuLJxHfJdffV-UoTegG7WzzZp9oXiCi/view?usp=sharing

PRE REQUISITE: 
- make sure to have nodejs install and npm package manager

- DATABASE:
1. please run create.sql and insert.sql into the postgres database

- BACKEND:

1. make sure to put your password and username inside backend/database/password.txt
    - username with no space on first line
    - password with no spaces on second line
    - IF THIS DOES NOT WORK PLEASE REPLACE user and pass in database/connection.js manually
        - with your username and password, both as strings


2. type the following commands while the terminal is inside the backend folder
    - to get to backend folder type the following "cd backend"
    - npm install
    - npm start


- FRONTEND:
1. type the following commands while the terminal is inside the frontend folder
    - to get to backend folder type the following "cd frontend"
    - npm install
    - npm start
    - go to localhost:3000


** MAKE SURE TO START BACKEND SERVER BEFORE FRONTEND ***


- APPLICATION:
- QUICK CHECK: TO CHECK IF YOU CONNECTED TO THE DATABASE SERVER, CLICK FLIGHTS TAB AND BACKEND POWERSHELL SHOULD
NOT DISPLAY ERRORS. IF IT DOES, YOUR CONNECTION IS WRONG. AT THIS POINT REFER TO STEP 1 AND MANUALLY INPUT YOUR 
INFORMATION.

** FILL OUT ALL FORM FIELDS AS REALISTICALLY AS POSSIBLE **

    1. in the booking form you can fill out fields or leave the dates field as is, itll still search flights without the dates.
    2. make sure fill in airports and number of adults and number of children:
        - if 0 then please put 0

    3. select the flights that are offered based on your search by clicking the square checkbox, once flights are chosen a continue button will appear allowing you to proceed, if no flights are offered click the book tab on the top and search again, to see all flights go to the flights tab

    4. Fill in the passengers information, based on the number of adults and number of children there will be that many passenger forms, PLEASE FILL IN ALL FIELDS!!, you can also choose seats and bagging extra if you so want to. Once completed click the button on the to proceed to checkout page

    5. fill out every field in the checkout page with the persons information who is going to pay, you dont have to however apply a promo code

    6. once you complete the checkout form and press the complete button, the a modal will appear showing you the total, and once you press pay then it should redirect you to a receipt page showing you the receipt number, ticket number and boarding details. Make sure to save the ticket number if you want to use the CHECKIN functionality on the top bar.


NOTE: ALL SQL COMMANDS ARE GENERATED FROM BACKEND. TRANSACTIONS GENERATED USING TEMPLATE FROM CREATE.SQL. 