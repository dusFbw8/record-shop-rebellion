const express = require("express");
const router = express.Router();
//shortid
var {
  getRecords,
  postRecord,
  getRecordsId,
  deleteRecordsId,
  putRecord
} = require("../userController");

/* GET users listing. */
router.get("/records", getRecords);
/* POST users listing. */
router.post("/records", postRecord);
router.get("/records/:id", getRecordsId);
router.delete("/records/:id", deleteRecordsId);
router.put("/records/:id", putRecord);
module.exports = router;
