const Pool = require("pg").Pool;

const fs = require("fs");
const path = require("path");

let user = null;
let pass = null;

const data = fs.readFileSync(path.join(__dirname, "password.txt"));

user = data.toString().split("\n")[0];
pass = data.toString().split("\n")[1];
console.log("user: ", user);
console.log("pass: ", pass);

const pool = new Pool({
  user: user,
  password: pass,
  host: "code.cs.uh.edu",
  port: 5432,
  database: "COSC3380",
});

// const schema = async () => {
//   await pool.query("SET search_path TO 'cx8o24';");
// };
//  schema();

module.exports = pool;
