function checkComment() {
    let text = document.getElementById("commentInput").value.toLowerCase();

    let score = 100;

    // strong bad intent patterns
    let badPatterns = [
        "you are waste",
        "waste fellow",
        "useless",
        "hate you",
        "very bad",
        "stupid",
        "idiot",
        "worst person",
        "shut up"
    ];

    badPatterns.forEach(p => {
        if (text.includes(p)) {
            score -= 40;
        }
    });

    // single words
    let badWords = ["hate", "idiot", "stupid", "useless", "waste"];

    badWords.forEach(word => {
        if (text.includes(word)) {
            score -= 20;
        }
    });

    let result = "";

    if (score >= 70) {
        result = "SAFE ✅";
    } else if (score >= 40) {
        result = "WARNING ⚠️";
    } else {
        result = "DANGEROUS ❌";
    }

    document.getElementById("result").innerText =
        "Score: " + score + " → " + result;
}