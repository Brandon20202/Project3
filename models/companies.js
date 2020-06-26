const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    title:{ type : String, required: true},
    phone:{type: String, required: true},
    email:{type: String, required: true},
    prices:{type: String, required: true},
    Jobs:{type: String, required: true}
});

const Companies = mongoose.model("Companies", CompaniesSchema);

module.exports= Companies;