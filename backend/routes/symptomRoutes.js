const express = require("express");
const router = express.Router();
const {
  addSymptomLog,
  getSymptomLogs,
  getAnalysis
} = require("../controllers/symptomController");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, addSymptomLog);
router.get("/", authMiddleware, getSymptomLogs);
router.get("/analysis", authMiddleware, getAnalysis);

module.exports = router;
