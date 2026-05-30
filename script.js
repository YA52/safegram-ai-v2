function analyzeComment(text) {
    const lowerText = text.toLowerCase();

    // 🔴 unsafe keywords
    const toxicWords = [
        "stupid", "idiot", "hate", "kill", "worst", "ugly",
        "fake", "scam", "idiot", "damn"
    ];

    const spamWords = [
        "buy now", "click here", "subscribe", "free money",
        "earn fast", "limited offer"
    ];

    let score = 100; // start safe

    // check toxic
    toxicWords.forEach(word => {
        if (lowerText.includes(word)) {
            score -= 25;
        }
    });

    // check spam
    spamWords.forEach(word => {
        if (lowerText.includes(word)) {
            score -= 30;
        }
    });

    // final result
    let result = "";

    if (score >= 70) {
        result = "SAFE ✅";
    } else if (score >= 40) {
        result = "WARNING ⚠️";
    } else {
        result = "DANGEROUS ❌";
    }

    return {
        score: score,
        result: result
    };
}