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

    User.findOne({ email: email }, function(err, user) {
        if (user) {
            const isPasswordValid = bcrypt.compareSync(passWord, dbUser.password);

            if (!isPasswordValid) {
                return done("Invalid credintials, please try agian")
            }

            return done(null, dbUser) 
        } else {
            return done("Account not found, please try agin", null)
        }
    });

});

module.exports = LogInStrategty;