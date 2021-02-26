const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// Matches with "/api/books"
router.route("/")
  .get(charactersController.findAll)
  .post(charactersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(charactersController.findById)
  .put(charactersController.update)
  .delete(charactersController.remove);

module.exports = router;