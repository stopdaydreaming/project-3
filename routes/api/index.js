const router = require("express").Router();
const characterRoutes = require("./characters")
const userRoutes = require ("./users")

// Book routes


router.use("/characters", characterRoutes);

router.use("/users", userRoutes);

module.exports = router;