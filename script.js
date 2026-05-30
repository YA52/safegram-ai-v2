function checkComment() {
    let text = document.getElementById("commentInput").value.toLowerCase();

    let score = 100;

    let badWords = ["hate", "idiot", "stupid", "kill", "scam", "fake"];

    badWords.forEach(word => {
        if (text.includes(word)) {
            score -= 30;
        }
    });

    let result = "";

    if (score > 70) result = "SAFE ✅";
    else if (score > 40) result = "WARNING ⚠️";
    else result = "DANGEROUS ❌";

    document.getElementById("result").innerText =
        "Score: " + score + " → " + result;
}