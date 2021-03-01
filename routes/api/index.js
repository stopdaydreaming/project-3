const router = require("express").Router();
const characterRoutes = require("./characters");
const userRoutes = require("./users");
const eventRoutes = require("./events")

// characters routes

router.use("/characters", characterRoutes);

router.use("/users", userRoutes);

router.use("/events", eventRoutes);

module.exports = router;
