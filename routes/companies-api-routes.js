// var db =require("../models");

// module.exports = function(app){

//     app.get("/api/companies",function(req, res){
//         var query ={};
//         if(req.query.companies_id){
//             query.CompaniesId=req.query.companies_id;
//         }
//         db.Companies.findAll({
//             where:query
//         }).then(function(dbCompanies){
//             res.json(dbCompanies);
//         });
//     });

//     app.get("/api/companies/:id", function(req,res){
//         db.Companies.findOne({
//             where:{
//                 id: req.params.id
//             }
//         }).then(function(dbCompanies){
//             res.json(dbCompanies);
//         });
//     });
//     app.post("/api/companies", function(req, res){
//         db.Companies.create(req.body).then(function(dbCompanies){
//             res.json(dbCompanies);
//         });
//     });
//     app.delete("/api/companies/:id", function(req, res){
//         db.Companies.destroy({
//             where:{
//                 id: req.params.id
//             }
//         }).then(function(dbCompanies){
//             res.json(dbCompanies);
//         });
//     });
//     app.get("/api/keys",function(req, res){
//         db.Keys.findAll({}).then(function(dbKeys) {
//             res.json(dbKeys)
//         })
//     });
// };