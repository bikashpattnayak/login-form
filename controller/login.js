exports.login = (req, res, next) => {
  res.render("login", {
    title: "Login",
    success: req.flash("success"),
    failure: req.flash("failure"),
  });
};

exports.dashboard = (req, res, next) => {
  let data = {
    "bikashp@hotmail.com": [
      { title: "Nodejs", descrption: "lorem1o" },
      { title: "Reactjs", descrption: "lorem20" },
    ],
    "bikashp1@hotmail.com": [
      { title: "Angularjs", descrption: "lorem1o" },
      { title: "Mongo", descrption: "lorem20" },
    ],
  };
  let filteredData = data[req.session.email];
  return res.render("dashboard", { title: "Home", data: filteredData || [] });
};
exports.loginPost = (req, res, next) => {
  const { email, password } = req.body;
  if (
    (email === "bikashp@hotmail.com" || email === "bikashp1@hotmail.com") &&
    password == "123"
  ) {
    req.session.isAuthorized = true;
    req.session.email = email;
    return res.redirect("/dashboard");
  }
  req.flash("failure", "failed to login");
  res.redirect("/login");
  res.send("awesome");
};

exports.register = (req, res, next) => {
  res.render("register", {
    title: "Register",
    success: req.flash("success"),
    failure: req.flash("failure"),
  });
};

exports.logout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};

exports.registerPost = (req, res, next) => {
  const { email, password, repassword } = req.body;
  const errors = [];
  if (!email) {
    errors.push("Email not provided");
  }
  if (password.length < 6 || repassword.length < 6) {
    errors.push("Password is less than 6 character");
  }

  if (password !== repassword) {
    errors.push("Password doesn't match");
  }
  req.flash("success", "successfully registered");
  req.flash("failure", errors.join(","));
  res.redirect("/login");
  // res.render("register", { title: "Register" });
};

exports.getData = (req, res, next) => {
  res;
};
