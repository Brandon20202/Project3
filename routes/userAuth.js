const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.post("/login", (req, res, next) => {

    passport.authenticate("local-login", function(error, user, info) {

        if (error) {
            return res.send(error.message)
        };

        if (user) {

            const account = {
                userName: user.userName,
                email: user.email,
                _id: user._id,
            };

        // return res.send(account);

        req.logIn(user, function(err) {
            if (err) {
                return res.send(err)
            }

            return res.redirect("/content")
        })

        }

    })(req, res, next);

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

        return res.send(account); 

        }

    })(req, res, next)

});

module.exports = router;