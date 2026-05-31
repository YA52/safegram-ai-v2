async function checkComment() {

    let text = document.getElementById("commentInput").value;

    const res = await fetch(
        "https://safegram-ai-backend.onrender.com/analyze",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: text
            })
        }
    );

    const data = await res.json();

    document.getElementById("result").innerHTML =
        `Score: ${data.score}<br>Status: ${data.status}`;
}