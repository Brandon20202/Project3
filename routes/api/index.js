const router = require("express").Router();
const companiesRoutes = require("./companies");

router.use("/companies", companiesRoutes);

module.exports = router;