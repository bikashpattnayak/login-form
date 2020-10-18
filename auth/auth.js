exports.isAuthorized = (req, res, next) => {
  if (req.session.isAuthorized) {
    return next();
  } else {
    res.redirect("/login");
  }
};
