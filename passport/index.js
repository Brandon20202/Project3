const passport = require("passport");

// const googleStrategy = require("./Google");
const SignUpStrategy = require("./SignUp");
const LogInStrategy = require("./LogIn");

passport.use("local-signup", SignUpStrategy);
passport.use("local-login", LogInStrategy);

module.exports = passport;