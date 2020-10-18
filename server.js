const express = require("express");
const bodyParser = require("body-parser");
const expressEjsLayouts = require("express-ejs-layouts");
const loginRoute = require("./routes/login");
const session = require("express-session");
const flash = require("connect-flash");
const authorized = require("./auth/auth");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(expressEjsLayouts);
app.use(
  session({
    secret: "bikash",
    saveUninitialized: false,
    resave: true,
    cooike: {
      maxAge: 6000,
    },
    name: "token",
  })
);
app.use(flash());

app.use("/", loginRoute);

app.listen(3000, () => {
  console.log(`Server started`);
});
