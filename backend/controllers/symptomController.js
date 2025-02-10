const SymptomLog = require("../models/SymptomLog");
const jwt = require("jsonwebtoken");
const { runMLAnalysis } = require("../ml/mlAnalysis");

exports.addSymptomLog = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { painLevel, cycleDay, medicationTaken, notes, lifestyleFactors } = req.body;

    const newLog = new SymptomLog({
      userId,
      painLevel,
      cycleDay,
      medicationTaken,
      notes,
      lifestyleFactors
    });
    const savedLog = await newLog.save();

    return res.status(201).json(savedLog);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getSymptomLogs = async (req, res) => {
  try {
    const userId = req.user.userId;
    const logs = await SymptomLog.find({ userId }).sort({ createdAt: -1 });
    return res.json(logs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAnalysis = async (req, res) => {
  try {
    const userId = req.user.userId;
    const logs = await SymptomLog.find({ userId }).lean();
    // Basic ML Analysis
    const analysisResult = runMLAnalysis(logs);
    return res.json(analysisResult);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
