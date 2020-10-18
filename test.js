const express = require("express");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "bikash",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3 * 10000,
    },
    name: "auth",
  })
);

app.get("/", (req, res, next) => {
  res.send(`${req.sessionID} - ${req.cookies["auth"]}`);
});

app.get("/store", (req, res, next) => {
  req.session.something = "anotherthing";
  res.send(req.sessionID);
});

app.listen(3001);
