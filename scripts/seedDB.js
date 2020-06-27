const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URL || 
    "mongodb://localhost/project3"
);

const CompaniesSeed =[

]