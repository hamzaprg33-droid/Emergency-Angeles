const reportWebhook =
"https://discord.com/api/webhooks/1460146290619846716/4CZJ2po6ZALtuVO0sh79xXg6KHOJemmBqDsRnl_KK23dOKFI4ZmFf23ZBjMPyg_6Gnp7";

document.getElementById("reportForm").addEventListener("submit", async e => {
    e.preventDefault();

    const player = e.target.player.value;
    const reporter = e.target.reporter.value;
    const reasonCategory = e.target.reasonCategory.value;
    const additionalInfo = e.target.additionalInfo.value;
    const fileInput = e.target.clipFile;

    let fileDescription = "No file attached.";

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileDescription = `File attached: ${file.name}`;
    }

    const embed = {
        title: "🚩 Player Report",
        description:
            `**Player:** ${player}\n` +
            `**Reported By:** ${reporter}\n` +
            `**Reason:** ${reasonCategory}\n` +
            `**Additional Info:** ${additionalInfo}\n` +
            `${fileDescription}`,
        color: 15158332
    };

    try {
        await fetch(reportWebhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ embeds: [embed] })
        });
        alert("Report sent successfully.");
        e.target.reset();
    } catch (err) {
        console.error(err);
        alert("Error sending report.");
    }
});
