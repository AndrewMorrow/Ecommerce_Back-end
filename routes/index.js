const router = require("express").Router();
const apiRoutes = require("./api");

// checks all routes called from index.js in api folder for a match
// this whole folder will use /api in its routes
router.use("/api", apiRoutes);

// default catch all route if none found above
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
