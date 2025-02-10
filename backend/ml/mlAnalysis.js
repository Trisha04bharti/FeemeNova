/**
 * runMLAnalysis
 * @param {Array} logs - Array of symptom logs
 * @returns {Object} analysisResult
 */

///////////
function runMLAnalysis(logs) {
    if (!logs || logs.length === 0) {
      return { message: "No data available for analysis." };
    }
  
    // Basic correlation logic
    // For demonstration, we just compute average pain based on stress levels and diet quality.
    let totalPain = 0;
    let count = 0;
  
    let stressCorrelation = {};
    let dietCorrelation = {};
  
    logs.forEach((log) => {
      totalPain += log.painLevel;
      count++;
  
      const stress = log.lifestyleFactors?.stressLevel || 0;
      const diet = log.lifestyleFactors?.diet || "unknown";
  
      // Track average pain per stress level
      if (!stressCorrelation[stress]) stressCorrelation[stress] = { totalPain: 0, count: 0 };
      stressCorrelation[stress].totalPain += log.painLevel;
      stressCorrelation[stress].count += 1;
  
      // Track average pain per diet type
      if (!dietCorrelation[diet]) dietCorrelation[diet] = { totalPain: 0, count: 0 };
      dietCorrelation[diet].totalPain += log.painLevel;
      dietCorrelation[diet].count += 1;
    });
  
    const averagePain = totalPain / count;
  
    const stressAvg = {};
    for (let s in stressCorrelation) {
      stressAvg[s] = (stressCorrelation[s].totalPain / stressCorrelation[s].count).toFixed(2);
    }
  
    const dietAvg = {};
    for (let d in dietCorrelation) {
      dietAvg[d] = (dietCorrelation[d].totalPain / dietCorrelation[d].count).toFixed(2);
    }
  
    return {
      overallAveragePain: averagePain.toFixed(2),
      painByStressLevel: stressAvg,
      painByDietType: dietAvg
    };
  }
  
  module.exports = { runMLAnalysis };
  
