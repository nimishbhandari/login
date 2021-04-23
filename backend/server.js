const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//config file
dotenv.config({ path: "./config.env" });

app.use(cookieParser());

// connection file
require("./db/conn");

//json
app.use(express.json());

//auth router
app.use(require("./router/auth"));

// homepage route
app.get("/", (req, res) => {
  res.send("hello1");
});

//about route
// app.get("/about", (req, res) => {
//   res.send("hello about");
// });

//contact route
app.get("/contact", (req, res) => {
  res.send("hello contact");
});

//signin route
app.get("/signin", (req, res) => {
  res.send("hello sigin");
});

//signup route
app.get("/signup", (req, res) => {
  res.send("hello signup");
});

//define port
const PORT = process.env.PORT;

//run server on port
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
