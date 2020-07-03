const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.get("/", function(req, res) {

    console.log(req.session.passport.user)
    console.log(req.isAuthenticated())

});

router.get("/logout", function(req, res) {
    console.log("hi")
    req.logout();
    req.session.destroy(function() {
        res.clearCookie("connect.sid")
        res.redirect("/")
    });
    
});

router.post("/login", (req, res, next) => {

    passport.authenticate("local-login", function(error, user, info) {

        if (error) {
            return res.send(error)
        };

        if (info) {
            return res.send(info)
        };

        if (user) {

            const account = {
                userName: user.userName,
                email: user.email,
                _id: user._id,
            };

        req.logIn(user, function(err) {
            if (err) {
                return done(err)
            }
        })
        
        return res.send(account); 

        }

    })(req, res, next)

});

router.post("/signup", (req, res, next) => {

    passport.authenticate("local-signup", function(error, user, info) {

        if (error) {
            return res.send(error.message)
        };

        if (user) {

            const account = {
                userName: user.userName,
                email: user.email,
                _id: user._id,
            };

        req.logIn(user, function(err) {
            if (err) {
                return done(err)
            }
        })
        
        return res.send(account); 

        }

    })(req, res, next)

});

module.exports = router;