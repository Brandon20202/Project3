const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URL || 
    "mongodb://localhost/project3"
);

const CompaniesSeed =[ {
    

    title: "Andrews Lawn Services",
    phone: "5125392993",
    email: "andrew@gmail.com",
    prices: "$55 per acre",
    jobs:"Mowing"

    }
    

];

db.Companies
.remove({})
.then(() => db.Companies.collection.insertMany(CompaniesSeed))
.then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});