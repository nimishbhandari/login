const express = require("express");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//express router
const router = express.Router();

// connection
require("../db/conn");

// user schema
const User = require("../models/userSchema");
const { rawListeners } = require("../models/userSchema");

//homepage
router.get("/", (req, res) => {
  res.send("hello2");
});

// login
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    // console.log(password);
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res
          .status(400)
          .json({ status: "400", error: "Invalid Credentials pass" });
      } else {
        res.json({ message: "user signin success" });
      }
    } else {
      res.status(400).json({ status: "400", Error: "no email found" });
    }
  } catch (error) {
    console.log(error);
  }
});

//register
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ status: "422", error: "Field Missing" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    // console.log(userExist);
    if (userExist) {
      return res
        .status(422)
        .json({ status: "422", error: "Email Already exist" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ status: "422", error: "Password Does not match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//about us router
router.get("/about", authenticate, (req, res) => {
  res.send("hello about");
  res.send(req.rootUser);
});

module.exports = router;
