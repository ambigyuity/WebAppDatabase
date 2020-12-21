const express = require("express");
const cors = require("cors");
const db = require("./database/connection");
const bodyParser = require("body-parser");

const passengerRoutes = require("./routes/passenger");
const flightsRoutes = require("./routes/flights");
const checkoutRoutes = require("./routes/checkout");
const bookRoutes = require("./routes/book");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res, next) => {
  try {
    const allTodos = await db.query(
      "SELECT * FROM flights where flight_id = 1001"
    );
    res.send(allTodos.rows);
  } catch (error) {
    console.log(error);
  }
});

app.use("/passenger", passengerRoutes);
app.use("/book", bookRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/flights", flightsRoutes);



app.listen(5000, async () => {
  // await db.query("SET schema  'cx8o24';");
  /* check connection to db, if failed log error message */
  console.log("server has started on port 5000");

});



