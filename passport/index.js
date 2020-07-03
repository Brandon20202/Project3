const passport = require("passport");
const User = require("../modelsmongo/User");

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {

    User.findOne({ _id: id })
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            return done(err, null);
        });
});

const SignUpStrategy = require("./SignUp");
const LogInStrategy = require("./LogIn");

passport.use("local-signup", SignUpStrategy);
passport.use("local-login", LogInStrategy);

module.exports = passport;