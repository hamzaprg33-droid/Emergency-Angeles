const unbanWebhook =
"https://discord.com/api/webhooks/1460146087011815598/TVzPi_aOPikdyYIqqaVBAUqCzAlal6EsncSV4WKcwdZYt24CqBqGZ44mlpRncRDp9m77";

document.getElementById("unbanForm").addEventListener("submit", async e => {
    e.preventDefault();

    const username = e.target.username.value;
    const banReason = e.target.banReason.value;
    const additionalInfo = e.target.additionalInfo.value;

    const embed = {
        title: "🔓 Unban Request",
        description:
            `**Username:** ${username}\n` +
            `**Ban Reason:** ${banReason}\n` +
            `**Additional Info:** ${additionalInfo}`,
        color: 3447003
    };

    try {
        await fetch(unbanWebhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ embeds: [embed] })
        });
        alert("Unban request sent successfully.");
        e.target.reset();
    } catch (err) {
        console.error(err);
        alert("Error sending unban request.");
    }
});
