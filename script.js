function checkComment() {

    let comment = document.getElementById("commentInput").value.toLowerCase();

    let score = 100;

    const badWords = [
        "waste",
        "idiot",
        "stupid",
        "hate",
        "kill",
        "ugly",
        "loser",
        "useless",
        "fool",
        "scam",
        "bad"
    ];

    badWords.forEach(word => {
        if (comment.includes(word)) {
            score -= 20;
        }
    });

    let status = "";

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