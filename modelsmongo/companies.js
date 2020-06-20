const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    title:{ type : String, required: true},
    phone:{type: Number, required: true},
    email:{type: String, required: true},
    prices:{type: Number, required: true}
});

const Companies = mongoose.model("Companies", CompaniesSchema);

module.exports= Companies