const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");
const loginValidation = require("../validation/loginValidation");
const registerValidation = require("../validation/regsiterValidation");
const passport = require("passport");

router.post(
  "/register",
  (req, res, next) => {
    const { isValid, errors } = registerValidation(req.body);
    !isValid ? res.status(400).json({ errors }) : next();
  },
  async (req, res) => {
    try {
      let { username, password, email } = req.body;
      let hash = await bcrypt.hash(password, 13);
      let newUser = new User({
        username,
        email,
        password: hash
      });
      await newUser.save();
      res.sendStatus(200);
    } catch (error) {
      let errors = {};
      if (error.code === 11000) {
        let errmsg = error.errmsg;
        errmsg.includes("username")
          ? (errors.username = "Username already exists")
          : (errors.email = "Email address already in use");
        return res.status(400).json({ errors });
      } else {
        console.log(error);
        return res.status(500).json({ error: error });
      }
    }
  }
);

router.post(
  "/login",
  (req, res, next) => {
    const { isValid, errors } = loginValidation(req.body);
    !isValid ? res.status(400).json({ errors }) : next();
  },
  async (req, res, next) => {
    try {
      let { username, password } = req.body;
      let user = await User.findOne({ username });
      if (!user) {
        //intentionally obtuse
        let errors = {};
        errors.username = "Username or Password incorrect";
        return res.status(400).json({ errors });
      }
      let passwordDoesMatch = await bcrypt.compare(password, user.password);

      if (passwordDoesMatch) {
        const token = await jwt.sign(
          {
            id: user.id,
            username: user.username,
            email: user.email
          },
          secretKey,
          { expiresIn: "2h" }
        );
        return res.status(200).json({
          success: true,
          token: "Bearer " + token
        });
      } else {
        let errors = {};
        errors.password = "Username or Password incorrect";
        return res.status(404).json({ errors });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }
);

router.get("/dashboard", async (req, res, next) => {});

/*
  Profiles
  Change routes? 
  /users/user/ - /users/user/:userId Could lead to confusion
*/
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
/*
  List user profiles
*/
router.get("/user/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

/*
  Get user Profile
*/
router.get("/user/:userId", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

module.exports = router;
