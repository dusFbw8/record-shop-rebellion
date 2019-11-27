const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/records", function(req, res, next) {
  res.send("records");
});
/* POST users listing. */
router.post("/records", function(req, res, next) {
  res.send("posted");
});
module.exports = router;
