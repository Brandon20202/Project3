const Strategy = require("passport-local").Strategy;
const User = require("../modelsmongo/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const SignUpStrategty = new Strategy({ passReqToCallback: true }, function(req, username, password, done) {

    const userName = username;
    const passWord = password;
    const email = req.body.email;

    if (!userName || !passWord || !email) {
        return done("Please fill out all fields")
    };

    console.log(email)

    User.findOne({ email: email }, function(err, user) {

        if (user) {
            return done("Account already exists")
        }
        if (err) {
            return done(err);
        }
        if (!user) {
            const encryptedPassword = bcrypt.hashSync(passWord, salt);
    
            let newUser = new User({
            username,
            password: encryptedPassword,
            email
            });

            User.create(newUser)
                .then(function(res) {
                    return done(null, res.json)
                })
                .catch(function(err) {
                    return done(err, null)
                })
        }
    });

});

module.exports = SignUpStrategty;