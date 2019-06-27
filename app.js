const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const passport = require("passport");
const db = require("./config/db.js");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
require("./config/passport.js")(passport);

app.use("/api/", indexRouter);
app.use("/api/users", usersRouter);

module.exports = app;
