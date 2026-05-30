function checkComment() {
    let comment = document.getElementById("commentInput").value.toLowerCase();

    let score = 100;

    const badWords = [
        // English
        "fake","fraud","scam","idiot","stupid","hate",
        "loser","useless","ugly","cheater","garbage",
        "worst","fool","nonsense","waste",

        // Telugu (English script)
        "panikimalina",
        "chetta",
        "vedhava",
        "daridram",
        "mosagadu",
        "pichi",
        "nikrusta",
        "waste fellow",
        "useless fellow"
    ];

    badWords.forEach(word => {
        if (comment.includes(word)) {
            score -= 20;
        }
    });

    if (score < 0) score = 0;

    let status;

    if (score >= 80) {
        status = "SAFE ✅";
    } else if (score >= 50) {
        status = "WARNING ⚠️";
    } else {
        status = "DANGEROUS ❌";
    }

    document.getElementById("result").innerHTML =
        `Score: ${score}<br>Status: ${status}`;
}