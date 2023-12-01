// Imports
const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./htmlRoutes");

// Middleware
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

// Exports
module.exports = router;