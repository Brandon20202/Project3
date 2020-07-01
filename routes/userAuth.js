const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.post("/login", (req, res, next) => {

    passport.authenticate("local-login", function(error, user, info) {

        if (error) {
            return res.send(error.message)
        };

        return res.json(user)

    })(req, res, next);

});

router.post("/signup", (req, res, next) => {
    
    passport.authenticate("local-signup", function(error, user, info) {

        if (error) {
            return res.send(error.message)
        };

        return res.json(user)

    })(req, res, next)

});

module.exports = router;