const router = require("express").Router();
const eventsController = require("../../controllers/eventsControllers");

// Matches with "/api/users"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);
  // api/users for the post

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;