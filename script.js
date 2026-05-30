async function checkComment() {
    const text = document.getElementById("commentInput").value;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY_HERE"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a comment safety checker. Classify comments as SAFE, WARNING, or DANGEROUS and give short reason."
                },
                {
                    role: "user",
                    content: text
                }
            ]
        })
    });

    const data = await response.json();

    const result = data.choices[0].message.content;

    document.getElementById("result").innerText = result;
}