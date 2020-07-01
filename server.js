const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./passport");
const indexRoute = require("./routes/index");
const userAuthRoutes = require("./routes/userAuth");
const bodyParser = require('body-parser');

const secretKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


// Define middleware here
app.use(cookieParser());
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// app.use("/", indexRoute);
app.use("/authentication", userAuthRoutes);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userAuthentication", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

