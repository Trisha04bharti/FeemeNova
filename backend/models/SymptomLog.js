const mongoose = require("mongoose");

const symptomLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    painLevel: {
      type: Number,
      required: true
    },
    cycleDay: {
      type: Number,
      default: null
    },
    medicationTaken: {
      type: String,
      default: ""
    },
    notes: {
      type: String,
      default: ""
    },
    lifestyleFactors: {
      diet: { type: String, default: "" },
      stressLevel: { type: Number, default: 0 },
      exercise: { type: String, default: "" }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SymptomLog", symptomLogSchema);
