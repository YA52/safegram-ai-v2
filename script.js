function checkComment() {

    let comment = document.getElementById("commentInput").value.toLowerCase();

    let score = 100;

    const badWords = [
        "fake","fraud","scam","idiot","stupid","hate",
        "loser","useless","ugly","cheater","garbage",
        "worst","fool","nonsense","waste",
        "panikimalina",
        "chetta",
        "vedhava",
        "mosagadu",
        "daridram"
    ];

    badWords.forEach(word => {
        if (comment.includes(word)) {
            score -= 20;
        }
    });

    if (score < 0) score = 0;

    let status = "";
    let message = "";

    if (score >= 80) {
        status = "SAFE ✅";
        message = "Comment Safe";
    } else if (score >= 50) {
        status = "WARNING ⚠️";
        message = "Comment harmful ga undachu";
    } else {
        status = "DANGEROUS ❌";
        message = "Comment block cheyyali";
    }

    document.getElementById("result").innerHTML =
        `Score: ${score}<br>Status: ${status}<br>${message}`;
}