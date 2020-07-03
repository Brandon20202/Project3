const Strategy = require("passport-local").Strategy;
const User = require("../modelsmongo/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const LogInStrategty = new Strategy({ passReqToCallback: true }, function(req, username, password, done) {

    const userName = username;
    const passWord = password;
    const email = req.body.email;

    if (!userName || !passWord || !email) {
        return done("Please fill out all fields")
    }

    User.findOne({ userName: userName, email: email }, function(err, user) {

        if (user) {
            const isPasswordValid = bcrypt.compareSync(passWord, user.password);

            if (!isPasswordValid) {
                return done(null, false, { message: "Invalid credintials, please try again" })
            }

            return done(null, user)
        } else if (err) {
            return done(err)
        } else {
            return done(null, false, { message: "Account not found, please try again" })
        }
    });

});

module.exports = LogInStrategty;