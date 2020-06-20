const router = require("express").Router();
const companieController = require("../../controllers/companieController");

router.route("/")
    .get(companieController.findAll)
    .post(companieController.create);

router
    .route("/:id")
    .get(companieController.findByID)
    .put(companieController.update)
    .delete(companieController.remove);;

module.exports = router;